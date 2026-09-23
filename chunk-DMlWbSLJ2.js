import{t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Br as TN,Et as V8e,F as G4,Gr as Ue,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,Kt as dt,M as ECe,Mi as gg,Ni as he,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,X as KH,Xn as Cn,Yi as mN,Zr as Vk,_ as $8e,_n as qo,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,cr as K,da as uo,ea as p0,ga as w,hi as bb,kn as vr,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,pt as Pbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,yr as Mx}from"./main-NT5YGKBQ.js";var Te=[`target`];var De=()=>({label:`PO Popup`});var ke=l=>[l];var Se=(()=>{class l{cdr=f(Ue);targetRef;ngAfterViewInit(){this.cdr.detectChanges()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-basic`]],viewQuery:function(a,o){if(a&1&&Zl(Te,5,K),a&2){let r;lo(r=uo())&&(o.targetRef=r.first)}},standalone:!1,decls:4,vars:5,consts:[[`target`,``],[`popup`,``],[`p-icon`,`an an-question`,1,`po-clickable`,3,`click`],[3,`p-actions`,`p-target`]],template:function(a,o){if(a&1){let r=Vx();Ml(0,`po-icon`,2,0),ht(`click`,function(){Qy(r);return Jy(Yx(3).toggle())}),lg(),ql(2,`po-popup`,3,1)}a&2&&(Up(2),cw(`p-actions`,MN(3,ke,TN(2,De)))(`p-target`,o.targetRef))},dependencies:[dt,qo],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Popup - Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-popup-basic/sample-po-popup-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-popup-basic/sample-po-popup-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import {
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-popup-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ve,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return l})();var Oe=[`target`];var Ce=(()=>{class l{poNotification=f(Eu);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(d){let a=r({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions=``,this.properties=[],this.size=`medium`,this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return!d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${`-`.repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o)}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-labs`]],viewQuery:function(a,o){if(a&1&&Zl(Oe,7,K),a&2){let r;lo(r=uo())&&(o.targetRef=r.first)}},standalone:!1,decls:28,vars:25,consts:[[`popup`,``],[`target`,``],[`formAction`,`ngForm`],[`f`,`ngForm`],[3,`p-actions`,`p-custom-positions`,`p-hide-arrow`,`p-position`,`p-size`,`p-target`],[1,`po-row`,`sample-button-container`],[1,`po-offset-xl-5`,`po-offset-lg-5`,`po-md-2`,`po-lg-2`],[`p-label`,`Popup`,3,`p-click`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`customPositions`,`p-help`,`["top", "left", "right-bottom"]`,`p-label`,`Custom positions`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let r=Vx();ql(0,`po-popup`,4,0),Ml(2,`div`,5)(3,`div`,6)(4,`po-button`,7,1),ht(`p-click`,function(){Qy(r);return Jy(Yx(1).toggle())}),lg()()(),ql(6,`po-divider`),Ml(7,`form`,null,2)(9,`po-input`,8),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.action.label,i)||(o.action.label=i),Jy(i)}),lg(),f0(),Ml(10,`po-input`,9),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.action.action,i)||(o.action.action=i),Jy(i)}),lg(),f0(),Ml(11,`po-input`,10),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.action.url,i)||(o.action.url=i),Jy(i)}),lg(),f0(),Ml(12,`po-select`,11),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.action.type,i)||(o.action.type=i),Jy(i)}),lg(),f0(),Ml(13,`po-select`,12),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.action.icon,i)||(o.action.icon=i),Jy(i)}),lg(),f0(),Ml(14,`po-select`,13),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.action.parent,i)||(o.action.parent=i),Jy(i)}),lg(),f0(),Ml(15,`po-checkbox-group`,14),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.action,i)||(o.action=i),Jy(i)}),lg(),f0(),Ml(16,`div`,15)(17,`po-button`,16),ht(`p-click`,function(){return o.addAction(o.action)}),lg()()(),ql(18,`po-divider`),Ml(19,`form`,null,3)(21,`div`,15)(22,`po-input`,17),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.positions,i)||(o.positions=i),Jy(i)}),ht(`p-change`,function(){return o.convertToArray()}),lg(),f0(),Ml(23,`po-select`,18),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.position,i)||(o.position=i),Jy(i)}),lg(),f0(),Ml(24,`po-checkbox-group`,19),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.properties,i)||(o.properties=i),Jy(i)}),lg(),f0(),Ml(25,`po-radio-group`,20),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.size,i)||(o.size=i),Jy(i)}),lg(),f0(),lg(),Ml(26,`div`,15)(27,`po-button`,21),ht(`p-click`,function(){Qy(r);let i=Yx(8);return Yx(20).reset(),i.reset(),Jy(o.restore())}),lg()()()}if(a&2){let r=Yx(8);cw(`p-actions`,o.actions)(`p-custom-positions`,o.customPositions)(`p-hide-arrow`,o.properties.includes(`hideArrow`))(`p-position`,o.position)(`p-size`,o.size)(`p-target`,o.targetRef),Up(9),Tw(`ngModel`,o.action.label),p0(),Up(),Tw(`ngModel`,o.action.action),p0(),Up(),Tw(`ngModel`,o.action.url),p0(),Up(),Tw(`ngModel`,o.action.type),cw(`p-options`,o.typeOptions),p0(),Up(),Tw(`ngModel`,o.action.icon),cw(`p-options`,o.iconOptions),p0(),Up(),Tw(`ngModel`,o.action.parent),cw(`p-options`,o.parentList),p0(),Up(),Tw(`ngModel`,o.action),cw(`p-options`,o.actionOptions),p0(),Up(2),cw(`p-disabled`,r.form.invalid),Up(5),Tw(`ngModel`,o.positions),p0(),Up(),Tw(`ngModel`,o.position),cw(`p-options`,o.positionOptions),p0(),Up(),Tw(`ngModel`,o.properties),cw(`p-options`,o.propertiesOptions),p0(),Up(),Tw(`ngModel`,o.size),cw(`p-options`,o.sizeOptions),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,Tbe,qo],styles:[`.sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}`],changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l});var Pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Popup - Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-popup-labs/sample-po-popup-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-popup
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-popup-labs/sample-po-popup-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-popup-labs/sample-po-popup-labs.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-popup-labs`),lg(),ql(29,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Fe,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ce],encapsulation:2,changeDetection:1})}return l})();var We=[`formEmail`];var Ne=[`target`];function ze(l,Je){if(l&1&&(Ml(0,`div`)(1,`div`,6),ql(2,`po-info`,20),lg(),ql(3,`po-divider`),lg()),l&2){let d=zx();Up(2),cw(`p-value`,d.cc)}}var ye=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:`an an-plus`,label:`Upper Text`,type:`default`,action:this.upper.bind(this)},{icon:`an an-minus`,label:`Lower Text`,type:`default`,action:this.lower.bind(this)},{icon:`an an-x`,label:`Clear`,type:`danger`,action:this.clear.bind(this),separator:!0}],this.primaryAction={label:`Confirmar`,action:()=>{this.poModal.close(),this.reset()}}}send(){this.poModal.open()}reset(){this.formEmail.reset()}clear(){this.emailText=void 0}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase()}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-email`]],viewQuery:function(a,o){if(a&1&&Zl(We,7)(Ne,7,K)(vr,7),a&2){let r;lo(r=uo())&&(o.formEmail=r.first),lo(r=uo())&&(o.targetRef=r.first),lo(r=uo())&&(o.poModal=r.first)}},standalone:!1,decls:31,vars:14,consts:[[`popup`,``],[`formEmail`,`ngForm`],[`target`,``],[`p-position`,`right`,3,`p-actions`,`p-target`],[`p-popup-header-template`,``],[1,`sample-popup-header-template`],[1,`po-row`],[`p-title`,`Send email`,1,`po-sm-12`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-help`,`Click show settings popup`,`p-label`,`Message`,`p-required`,``,1,`po-lg-10`,3,`ngModelChange`,`click`,`ngModel`],[`src`,`./assets/graphics/po.png`,1,`po-lg-2`,`sample-logo-po`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Reset`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,`ngDefaultControl`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(a,o){if(a&1){let r=Vx();Ml(0,`po-popup`,3,0)(2,`div`,4)(3,`div`,5),mN(4,`Settings`),lg()()(),Ml(5,`div`,6)(6,`po-widget`,7)(7,`form`,null,1)(9,`div`,6)(10,`po-email`,8),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.to,i)||(o.to=i),Jy(i)}),lg(),f0(),Ml(11,`po-email`,9),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.cc,i)||(o.cc=i),Jy(i)}),lg(),f0(),Ml(12,`po-input`,10),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.subject,i)||(o.subject=i),Jy(i)}),lg(),f0(),lg(),Ml(13,`div`,6)(14,`po-textarea`,11,2),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.emailText,i)||(o.emailText=i),Jy(i)}),ht(`click`,function(){Qy(r);return Jy(Yx(1).toggle())}),lg(),f0(),ql(16,`img`,12),lg(),Ml(17,`div`,6)(18,`po-button`,13),ht(`p-click`,function(){return o.send()}),lg(),Ml(19,`po-button`,14),ht(`p-click`,function(){return o.reset()}),lg()()()()(),Ml(20,`po-modal`,15)(21,`div`,6),ql(22,`po-info`,16)(23,`po-info`,17),lg(),ql(24,`po-divider`),Tx(25,ze,4,1,`div`),Ml(26,`div`,6),ql(27,`po-info`,18),lg(),ql(28,`po-divider`),Ml(29,`div`,6)(30,`po-textarea`,19),Mw(`ngModelChange`,function(i){return Qy(r),yN(o.emailText,i)||(o.emailText=i),Jy(i)}),lg(),f0(),lg()()}if(a&2){let r=Yx(8);cw(`p-actions`,o.popupActions)(`p-target`,o.targetRef),Up(10),Tw(`ngModel`,o.to),p0(),Up(),Tw(`ngModel`,o.cc),p0(),Up(),Tw(`ngModel`,o.subject),p0(),Up(2),Tw(`ngModel`,o.emailText),p0(),Up(4),cw(`p-disabled`,r.form.invalid),Up(),cw(`p-disabled`,r.form.invalid),Up(),cw(`p-primary-action`,o.primaryAction),Up(2),cw(`p-value`,o.from),Up(),cw(`p-value`,o.to),Up(2),Mx(o.cc!==``?25:-1),Up(2),cw(`p-value`,o.subject),Up(3),Tw(`ngModel`,o.emailText),p0()}},dependencies:[IY,bb,wY,CY,Vk,kk,Zt,nb,KH,lU,Pbe,kbe,vr,qo,$8e],styles:[`.sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}`],changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l});var we=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-email-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Popup Email`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-popup-email/sample-po-popup-email.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-popup-email/sample-po-popup-email.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-popup-email/sample-po-popup-email.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-logo-po {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-popup-email`),lg(),ql(29,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,He,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ye],encapsulation:2,changeDetection:1})}return l})();var _e=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-popup-doc`]],standalone:!1,decls:890,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPopupAction[]`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`]],template:function(a,o){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPopupModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-popup.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoPopupComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-popup`),lg(),mN(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),lg(),Ml(18,`p`),mN(19,`Suporta subníveis (submenus) quando as ações possuem a propriedade `),Ml(20,`code`),mN(21,`subItems`),lg(),mN(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),lg(),Ml(23,`p`),mN(24,`É possível escolher as posições do `),Ml(25,`code`),mN(26,`po-popup`),lg(),mN(27,` em relação ao componente alvo, para isto veja a propriedade `),Ml(28,`code`),mN(29,`p-position`),lg(),mN(30,`.`),lg(),Ml(31,`p`),mN(32,`Também é possível informar um `),Ml(33,`em`),mN(34,`template`),lg(),Ml(35,`em`),mN(36,`header`),lg(),mN(37,` para o `),Ml(38,`code`),mN(39,`po-popup`),lg(),mN(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Ml(41,`code`),mN(42,`p-popup-header-template`),lg(),mN(43,` no elemento que servirá de template, por exemplo:`),lg(),Ml(44,`pre`)(45,`code`),mN(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),lg()(),Ml(47,`h4`),mN(48,`Tokens customizáveis`),lg(),Ml(49,`p`),mN(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(51,`blockquote`)(52,`p`),mN(53,`Para maiores informações, acesse o guia `),Ml(54,`a`,6),mN(55,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(56,`.`),lg()(),Ml(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),mN(61,`Propriedade`),lg(),Ml(62,`th`),mN(63,`Descrição`),lg(),Ml(64,`th`),mN(65,`Valor Padrão`),lg()()(),Ml(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),mN(70,`Default Values`),lg()(),ql(71,`td`)(72,`td`),lg(),Ml(73,`tr`)(74,`td`)(75,`code`),mN(76,`--border-radius`),lg()(),Ml(77,`td`),mN(78,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(79,`td`)(80,`code`),mN(81,`var(--border-radius-md)`),lg()()(),Ml(82,`tr`)(83,`td`)(84,`code`),mN(85,`--border-width`),lg()(),Ml(86,`td`),mN(87,`Contém o valor da largura dos cantos do elemento\xA0`),lg(),Ml(88,`td`)(89,`code`),mN(90,`var(--border-width-sm)`),lg()()(),Ml(91,`tr`)(92,`td`)(93,`code`),mN(94,`--border-color`),lg()(),Ml(95,`td`),mN(96,`Cor da borda`),lg(),Ml(97,`td`)(98,`code`),mN(99,`var(--color-neutral-light-20)`),lg()()(),Ml(100,`tr`)(101,`td`)(102,`code`),mN(103,`--background`),lg()(),Ml(104,`td`),mN(105,`Cor do background`),lg(),Ml(106,`td`)(107,`code`),mN(108,`var(--color-neutral-light-00)`),lg()()(),Ml(109,`tr`)(110,`td`)(111,`code`),mN(112,`--shadow`),lg()(),Ml(113,`td`),mN(114,`Contém o valor da sombra do elemento`),lg(),Ml(115,`td`)(116,`code`),mN(117,`var(--shadow-md)`),lg()()(),Ml(118,`tr`)(119,`td`)(120,`strong`),mN(121,`po-popup po-item-list`),lg()(),ql(122,`td`)(123,`td`),lg(),Ml(124,`tr`)(125,`td`)(126,`code`),mN(127,`--font-family`),lg()(),Ml(128,`td`),mN(129,`Família tipográfica usada`),lg(),Ml(130,`td`)(131,`code`),mN(132,`var(--font-family-theme)`),lg()()(),Ml(133,`tr`)(134,`td`)(135,`code`),mN(136,`--font-size`),lg()(),Ml(137,`td`),mN(138,`Tamanho da fonte`),lg(),Ml(139,`td`)(140,`code`),mN(141,`var(--font-size-default)`),lg()()(),Ml(142,`tr`)(143,`td`)(144,`code`),mN(145,`--line-height`),lg()(),Ml(146,`td`),mN(147,`Tamanho da label`),lg(),Ml(148,`td`)(149,`code`),mN(150,`var(--line-height-md)`),lg()()(),Ml(151,`tr`)(152,`td`)(153,`strong`),mN(154,`Action`),lg()(),ql(155,`td`)(156,`td`),lg(),Ml(157,`tr`)(158,`td`)(159,`code`),mN(160,`--font-weight`),lg()(),Ml(161,`td`),mN(162,`Peso da fonte`),lg(),Ml(163,`td`)(164,`code`),mN(165,`var(--font-weight-bold)`),lg()()(),Ml(166,`tr`)(167,`td`)(168,`code`),mN(169,`--color`),lg()(),Ml(170,`td`),mN(171,`Cor principal do popup`),lg(),Ml(172,`td`)(173,`code`),mN(174,`var(--color-action-default)`),lg()()(),Ml(175,`tr`)(176,`td`)(177,`strong`),mN(178,`Hover`),lg()(),ql(179,`td`)(180,`td`),lg(),Ml(181,`tr`)(182,`td`)(183,`code`),mN(184,`--color-hover`),lg()(),Ml(185,`td`),mN(186,`Cor principal no estado hover`),lg(),Ml(187,`td`)(188,`code`),mN(189,`var(--color-brand-01-darkest)`),lg()()(),Ml(190,`tr`)(191,`td`)(192,`code`),mN(193,`--background-hover`),lg()(),Ml(194,`td`),mN(195,`Cor de background no estado hover`),lg(),Ml(196,`td`)(197,`code`),mN(198,`var(--color-brand-01-lighter)`),lg()()(),Ml(199,`tr`)(200,`td`)(201,`strong`),mN(202,`Focused`),lg()(),ql(203,`td`)(204,`td`),lg(),Ml(205,`tr`)(206,`td`)(207,`code`),mN(208,`--outline-color-focused`),lg()(),Ml(209,`td`),mN(210,`Cor do outline do estado de focus`),lg(),Ml(211,`td`)(212,`code`),mN(213,`var(--color-action-focus)`),lg()()(),Ml(214,`tr`)(215,`td`)(216,`strong`),mN(217,`Pressed`),lg()(),ql(218,`td`)(219,`td`),lg(),Ml(220,`tr`)(221,`td`)(222,`code`),mN(223,`--background-pressed`),lg()(),Ml(224,`td`),mN(225,`Cor de background no estado de pressionado\xA0`),lg(),Ml(226,`td`)(227,`code`),mN(228,`var(--color-brand-01-light)`),lg()()(),Ml(229,`tr`)(230,`td`)(231,`strong`),mN(232,`Disabled`),lg()(),ql(233,`td`)(234,`td`),lg(),Ml(235,`tr`)(236,`td`)(237,`code`),mN(238,`--color-disabled`),lg()(),Ml(239,`td`),mN(240,`Cor principal no estado disabled`),lg(),Ml(241,`td`)(242,`code`),mN(243,`var(--color-action-disabled)`),lg()()(),Ml(244,`tr`)(245,`td`)(246,`strong`),mN(247,`Selected`),lg()(),ql(248,`td`)(249,`td`),lg(),Ml(250,`tr`)(251,`td`)(252,`code`),mN(253,`--font-weight-selected`),lg()(),Ml(254,`td`),mN(255,`Peso da fonte no estado selecionado`),lg(),Ml(256,`td`)(257,`code`),mN(258,`var(--font-weight-bold)`),lg()()(),Ml(259,`tr`)(260,`td`)(261,`code`),mN(262,`--background-selected`),lg()(),Ml(263,`td`),mN(264,`Cor de background no estado selecionado`),lg(),Ml(265,`td`)(266,`code`),mN(267,`var(--color-brand-01-lightest)`),lg()()(),Ml(268,`tr`)(269,`td`)(270,`strong`),mN(271,`Option e check`),lg()(),ql(272,`td`)(273,`td`),lg(),Ml(274,`tr`)(275,`td`)(276,`code`),mN(277,`--color-option`),lg()(),Ml(278,`td`),mN(279,`Cor principa no estado Option/check`),lg(),Ml(280,`td`)(281,`code`),mN(282,`var(--color-neutral-dark-90)`),lg()()()()()(),Ml(283,`div`,7)(284,`h4`,8),mN(285,`Seletor`),lg(),Ml(286,`pre`,9),mN(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),lg()(),Ml(288,`h4`,10),mN(289,`Propriedades`),lg(),Ml(290,`table`,11)(291,`tr`,12)(292,`th`,13),mN(293,`Nome`),lg(),Ml(294,`th`,13),mN(295,`Tipo`),lg(),Ml(296,`th`,13),mN(297,`Padrão`),lg(),Ml(298,`th`,13),mN(299,`Descrição`),lg()(),Ml(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),mN(304,` p-actions`),ql(305,`br`),lg()()(),Ml(306,`td`,18)(307,`code`,19),mN(308,`PoPopupAction[]`),lg()(),Ml(309,`td`,20),mN(310,`-`),lg(),Ml(311,`td`,21)(312,`p`),mN(313,`Lista de ações que serão exibidas no componente.`),lg()()(),Ml(314,`tr`,14)(315,`td`,15)(316,`div`,16)(317,`span`,17),mN(318,` p-custom-positions`),ql(319,`br`),lg()()(),Ml(320,`td`,18)(321,`code`,22),mN(322,`string[]`),lg()(),Ml(323,`td`,20),mN(324,`-`),lg(),Ml(325,`td`,21)(326,`em`)(327,`strong`),mN(328,`(opcional)`),lg()(),Ml(329,`p`),mN(330,`Define as posições e a sequência que o `),Ml(331,`code`),mN(332,`po-popup`),lg(),mN(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Ml(334,`em`),mN(335,`array`),lg(),mN(336,`. Caso não seja definido, o `),Ml(337,`code`),mN(338,`po-popup`),lg(),mN(339,` irá rotacionar em todas as posições válidas.`),lg(),Ml(340,`blockquote`)(341,`p`),mN(342,`O componente sempre irá abrir na posição definida no `),Ml(343,`code`),mN(344,`p-position`),lg(),mN(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Ml(346,`code`),mN(347,`p-custom-position`),lg(),mN(348,`.`),lg()(),Ml(349,`p`),mN(350,`Posições válidas:`),lg(),Ml(351,`ul`)(352,`li`)(353,`code`),mN(354,`right`),lg(),mN(355,`: Posiciona o po-popup no lado direito do componente alvo.`),lg(),Ml(356,`li`)(357,`code`),mN(358,`right-bottom`),lg(),mN(359,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),lg(),Ml(360,`li`)(361,`code`),mN(362,`right-top`),lg(),mN(363,`: Posiciona o po-popup no lado direito superior do componente alvo.`),lg(),Ml(364,`li`)(365,`code`),mN(366,`bottom`),lg(),mN(367,`: Posiciona o po-popup abaixo do componente alvo.`),lg(),Ml(368,`li`)(369,`code`),mN(370,`bottom-left`),lg(),mN(371,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),lg(),Ml(372,`li`)(373,`code`),mN(374,`bottom-right`),lg(),mN(375,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),lg(),Ml(376,`li`)(377,`code`),mN(378,`left`),lg(),mN(379,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),lg(),Ml(380,`li`)(381,`code`),mN(382,`left-top`),lg(),mN(383,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),lg(),Ml(384,`li`)(385,`code`),mN(386,`left-bottom`),lg(),mN(387,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),lg(),Ml(388,`li`)(389,`code`),mN(390,`top`),lg(),mN(391,`: Posiciona o po-popup acima do componente alvo.`),lg(),Ml(392,`li`)(393,`code`),mN(394,`top-right`),lg(),mN(395,`: Posiciona o po-popup acima e à direita do componente alvo.`),lg(),Ml(396,`li`)(397,`code`),mN(398,`top-left`),lg(),mN(399,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),lg()()()(),Ml(400,`tr`,14)(401,`td`,15)(402,`div`,16)(403,`span`,17),mN(404,` p-hide-arrow`),ql(405,`br`),lg()()(),Ml(406,`td`,18)(407,`code`,23),mN(408,`boolean`),lg()(),Ml(409,`td`,20)(410,`p`)(411,`code`),mN(412,`false`),lg()()(),Ml(413,`td`,21)(414,`em`)(415,`strong`),mN(416,`(opcional)`),lg()(),Ml(417,`p`),mN(418,`Oculta a seta do componente `),Ml(419,`em`),mN(420,`popup`),lg(),mN(421,`.`),lg()()(),Ml(422,`tr`,14)(423,`td`,15)(424,`div`,16)(425,`span`,17),mN(426,` p-position`),ql(427,`br`),lg()()(),Ml(428,`td`,18)(429,`code`,24),mN(430,`string`),lg()(),Ml(431,`td`,20)(432,`p`)(433,`code`),mN(434,`bottom-left`),lg()()(),Ml(435,`td`,21)(436,`em`)(437,`strong`),mN(438,`(opcional)`),lg()(),Ml(439,`p`),mN(440,`Define a posição inicial que o `),Ml(441,`code`),mN(442,`po-popup`),lg(),mN(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Ml(444,`code`),mN(445,`bottom-left`),lg(),mN(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),lg(),Ml(447,`blockquote`)(448,`p`),mN(449,`Caso seja definido um `),Ml(450,`code`),mN(451,`p-custom-positions`),lg(),mN(452,` o componente irá abrir na posição definida na propriedade `),Ml(453,`code`),mN(454,`p-position`),lg(),mN(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Ml(456,`code`),mN(457,`p-custom-positions`),lg(),mN(458,`.`),lg()(),Ml(459,`p`),mN(460,`Posições válidas:`),lg(),Ml(461,`ul`)(462,`li`)(463,`code`),mN(464,`right`),lg(),mN(465,`: Posiciona o po-popup no lado direito do componente alvo.`),lg(),Ml(466,`li`)(467,`code`),mN(468,`right-bottom`),lg(),mN(469,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),lg(),Ml(470,`li`)(471,`code`),mN(472,`right-top`),lg(),mN(473,`: Posiciona o po-popup no lado direito superior do componente alvo.`),lg(),Ml(474,`li`)(475,`code`),mN(476,`bottom`),lg(),mN(477,`: Posiciona o po-popup abaixo do componente alvo.`),lg(),Ml(478,`li`)(479,`code`),mN(480,`bottom-left`),lg(),mN(481,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),lg(),Ml(482,`li`)(483,`code`),mN(484,`bottom-right`),lg(),mN(485,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),lg(),Ml(486,`li`)(487,`code`),mN(488,`left`),lg(),mN(489,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),lg(),Ml(490,`li`)(491,`code`),mN(492,`left-top`),lg(),mN(493,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),lg(),Ml(494,`li`)(495,`code`),mN(496,`left-bottom`),lg(),mN(497,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),lg(),Ml(498,`li`)(499,`code`),mN(500,`top`),lg(),mN(501,`: Posiciona o po-popup acima do componente alvo.`),lg(),Ml(502,`li`)(503,`code`),mN(504,`top-right`),lg(),mN(505,`: Posiciona o po-popup acima e à direita do componente alvo.`),lg(),Ml(506,`li`)(507,`code`),mN(508,`top-left`),lg(),mN(509,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),lg()()()(),Ml(510,`tr`,14)(511,`td`,15)(512,`div`,16)(513,`span`,17),mN(514,` p-size`),ql(515,`br`),lg()()(),Ml(516,`td`,18)(517,`code`,24),mN(518,`string`),lg()(),Ml(519,`td`,20)(520,`p`)(521,`code`),mN(522,`medium`),lg()()(),Ml(523,`td`,21)(524,`em`)(525,`strong`),mN(526,`(opcional)`),lg()(),Ml(527,`p`),mN(528,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(529,`ul`)(530,`li`)(531,`code`),mN(532,`small`),lg(),mN(533,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(534,`li`)(535,`code`),mN(536,`medium`),lg(),mN(537,`: aplica a medida medium de cada componente.`),lg()(),Ml(538,`blockquote`)(539,`p`),mN(540,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(541,`code`),mN(542,`medium`),lg(),mN(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(544,`a`,25),mN(545,`po-theme`),lg(),mN(546,`.`),lg()()()(),Ml(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),mN(551,` p-target`),ql(552,`br`),lg()()(),Ml(553,`td`,18)(554,`code`,26),mN(555,`any`),lg()(),Ml(556,`td`,20),mN(557,`-`),lg(),Ml(558,`td`,21)(559,`p`),mN(560,`Para utilizar o `),Ml(561,`code`),mN(562,`po-popup`),lg(),mN(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Ml(564,`code`),mN(565,`toggle`),lg(),mN(566,`, por exemplo:`),lg(),Ml(567,`pre`)(568,`code`),mN(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),lg()(),Ml(570,`p`),mN(571,`Caso o elemento alvo for um componente, será preciso obter o `),Ml(572,`code`),mN(573,`ElementRef`),lg(),mN(574,` do mesmo e passá-lo à propriedade, por exemplo:`),lg(),Ml(575,`pre`)(576,`code`),mN(577,`// component.html

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
`),lg()()()()(),Ml(578,`h3`,10),mN(579,`Métodos`),lg(),Ml(580,`table`,27)(581,`tr`,14)(582,`th`,28)(583,`div`,16)(584,`h4`)(585,`span`,17),mN(586,` close `),lg()()()()(),Ml(587,`tr`,21)(588,`td`,21)(589,`p`),mN(590,`Fecha o componente `),Ml(591,`em`),mN(592,`popup`),lg(),mN(593,`.`),lg(),Ml(594,`blockquote`)(595,`p`),mN(596,`Por padrão, este comportamento é acionado somente ao clicar fora do componente ou em determinada ação / url.`),lg()()()()(),ql(597,`br`),Ml(598,`table`,27)(599,`tr`,14)(600,`th`,28)(601,`div`,16)(602,`h4`)(603,`span`,17),mN(604,` open `),lg()()()()(),Ml(605,`tr`,21)(606,`td`,21)(607,`p`),mN(608,`Abre o componente `),Ml(609,`em`),mN(610,`popup`),lg(),mN(611,`.`),lg(),Ml(612,`blockquote`)(613,`p`),mN(614,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),lg()()()()(),ql(615,`br`),Ml(616,`table`,27)(617,`tr`,14)(618,`th`,28)(619,`div`,16)(620,`h4`)(621,`span`,17),mN(622,` toggle `),lg()()()()(),Ml(623,`tr`,21)(624,`td`,21)(625,`p`),mN(626,`Responsável por abrir e fechar o `),Ml(627,`em`),mN(628,`popup`),lg(),mN(629,`.`),lg(),Ml(630,`p`),mN(631,`Quando disparado abrirá o `),Ml(632,`em`),mN(633,`popup`),lg(),mN(634,` e caso o mesmo já estiver aberto e possuir o mesmo `),Ml(635,`code`),mN(636,`target`),lg(),mN(637,` irá fecha-lo.`),lg(),Ml(638,`p`),mN(639,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),lg()()()(),ql(640,`br`),Ml(641,`h3`),mN(642,`Interfaces`),lg(),Ml(643,`h4`,29)(644,`code`,5),mN(645,`PoPopupAction`),lg()(),Ml(646,`div`,2)(647,`p`),mN(648,`Interface para lista de ações do componente.`),lg()(),Ml(649,`h4`,10),mN(650,`Propriedades`),lg(),Ml(651,`table`,11)(652,`tr`,12)(653,`th`,13),mN(654,`Nome`),lg(),Ml(655,`th`,13),mN(656,`Tipo`),lg(),Ml(657,`th`,13),mN(658,`Descrição`),lg()(),Ml(659,`tr`,14)(660,`td`,15)(661,`div`,16)(662,`span`,17),mN(663,` action`),ql(664,`br`),lg()()(),Ml(665,`td`,18)(666,`code`,30),mN(667,`Function`),lg()(),Ml(668,`td`,21)(669,`em`)(670,`strong`),mN(671,`(opcional)`),lg()(),Ml(672,`p`),mN(673,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),lg(),Ml(674,`p`),mN(675,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ml(676,`code`),mN(677,`subItems`),lg(),mN(678,`.`),lg(),Ml(679,`blockquote`)(680,`p`),mN(681,`Para que a função seja executada no contexto do componente, utilize `),Ml(682,`em`),mN(683,`bind`),lg(),mN(684,`:
`),Ml(685,`code`),mN(686,`action: this.myFunction.bind(this)`),lg()()()()(),Ml(687,`tr`,14)(688,`td`,15)(689,`div`,16)(690,`span`,17),mN(691,` disabled`),ql(692,`br`),lg()()(),Ml(693,`td`,18)(694,`code`,23),mN(695,`boolean `),lg(),Ml(696,`code`,30),mN(697,` Function`),lg()(),Ml(698,`td`,21)(699,`em`)(700,`strong`),mN(701,`(opcional)`),lg()(),Ml(702,`p`),mN(703,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()(),Ml(704,`tr`,14)(705,`td`,15)(706,`div`,16)(707,`span`,17),mN(708,` icon`),ql(709,`br`),lg()()(),Ml(710,`td`,18)(711,`code`,24),mN(712,`string `),lg(),Ml(713,`code`,31),mN(714,` TemplateRef<void>`),lg()(),Ml(715,`td`,21)(716,`em`)(717,`strong`),mN(718,`(opcional)`),lg()(),Ml(719,`p`),mN(720,`Ícone exibido ao lado esquerdo do rótulo.`),lg(),Ml(721,`p`),mN(722,`Aceita ícones da `),Ml(723,`a`,32),mN(724,`Biblioteca de ícones`),lg(),mN(725,`, fontes externas (ex: Font Awesome)
ou um `),Ml(726,`code`),mN(727,`TemplateRef`),lg(),mN(728,` para ícones customizados.`),lg(),Ml(729,`pre`)(730,`code`),mN(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),lg()()()(),Ml(732,`tr`,14)(733,`td`,15)(734,`div`,16)(735,`span`,17),mN(736,` label`),ql(737,`br`),lg()()(),Ml(738,`td`,18)(739,`code`,24),mN(740,`string`),lg()(),Ml(741,`td`,21)(742,`p`),mN(743,`Rótulo da ação.`),lg(),Ml(744,`p`),mN(745,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ml(746,`code`),mN(747,`subItems`),lg(),mN(748,`.`),lg()()(),Ml(749,`tr`,14)(750,`td`,15)(751,`div`,16)(752,`span`,17),mN(753,` selected`),ql(754,`br`),lg()()(),Ml(755,`td`,18)(756,`code`,23),mN(757,`boolean`),lg()(),Ml(758,`td`,21)(759,`em`)(760,`strong`),mN(761,`(opcional)`),lg()(),Ml(762,`p`),mN(763,`Define se a ação está selecionada.`),lg()()(),Ml(764,`tr`,14)(765,`td`,15)(766,`div`,16)(767,`span`,17),mN(768,` separator`),ql(769,`br`),lg()()(),Ml(770,`td`,18)(771,`code`,23),mN(772,`boolean`),lg()(),Ml(773,`td`,21)(774,`em`)(775,`strong`),mN(776,`(opcional)`),lg()(),Ml(777,`p`),mN(778,`Atribui uma linha separadora acima do item.`),lg()()(),Ml(779,`tr`,14)(780,`td`,15)(781,`div`,16)(782,`span`,17),mN(783,` subItems`),ql(784,`br`),lg()()(),Ml(785,`td`,18)(786,`code`,33),mN(787,`Array<PoPopupAction>`),lg()(),Ml(788,`td`,21)(789,`em`)(790,`strong`),mN(791,`(opcional)`),lg()(),Ml(792,`p`),mN(793,`Define uma lista de subitens para criação de menus aninhados.`),lg(),Ml(794,`p`),mN(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),lg(),Ml(796,`blockquote`)(797,`p`),mN(798,`As propriedades `),Ml(799,`code`),mN(800,`disabled`),lg(),mN(801,`, `),Ml(802,`code`),mN(803,`type`),lg(),mN(804,` e `),Ml(805,`code`),mN(806,`visible`),lg(),mN(807,` não são aplicadas visualmente ao item agrupador.`),lg()(),Ml(808,`blockquote`)(809,`p`),mN(810,`Quando `),Ml(811,`code`),mN(812,`url`),lg(),mN(813,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),lg()(),Ml(814,`blockquote`)(815,`p`),mN(816,`Em subníveis aninhados, o `),Ml(817,`code`),mN(818,`icon`),lg(),mN(819,` do agrupador é substituído pelo indicador de navegação (seta).`),lg()()()(),Ml(820,`tr`,14)(821,`td`,15)(822,`div`,16)(823,`span`,17),mN(824,` type`),ql(825,`br`),lg()()(),Ml(826,`td`,18)(827,`code`,24),mN(828,`string`),lg()(),Ml(829,`td`,21)(830,`em`)(831,`strong`),mN(832,`(opcional)`),lg()(),Ml(833,`p`),mN(834,`Define a cor do item.`),lg(),Ml(835,`p`),mN(836,`Valores válidos:`),lg(),Ml(837,`ul`)(838,`li`)(839,`code`),mN(840,`default`),lg()(),Ml(841,`li`)(842,`code`),mN(843,`danger`),lg()()()()(),Ml(844,`tr`,14)(845,`td`,15)(846,`div`,16)(847,`span`,17),mN(848,` url`),ql(849,`br`),lg()()(),Ml(850,`td`,18)(851,`code`,24),mN(852,`string`),lg()(),Ml(853,`td`,21)(854,`em`)(855,`strong`),mN(856,`(opcional)`),lg()(),Ml(857,`p`),mN(858,`URL para redirecionamento. Aceita rotas internas e links externos.`),lg(),Ml(859,`p`),mN(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ml(861,`code`),mN(862,`url`),lg(),mN(863,` é informada em um agrupador, o clique `),Ml(864,`strong`),mN(865,`não abrirá os subitens`),lg(),mN(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),lg(),Ml(867,`blockquote`)(868,`p`),mN(869,`Quando informada, tem prioridade sobre a propriedade `),Ml(870,`code`),mN(871,`action`),lg(),mN(872,`.`),lg()()()(),Ml(873,`tr`,14)(874,`td`,15)(875,`div`,16)(876,`span`,17),mN(877,` visible`),ql(878,`br`),lg()()(),Ml(879,`td`,18)(880,`code`,23),mN(881,`boolean `),lg(),Ml(882,`code`,30),mN(883,` Function`),lg()(),Ml(884,`td`,21)(885,`em`)(886,`strong`),mN(887,`(opcional)`),lg()(),Ml(888,`p`),mN(889,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Ge=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Popup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-popup-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-popup-basic-view`)(6,`sample-po-popup-labs-view`)(7,`sample-po-popup-email-view`),lg()()()),a&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ve,Pe,we,_e],encapsulation:2,changeDetection:1})}return l})()}];var Me=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[NL.forChild(Ge),NL]})}return l})();var qt=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[ar,Me]})}return l})();export{qt as DocPoPopupModule};