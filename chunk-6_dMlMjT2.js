import{t as r}from"./chunk-zystk1pz.js";import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Ft as dt,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Sn as vbe,St as Wo,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Wn as Be,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,ei as Yl,fi as ag,gi as bL,ha as ww,hr as K,jn as ybe,k as Eu,l as ar,la as uo,li as _x,lr as Gl,nt as O8e,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,wn as vr,ya as yb,yi as cN}from"./main-3EWTGE7T.js";var Te=[`target`];var De=()=>({label:`PO Popup`});var ke=l=>[l];var Se=(()=>{class l{cdr=f(Be);targetRef;ngAfterViewInit(){this.cdr.detectChanges()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-basic`]],viewQuery:function(a,o){if(a&1&&Yl(Te,5,K),a&2){let r;lo(r=uo())&&(o.targetRef=r.first)}},standalone:!1,decls:4,vars:5,consts:[[`target`,``],[`popup`,``],[`p-icon`,`an an-question`,1,`po-clickable`,3,`click`],[3,`p-actions`,`p-target`]],template:function(a,o){if(a&1){let r=Ax();Tl(0,`po-icon`,2,0),ht(`click`,function(){Ky(r);return Xy(Bx(3).toggle())}),ag(),Gl(2,`po-popup`,3,1)}a&2&&(jp(2),nw(`p-actions`,DN(3,ke,_N(2,De)))(`p-target`,o.targetRef))},dependencies:[dt,Wo],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Popup - Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-popup-basic/sample-po-popup-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-popup-basic/sample-po-popup-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import {
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-popup-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ve,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return l})();var Oe=[`target`];var Ce=(()=>{class l{poNotification=f(Eu);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(d){let a=r({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions=``,this.properties=[],this.size=`medium`,this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return!d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${`-`.repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o)}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-labs`]],viewQuery:function(a,o){if(a&1&&Yl(Oe,7,K),a&2){let r;lo(r=uo())&&(o.targetRef=r.first)}},standalone:!1,decls:28,vars:25,consts:[[`popup`,``],[`target`,``],[`formAction`,`ngForm`],[`f`,`ngForm`],[3,`p-actions`,`p-custom-positions`,`p-hide-arrow`,`p-position`,`p-size`,`p-target`],[1,`po-row`,`sample-button-container`],[1,`po-offset-xl-5`,`po-offset-lg-5`,`po-md-2`,`po-lg-2`],[`p-label`,`Popup`,3,`p-click`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`customPositions`,`p-help`,`["top", "left", "right-bottom"]`,`p-label`,`Custom positions`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let r=Ax();Gl(0,`po-popup`,4,0),Tl(2,`div`,5)(3,`div`,6)(4,`po-button`,7,1),ht(`p-click`,function(){Ky(r);return Xy(Bx(1).toggle())}),ag()()(),Gl(6,`po-divider`),Tl(7,`form`,null,2)(9,`po-input`,8),ww(`ngModelChange`,function(i){return Ky(r),uN(o.action.label,i)||(o.action.label=i),Xy(i)}),ag(),a0(),Tl(10,`po-input`,9),ww(`ngModelChange`,function(i){return Ky(r),uN(o.action.action,i)||(o.action.action=i),Xy(i)}),ag(),a0(),Tl(11,`po-input`,10),ww(`ngModelChange`,function(i){return Ky(r),uN(o.action.url,i)||(o.action.url=i),Xy(i)}),ag(),a0(),Tl(12,`po-select`,11),ww(`ngModelChange`,function(i){return Ky(r),uN(o.action.type,i)||(o.action.type=i),Xy(i)}),ag(),a0(),Tl(13,`po-select`,12),ww(`ngModelChange`,function(i){return Ky(r),uN(o.action.icon,i)||(o.action.icon=i),Xy(i)}),ag(),a0(),Tl(14,`po-select`,13),ww(`ngModelChange`,function(i){return Ky(r),uN(o.action.parent,i)||(o.action.parent=i),Xy(i)}),ag(),a0(),Tl(15,`po-checkbox-group`,14),ww(`ngModelChange`,function(i){return Ky(r),uN(o.action,i)||(o.action=i),Xy(i)}),ag(),a0(),Tl(16,`div`,15)(17,`po-button`,16),ht(`p-click`,function(){return o.addAction(o.action)}),ag()()(),Gl(18,`po-divider`),Tl(19,`form`,null,3)(21,`div`,15)(22,`po-input`,17),ww(`ngModelChange`,function(i){return Ky(r),uN(o.positions,i)||(o.positions=i),Xy(i)}),ht(`p-change`,function(){return o.convertToArray()}),ag(),a0(),Tl(23,`po-select`,18),ww(`ngModelChange`,function(i){return Ky(r),uN(o.position,i)||(o.position=i),Xy(i)}),ag(),a0(),Tl(24,`po-checkbox-group`,19),ww(`ngModelChange`,function(i){return Ky(r),uN(o.properties,i)||(o.properties=i),Xy(i)}),ag(),a0(),Tl(25,`po-radio-group`,20),ww(`ngModelChange`,function(i){return Ky(r),uN(o.size,i)||(o.size=i),Xy(i)}),ag(),a0(),ag(),Tl(26,`div`,15)(27,`po-button`,21),ht(`p-click`,function(){Ky(r);let i=Bx(8);return Bx(20).reset(),i.reset(),Xy(o.restore())}),ag()()()}if(a&2){let r=Bx(8);nw(`p-actions`,o.actions)(`p-custom-positions`,o.customPositions)(`p-hide-arrow`,o.properties.includes(`hideArrow`))(`p-position`,o.position)(`p-size`,o.size)(`p-target`,o.targetRef),jp(9),Ew(`ngModel`,o.action.label),l0(),jp(),Ew(`ngModel`,o.action.action),l0(),jp(),Ew(`ngModel`,o.action.url),l0(),jp(),Ew(`ngModel`,o.action.type),nw(`p-options`,o.typeOptions),l0(),jp(),Ew(`ngModel`,o.action.icon),nw(`p-options`,o.iconOptions),l0(),jp(),Ew(`ngModel`,o.action.parent),nw(`p-options`,o.parentList),l0(),jp(),Ew(`ngModel`,o.action),nw(`p-options`,o.actionOptions),l0(),jp(2),nw(`p-disabled`,r.form.invalid),jp(5),Ew(`ngModel`,o.positions),l0(),jp(),Ew(`ngModel`,o.position),nw(`p-options`,o.positionOptions),l0(),jp(),Ew(`ngModel`,o.properties),nw(`p-options`,o.propertiesOptions),l0(),jp(),Ew(`ngModel`,o.size),nw(`p-options`,o.sizeOptions),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,fbe,Wo],styles:[`.sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}`],changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l});var Pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Popup - Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-popup-labs/sample-po-popup-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-popup
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-popup-labs/sample-po-popup-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-popup-labs/sample-po-popup-labs.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-popup-labs`),ag(),Gl(29,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Fe,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ce],encapsulation:2,changeDetection:1})}return l})();var We=[`formEmail`];var Ne=[`target`];function ze(l,Je){if(l&1&&(Tl(0,`div`)(1,`div`,6),Gl(2,`po-info`,20),ag(),Gl(3,`po-divider`),ag()),l&2){let d=Fx();jp(2),nw(`p-value`,d.cc)}}var ye=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:`an an-plus`,label:`Upper Text`,type:`default`,action:this.upper.bind(this)},{icon:`an an-minus`,label:`Lower Text`,type:`default`,action:this.lower.bind(this)},{icon:`an an-x`,label:`Clear`,type:`danger`,action:this.clear.bind(this),separator:!0}],this.primaryAction={label:`Confirmar`,action:()=>{this.poModal.close(),this.reset()}}}send(){this.poModal.open()}reset(){this.formEmail.reset()}clear(){this.emailText=void 0}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase()}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-email`]],viewQuery:function(a,o){if(a&1&&Yl(We,7)(Ne,7,K)(vr,7),a&2){let r;lo(r=uo())&&(o.formEmail=r.first),lo(r=uo())&&(o.targetRef=r.first),lo(r=uo())&&(o.poModal=r.first)}},standalone:!1,decls:31,vars:14,consts:[[`popup`,``],[`formEmail`,`ngForm`],[`target`,``],[`p-position`,`right`,3,`p-actions`,`p-target`],[`p-popup-header-template`,``],[1,`sample-popup-header-template`],[1,`po-row`],[`p-title`,`Send email`,1,`po-sm-12`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-help`,`Click show settings popup`,`p-label`,`Message`,`p-required`,``,1,`po-lg-10`,3,`ngModelChange`,`click`,`ngModel`],[`src`,`./assets/graphics/po.png`,1,`po-lg-2`,`sample-logo-po`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Reset`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,`ngDefaultControl`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(a,o){if(a&1){let r=Ax();Tl(0,`po-popup`,3,0)(2,`div`,4)(3,`div`,5),cN(4,`Settings`),ag()()(),Tl(5,`div`,6)(6,`po-widget`,7)(7,`form`,null,1)(9,`div`,6)(10,`po-email`,8),ww(`ngModelChange`,function(i){return Ky(r),uN(o.to,i)||(o.to=i),Xy(i)}),ag(),a0(),Tl(11,`po-email`,9),ww(`ngModelChange`,function(i){return Ky(r),uN(o.cc,i)||(o.cc=i),Xy(i)}),ag(),a0(),Tl(12,`po-input`,10),ww(`ngModelChange`,function(i){return Ky(r),uN(o.subject,i)||(o.subject=i),Xy(i)}),ag(),a0(),ag(),Tl(13,`div`,6)(14,`po-textarea`,11,2),ww(`ngModelChange`,function(i){return Ky(r),uN(o.emailText,i)||(o.emailText=i),Xy(i)}),ht(`click`,function(){Ky(r);return Xy(Bx(1).toggle())}),ag(),a0(),Gl(16,`img`,12),ag(),Tl(17,`div`,6)(18,`po-button`,13),ht(`p-click`,function(){return o.send()}),ag(),Tl(19,`po-button`,14),ht(`p-click`,function(){return o.reset()}),ag()()()()(),Tl(20,`po-modal`,15)(21,`div`,6),Gl(22,`po-info`,16)(23,`po-info`,17),ag(),Gl(24,`po-divider`),_x(25,ze,4,1,`div`),Tl(26,`div`,6),Gl(27,`po-info`,18),ag(),Gl(28,`po-divider`),Tl(29,`div`,6)(30,`po-textarea`,19),ww(`ngModelChange`,function(i){return Ky(r),uN(o.emailText,i)||(o.emailText=i),Xy(i)}),ag(),a0(),ag()()}if(a&2){let r=Bx(8);nw(`p-actions`,o.popupActions)(`p-target`,o.targetRef),jp(10),Ew(`ngModel`,o.to),l0(),jp(),Ew(`ngModel`,o.cc),l0(),jp(),Ew(`ngModel`,o.subject),l0(),jp(2),Ew(`ngModel`,o.emailText),l0(),jp(4),nw(`p-disabled`,r.form.invalid),jp(),nw(`p-disabled`,r.form.invalid),jp(),nw(`p-primary-action`,o.primaryAction),jp(2),nw(`p-value`,o.from),jp(),nw(`p-value`,o.to),jp(2),Dx(o.cc!==``?25:-1),jp(2),nw(`p-value`,o.subject),jp(3),Ew(`ngModel`,o.emailText),l0()}},dependencies:[yY,yb,gY,mY,Ak,Tk,Zt,Xy$1,qH,iU,vbe,ybe,vr,Wo,O8e],styles:[`.sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}`],changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l});var we=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-email-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Popup Email`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-popup-email/sample-po-popup-email.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-popup-email/sample-po-popup-email.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-popup-email/sample-po-popup-email.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-logo-po {
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
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-popup-email`),ag(),Gl(29,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,He,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ye],encapsulation:2,changeDetection:1})}return l})();var _e=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-doc`]],standalone:!1,decls:890,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPopupAction[]`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(a,o){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPopupModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-popup.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoPopupComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-popup`),ag(),cN(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),ag(),Tl(18,`p`),cN(19,`Suporta subníveis (submenus) quando as ações possuem a propriedade `),Tl(20,`code`),cN(21,`subItems`),ag(),cN(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),ag(),Tl(23,`p`),cN(24,`É possível escolher as posições do `),Tl(25,`code`),cN(26,`po-popup`),ag(),cN(27,` em relação ao componente alvo, para isto veja a propriedade `),Tl(28,`code`),cN(29,`p-position`),ag(),cN(30,`.`),ag(),Tl(31,`p`),cN(32,`Também é possível informar um `),Tl(33,`em`),cN(34,`template`),ag(),Tl(35,`em`),cN(36,`header`),ag(),cN(37,` para o `),Tl(38,`code`),cN(39,`po-popup`),ag(),cN(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Tl(41,`code`),cN(42,`p-popup-header-template`),ag(),cN(43,` no elemento que servirá de template, por exemplo:`),ag(),Tl(44,`pre`)(45,`code`),cN(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),ag()(),Tl(47,`h4`),cN(48,`Tokens customizáveis`),ag(),Tl(49,`p`),cN(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(51,`blockquote`)(52,`p`),cN(53,`Para maiores informações, acesse o guia `),Tl(54,`a`,6),cN(55,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(56,`.`),ag()(),Tl(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),cN(61,`Propriedade`),ag(),Tl(62,`th`),cN(63,`Descrição`),ag(),Tl(64,`th`),cN(65,`Valor Padrão`),ag()()(),Tl(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),cN(70,`Default Values`),ag()(),Gl(71,`td`)(72,`td`),ag(),Tl(73,`tr`)(74,`td`)(75,`code`),cN(76,`--border-radius`),ag()(),Tl(77,`td`),cN(78,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(79,`td`)(80,`code`),cN(81,`var(--border-radius-md)`),ag()()(),Tl(82,`tr`)(83,`td`)(84,`code`),cN(85,`--border-width`),ag()(),Tl(86,`td`),cN(87,`Contém o valor da largura dos cantos do elemento\xA0`),ag(),Tl(88,`td`)(89,`code`),cN(90,`var(--border-width-sm)`),ag()()(),Tl(91,`tr`)(92,`td`)(93,`code`),cN(94,`--border-color`),ag()(),Tl(95,`td`),cN(96,`Cor da borda`),ag(),Tl(97,`td`)(98,`code`),cN(99,`var(--color-neutral-light-20)`),ag()()(),Tl(100,`tr`)(101,`td`)(102,`code`),cN(103,`--background`),ag()(),Tl(104,`td`),cN(105,`Cor do background`),ag(),Tl(106,`td`)(107,`code`),cN(108,`var(--color-neutral-light-00)`),ag()()(),Tl(109,`tr`)(110,`td`)(111,`code`),cN(112,`--shadow`),ag()(),Tl(113,`td`),cN(114,`Contém o valor da sombra do elemento`),ag(),Tl(115,`td`)(116,`code`),cN(117,`var(--shadow-md)`),ag()()(),Tl(118,`tr`)(119,`td`)(120,`strong`),cN(121,`po-popup po-item-list`),ag()(),Gl(122,`td`)(123,`td`),ag(),Tl(124,`tr`)(125,`td`)(126,`code`),cN(127,`--font-family`),ag()(),Tl(128,`td`),cN(129,`Família tipográfica usada`),ag(),Tl(130,`td`)(131,`code`),cN(132,`var(--font-family-theme)`),ag()()(),Tl(133,`tr`)(134,`td`)(135,`code`),cN(136,`--font-size`),ag()(),Tl(137,`td`),cN(138,`Tamanho da fonte`),ag(),Tl(139,`td`)(140,`code`),cN(141,`var(--font-size-default)`),ag()()(),Tl(142,`tr`)(143,`td`)(144,`code`),cN(145,`--line-height`),ag()(),Tl(146,`td`),cN(147,`Tamanho da label`),ag(),Tl(148,`td`)(149,`code`),cN(150,`var(--line-height-md)`),ag()()(),Tl(151,`tr`)(152,`td`)(153,`strong`),cN(154,`Action`),ag()(),Gl(155,`td`)(156,`td`),ag(),Tl(157,`tr`)(158,`td`)(159,`code`),cN(160,`--font-weight`),ag()(),Tl(161,`td`),cN(162,`Peso da fonte`),ag(),Tl(163,`td`)(164,`code`),cN(165,`var(--font-weight-bold)`),ag()()(),Tl(166,`tr`)(167,`td`)(168,`code`),cN(169,`--color`),ag()(),Tl(170,`td`),cN(171,`Cor principal do popup`),ag(),Tl(172,`td`)(173,`code`),cN(174,`var(--color-action-default)`),ag()()(),Tl(175,`tr`)(176,`td`)(177,`strong`),cN(178,`Hover`),ag()(),Gl(179,`td`)(180,`td`),ag(),Tl(181,`tr`)(182,`td`)(183,`code`),cN(184,`--color-hover`),ag()(),Tl(185,`td`),cN(186,`Cor principal no estado hover`),ag(),Tl(187,`td`)(188,`code`),cN(189,`var(--color-brand-01-darkest)`),ag()()(),Tl(190,`tr`)(191,`td`)(192,`code`),cN(193,`--background-hover`),ag()(),Tl(194,`td`),cN(195,`Cor de background no estado hover`),ag(),Tl(196,`td`)(197,`code`),cN(198,`var(--color-brand-01-lighter)`),ag()()(),Tl(199,`tr`)(200,`td`)(201,`strong`),cN(202,`Focused`),ag()(),Gl(203,`td`)(204,`td`),ag(),Tl(205,`tr`)(206,`td`)(207,`code`),cN(208,`--outline-color-focused`),ag()(),Tl(209,`td`),cN(210,`Cor do outline do estado de focus`),ag(),Tl(211,`td`)(212,`code`),cN(213,`var(--color-action-focus)`),ag()()(),Tl(214,`tr`)(215,`td`)(216,`strong`),cN(217,`Pressed`),ag()(),Gl(218,`td`)(219,`td`),ag(),Tl(220,`tr`)(221,`td`)(222,`code`),cN(223,`--background-pressed`),ag()(),Tl(224,`td`),cN(225,`Cor de background no estado de pressionado\xA0`),ag(),Tl(226,`td`)(227,`code`),cN(228,`var(--color-brand-01-light)`),ag()()(),Tl(229,`tr`)(230,`td`)(231,`strong`),cN(232,`Disabled`),ag()(),Gl(233,`td`)(234,`td`),ag(),Tl(235,`tr`)(236,`td`)(237,`code`),cN(238,`--color-disabled`),ag()(),Tl(239,`td`),cN(240,`Cor principal no estado disabled`),ag(),Tl(241,`td`)(242,`code`),cN(243,`var(--color-action-disabled)`),ag()()(),Tl(244,`tr`)(245,`td`)(246,`strong`),cN(247,`Selected`),ag()(),Gl(248,`td`)(249,`td`),ag(),Tl(250,`tr`)(251,`td`)(252,`code`),cN(253,`--font-weight-selected`),ag()(),Tl(254,`td`),cN(255,`Peso da fonte no estado selecionado`),ag(),Tl(256,`td`)(257,`code`),cN(258,`var(--font-weight-bold)`),ag()()(),Tl(259,`tr`)(260,`td`)(261,`code`),cN(262,`--background-selected`),ag()(),Tl(263,`td`),cN(264,`Cor de background no estado selecionado`),ag(),Tl(265,`td`)(266,`code`),cN(267,`var(--color-brand-01-lightest)`),ag()()(),Tl(268,`tr`)(269,`td`)(270,`strong`),cN(271,`Option e check`),ag()(),Gl(272,`td`)(273,`td`),ag(),Tl(274,`tr`)(275,`td`)(276,`code`),cN(277,`--color-option`),ag()(),Tl(278,`td`),cN(279,`Cor principa no estado Option/check`),ag(),Tl(280,`td`)(281,`code`),cN(282,`var(--color-neutral-dark-90)`),ag()()()()()(),Tl(283,`div`,7)(284,`h4`,8),cN(285,`Seletor`),ag(),Tl(286,`pre`,9),cN(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),ag()(),Tl(288,`h4`,10),cN(289,`Propriedades`),ag(),Tl(290,`table`,11)(291,`tr`,12)(292,`th`,13),cN(293,`Nome`),ag(),Tl(294,`th`,13),cN(295,`Tipo`),ag(),Tl(296,`th`,13),cN(297,`Padrão`),ag(),Tl(298,`th`,13),cN(299,`Descrição`),ag()(),Tl(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),cN(304,` p-actions`),Gl(305,`br`),ag()()(),Tl(306,`td`,18)(307,`code`,19),cN(308,`PoPopupAction[]`),ag()(),Tl(309,`td`,20),cN(310,`-`),ag(),Tl(311,`td`,21)(312,`p`),cN(313,`Lista de ações que serão exibidas no componente.`),ag()()(),Tl(314,`tr`,14)(315,`td`,15)(316,`div`,16)(317,`span`,17),cN(318,` p-custom-positions`),Gl(319,`br`),ag()()(),Tl(320,`td`,18)(321,`code`,22),cN(322,`string[]`),ag()(),Tl(323,`td`,20),cN(324,`-`),ag(),Tl(325,`td`,21)(326,`em`)(327,`strong`),cN(328,`(opcional)`),ag()(),Tl(329,`p`),cN(330,`Define as posições e a sequência que o `),Tl(331,`code`),cN(332,`po-popup`),ag(),cN(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Tl(334,`em`),cN(335,`array`),ag(),cN(336,`. Caso não seja definido, o `),Tl(337,`code`),cN(338,`po-popup`),ag(),cN(339,` irá rotacionar em todas as posições válidas.`),ag(),Tl(340,`blockquote`)(341,`p`),cN(342,`O componente sempre irá abrir na posição definida no `),Tl(343,`code`),cN(344,`p-position`),ag(),cN(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Tl(346,`code`),cN(347,`p-custom-position`),ag(),cN(348,`.`),ag()(),Tl(349,`p`),cN(350,`Posições válidas:`),ag(),Tl(351,`ul`)(352,`li`)(353,`code`),cN(354,`right`),ag(),cN(355,`: Posiciona o po-popup no lado direito do componente alvo.`),ag(),Tl(356,`li`)(357,`code`),cN(358,`right-bottom`),ag(),cN(359,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),ag(),Tl(360,`li`)(361,`code`),cN(362,`right-top`),ag(),cN(363,`: Posiciona o po-popup no lado direito superior do componente alvo.`),ag(),Tl(364,`li`)(365,`code`),cN(366,`bottom`),ag(),cN(367,`: Posiciona o po-popup abaixo do componente alvo.`),ag(),Tl(368,`li`)(369,`code`),cN(370,`bottom-left`),ag(),cN(371,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),ag(),Tl(372,`li`)(373,`code`),cN(374,`bottom-right`),ag(),cN(375,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),ag(),Tl(376,`li`)(377,`code`),cN(378,`left`),ag(),cN(379,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),ag(),Tl(380,`li`)(381,`code`),cN(382,`left-top`),ag(),cN(383,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),ag(),Tl(384,`li`)(385,`code`),cN(386,`left-bottom`),ag(),cN(387,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),ag(),Tl(388,`li`)(389,`code`),cN(390,`top`),ag(),cN(391,`: Posiciona o po-popup acima do componente alvo.`),ag(),Tl(392,`li`)(393,`code`),cN(394,`top-right`),ag(),cN(395,`: Posiciona o po-popup acima e à direita do componente alvo.`),ag(),Tl(396,`li`)(397,`code`),cN(398,`top-left`),ag(),cN(399,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),ag()()()(),Tl(400,`tr`,14)(401,`td`,15)(402,`div`,16)(403,`span`,17),cN(404,` p-hide-arrow`),Gl(405,`br`),ag()()(),Tl(406,`td`,18)(407,`code`,23),cN(408,`boolean`),ag()(),Tl(409,`td`,20)(410,`p`)(411,`code`),cN(412,`false`),ag()()(),Tl(413,`td`,21)(414,`em`)(415,`strong`),cN(416,`(opcional)`),ag()(),Tl(417,`p`),cN(418,`Oculta a seta do componente `),Tl(419,`em`),cN(420,`popup`),ag(),cN(421,`.`),ag()()(),Tl(422,`tr`,14)(423,`td`,15)(424,`div`,16)(425,`span`,17),cN(426,` p-position`),Gl(427,`br`),ag()()(),Tl(428,`td`,18)(429,`code`,24),cN(430,`string`),ag()(),Tl(431,`td`,20)(432,`p`)(433,`code`),cN(434,`bottom-left`),ag()()(),Tl(435,`td`,21)(436,`em`)(437,`strong`),cN(438,`(opcional)`),ag()(),Tl(439,`p`),cN(440,`Define a posição inicial que o `),Tl(441,`code`),cN(442,`po-popup`),ag(),cN(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Tl(444,`code`),cN(445,`bottom-left`),ag(),cN(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),ag(),Tl(447,`blockquote`)(448,`p`),cN(449,`Caso seja definido um `),Tl(450,`code`),cN(451,`p-custom-positions`),ag(),cN(452,` o componente irá abrir na posição definida na propriedade `),Tl(453,`code`),cN(454,`p-position`),ag(),cN(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Tl(456,`code`),cN(457,`p-custom-positions`),ag(),cN(458,`.`),ag()(),Tl(459,`p`),cN(460,`Posições válidas:`),ag(),Tl(461,`ul`)(462,`li`)(463,`code`),cN(464,`right`),ag(),cN(465,`: Posiciona o po-popup no lado direito do componente alvo.`),ag(),Tl(466,`li`)(467,`code`),cN(468,`right-bottom`),ag(),cN(469,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),ag(),Tl(470,`li`)(471,`code`),cN(472,`right-top`),ag(),cN(473,`: Posiciona o po-popup no lado direito superior do componente alvo.`),ag(),Tl(474,`li`)(475,`code`),cN(476,`bottom`),ag(),cN(477,`: Posiciona o po-popup abaixo do componente alvo.`),ag(),Tl(478,`li`)(479,`code`),cN(480,`bottom-left`),ag(),cN(481,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),ag(),Tl(482,`li`)(483,`code`),cN(484,`bottom-right`),ag(),cN(485,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),ag(),Tl(486,`li`)(487,`code`),cN(488,`left`),ag(),cN(489,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),ag(),Tl(490,`li`)(491,`code`),cN(492,`left-top`),ag(),cN(493,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),ag(),Tl(494,`li`)(495,`code`),cN(496,`left-bottom`),ag(),cN(497,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),ag(),Tl(498,`li`)(499,`code`),cN(500,`top`),ag(),cN(501,`: Posiciona o po-popup acima do componente alvo.`),ag(),Tl(502,`li`)(503,`code`),cN(504,`top-right`),ag(),cN(505,`: Posiciona o po-popup acima e à direita do componente alvo.`),ag(),Tl(506,`li`)(507,`code`),cN(508,`top-left`),ag(),cN(509,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),ag()()()(),Tl(510,`tr`,14)(511,`td`,15)(512,`div`,16)(513,`span`,17),cN(514,` p-size`),Gl(515,`br`),ag()()(),Tl(516,`td`,18)(517,`code`,24),cN(518,`string`),ag()(),Tl(519,`td`,20)(520,`p`)(521,`code`),cN(522,`medium`),ag()()(),Tl(523,`td`,21)(524,`em`)(525,`strong`),cN(526,`(opcional)`),ag()(),Tl(527,`p`),cN(528,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(529,`ul`)(530,`li`)(531,`code`),cN(532,`small`),ag(),cN(533,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(534,`li`)(535,`code`),cN(536,`medium`),ag(),cN(537,`: aplica a medida medium de cada componente.`),ag()(),Tl(538,`blockquote`)(539,`p`),cN(540,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(541,`code`),cN(542,`medium`),ag(),cN(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(544,`a`,25),cN(545,`po-theme`),ag(),cN(546,`.`),ag()()()(),Tl(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),cN(551,` p-target`),Gl(552,`br`),ag()()(),Tl(553,`td`,18)(554,`code`,26),cN(555,`any`),ag()(),Tl(556,`td`,20),cN(557,`-`),ag(),Tl(558,`td`,21)(559,`p`),cN(560,`Para utilizar o `),Tl(561,`code`),cN(562,`po-popup`),ag(),cN(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Tl(564,`code`),cN(565,`toggle`),ag(),cN(566,`, por exemplo:`),ag(),Tl(567,`pre`)(568,`code`),cN(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),ag()(),Tl(570,`p`),cN(571,`Caso o elemento alvo for um componente, será preciso obter o `),Tl(572,`code`),cN(573,`ElementRef`),ag(),cN(574,` do mesmo e passá-lo à propriedade, por exemplo:`),ag(),Tl(575,`pre`)(576,`code`),cN(577,`// component.html

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
`),ag()()()()(),Tl(578,`h3`,10),cN(579,`Métodos`),ag(),Tl(580,`table`,27)(581,`tr`,14)(582,`th`,28)(583,`div`,16)(584,`h4`)(585,`span`,17),cN(586,` close `),ag()()()()(),Tl(587,`tr`,21)(588,`td`,21)(589,`p`),cN(590,`Fecha o componente `),Tl(591,`em`),cN(592,`popup`),ag(),cN(593,`.`),ag(),Tl(594,`blockquote`)(595,`p`),cN(596,`Por padrão, este comportamento é acionado somente ao clicar fora do componente ou em determinada ação / url.`),ag()()()()(),Gl(597,`br`),Tl(598,`table`,27)(599,`tr`,14)(600,`th`,28)(601,`div`,16)(602,`h4`)(603,`span`,17),cN(604,` open `),ag()()()()(),Tl(605,`tr`,21)(606,`td`,21)(607,`p`),cN(608,`Abre o componente `),Tl(609,`em`),cN(610,`popup`),ag(),cN(611,`.`),ag(),Tl(612,`blockquote`)(613,`p`),cN(614,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),ag()()()()(),Gl(615,`br`),Tl(616,`table`,27)(617,`tr`,14)(618,`th`,28)(619,`div`,16)(620,`h4`)(621,`span`,17),cN(622,` toggle `),ag()()()()(),Tl(623,`tr`,21)(624,`td`,21)(625,`p`),cN(626,`Responsável por abrir e fechar o `),Tl(627,`em`),cN(628,`popup`),ag(),cN(629,`.`),ag(),Tl(630,`p`),cN(631,`Quando disparado abrirá o `),Tl(632,`em`),cN(633,`popup`),ag(),cN(634,` e caso o mesmo já estiver aberto e possuir o mesmo `),Tl(635,`code`),cN(636,`target`),ag(),cN(637,` irá fecha-lo.`),ag(),Tl(638,`p`),cN(639,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),ag()()()(),Gl(640,`br`),Tl(641,`h3`),cN(642,`Interfaces`),ag(),Tl(643,`h4`,29)(644,`code`,5),cN(645,`PoPopupAction`),ag()(),Tl(646,`div`,2)(647,`p`),cN(648,`Interface para lista de ações do componente.`),ag()(),Tl(649,`h4`,10),cN(650,`Propriedades`),ag(),Tl(651,`table`,11)(652,`tr`,12)(653,`th`,13),cN(654,`Nome`),ag(),Tl(655,`th`,13),cN(656,`Tipo`),ag(),Tl(657,`th`,13),cN(658,`Descrição`),ag()(),Tl(659,`tr`,14)(660,`td`,15)(661,`div`,16)(662,`span`,17),cN(663,` action`),Gl(664,`br`),ag()()(),Tl(665,`td`,18)(666,`code`,30),cN(667,`Function`),ag()(),Tl(668,`td`,21)(669,`em`)(670,`strong`),cN(671,`(opcional)`),ag()(),Tl(672,`p`),cN(673,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ag(),Tl(674,`p`),cN(675,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Tl(676,`code`),cN(677,`subItems`),ag(),cN(678,`.`),ag(),Tl(679,`blockquote`)(680,`p`),cN(681,`Para que a função seja executada no contexto do componente, utilize `),Tl(682,`em`),cN(683,`bind`),ag(),cN(684,`:
`),Tl(685,`code`),cN(686,`action: this.myFunction.bind(this)`),ag()()()()(),Tl(687,`tr`,14)(688,`td`,15)(689,`div`,16)(690,`span`,17),cN(691,` disabled`),Gl(692,`br`),ag()()(),Tl(693,`td`,18)(694,`code`,23),cN(695,`boolean `),ag(),Tl(696,`code`,30),cN(697,` Function`),ag()(),Tl(698,`td`,21)(699,`em`)(700,`strong`),cN(701,`(opcional)`),ag()(),Tl(702,`p`),cN(703,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()(),Tl(704,`tr`,14)(705,`td`,15)(706,`div`,16)(707,`span`,17),cN(708,` icon`),Gl(709,`br`),ag()()(),Tl(710,`td`,18)(711,`code`,24),cN(712,`string `),ag(),Tl(713,`code`,31),cN(714,` TemplateRef<void>`),ag()(),Tl(715,`td`,21)(716,`em`)(717,`strong`),cN(718,`(opcional)`),ag()(),Tl(719,`p`),cN(720,`Ícone exibido ao lado esquerdo do rótulo.`),ag(),Tl(721,`p`),cN(722,`Aceita ícones da `),Tl(723,`a`,32),cN(724,`Biblioteca de ícones`),ag(),cN(725,`, fontes externas (ex: Font Awesome)
ou um `),Tl(726,`code`),cN(727,`TemplateRef`),ag(),cN(728,` para ícones customizados.`),ag(),Tl(729,`pre`)(730,`code`),cN(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ag()()()(),Tl(732,`tr`,14)(733,`td`,15)(734,`div`,16)(735,`span`,17),cN(736,` label`),Gl(737,`br`),ag()()(),Tl(738,`td`,18)(739,`code`,24),cN(740,`string`),ag()(),Tl(741,`td`,21)(742,`p`),cN(743,`Rótulo da ação.`),ag(),Tl(744,`p`),cN(745,`A label também pode representar o agrupador de subitens quando a ação possuir `),Tl(746,`code`),cN(747,`subItems`),ag(),cN(748,`.`),ag()()(),Tl(749,`tr`,14)(750,`td`,15)(751,`div`,16)(752,`span`,17),cN(753,` selected`),Gl(754,`br`),ag()()(),Tl(755,`td`,18)(756,`code`,23),cN(757,`boolean`),ag()(),Tl(758,`td`,21)(759,`em`)(760,`strong`),cN(761,`(opcional)`),ag()(),Tl(762,`p`),cN(763,`Define se a ação está selecionada.`),ag()()(),Tl(764,`tr`,14)(765,`td`,15)(766,`div`,16)(767,`span`,17),cN(768,` separator`),Gl(769,`br`),ag()()(),Tl(770,`td`,18)(771,`code`,23),cN(772,`boolean`),ag()(),Tl(773,`td`,21)(774,`em`)(775,`strong`),cN(776,`(opcional)`),ag()(),Tl(777,`p`),cN(778,`Atribui uma linha separadora acima do item.`),ag()()(),Tl(779,`tr`,14)(780,`td`,15)(781,`div`,16)(782,`span`,17),cN(783,` subItems`),Gl(784,`br`),ag()()(),Tl(785,`td`,18)(786,`code`,33),cN(787,`Array<PoPopupAction>`),ag()(),Tl(788,`td`,21)(789,`em`)(790,`strong`),cN(791,`(opcional)`),ag()(),Tl(792,`p`),cN(793,`Define uma lista de subitens para criação de menus aninhados.`),ag(),Tl(794,`p`),cN(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ag(),Tl(796,`blockquote`)(797,`p`),cN(798,`As propriedades `),Tl(799,`code`),cN(800,`disabled`),ag(),cN(801,`, `),Tl(802,`code`),cN(803,`type`),ag(),cN(804,` e `),Tl(805,`code`),cN(806,`visible`),ag(),cN(807,` não são aplicadas visualmente ao item agrupador.`),ag()(),Tl(808,`blockquote`)(809,`p`),cN(810,`Quando `),Tl(811,`code`),cN(812,`url`),ag(),cN(813,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ag()(),Tl(814,`blockquote`)(815,`p`),cN(816,`Em subníveis aninhados, o `),Tl(817,`code`),cN(818,`icon`),ag(),cN(819,` do agrupador é substituído pelo indicador de navegação (seta).`),ag()()()(),Tl(820,`tr`,14)(821,`td`,15)(822,`div`,16)(823,`span`,17),cN(824,` type`),Gl(825,`br`),ag()()(),Tl(826,`td`,18)(827,`code`,24),cN(828,`string`),ag()(),Tl(829,`td`,21)(830,`em`)(831,`strong`),cN(832,`(opcional)`),ag()(),Tl(833,`p`),cN(834,`Define a cor do item.`),ag(),Tl(835,`p`),cN(836,`Valores válidos:`),ag(),Tl(837,`ul`)(838,`li`)(839,`code`),cN(840,`default`),ag()(),Tl(841,`li`)(842,`code`),cN(843,`danger`),ag()()()()(),Tl(844,`tr`,14)(845,`td`,15)(846,`div`,16)(847,`span`,17),cN(848,` url`),Gl(849,`br`),ag()()(),Tl(850,`td`,18)(851,`code`,24),cN(852,`string`),ag()(),Tl(853,`td`,21)(854,`em`)(855,`strong`),cN(856,`(opcional)`),ag()(),Tl(857,`p`),cN(858,`URL para redirecionamento. Aceita rotas internas e links externos.`),ag(),Tl(859,`p`),cN(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(861,`code`),cN(862,`url`),ag(),cN(863,` é informada em um agrupador, o clique `),Tl(864,`strong`),cN(865,`não abrirá os subitens`),ag(),cN(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ag(),Tl(867,`blockquote`)(868,`p`),cN(869,`Quando informada, tem prioridade sobre a propriedade `),Tl(870,`code`),cN(871,`action`),ag(),cN(872,`.`),ag()()()(),Tl(873,`tr`,14)(874,`td`,15)(875,`div`,16)(876,`span`,17),cN(877,` visible`),Gl(878,`br`),ag()()(),Tl(879,`td`,18)(880,`code`,23),cN(881,`boolean `),ag(),Tl(882,`code`,30),cN(883,` Function`),ag()(),Tl(884,`td`,21)(885,`em`)(886,`strong`),cN(887,`(opcional)`),ag()(),Tl(888,`p`),cN(889,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Ge=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Popup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-popup-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-popup-basic-view`)(6,`sample-po-popup-labs-view`)(7,`sample-po-popup-email-view`),ag()()()),a&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ve,Pe,we,_e],encapsulation:2,changeDetection:1})}return l})()}];var Me=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[bL.forChild(Ge),bL]})}return l})();var qt=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[ar,Me]})}return l})();export{qt as DocPoPopupModule};