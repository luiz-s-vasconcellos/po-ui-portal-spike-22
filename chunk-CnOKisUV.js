import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,ae as Be,aW as Yp,c as r$1,ab as lt,bK as bo,aB as Ex,H as Sl,a1 as ht,O as sg,M as Wl,z as Vp,T as tw,bs as dN,a7 as uN,av as ql,aw as lo,ax as uo,an as bO,aH as Ga,b8 as Gme,b9 as Qme,J as Jx,ar as Hx,au as fg,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aJ as Ghe,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,bv as mb,cz as Ez,b5 as jhe,c9 as Qhe,b6 as Yo,ba as bNe,aq as ux,at as dx,Z,a3 as pNe,aD as Xy,aE as Qy,aT as tN,aA as Tx}from'./main-BY5NURRA.js';var Te=["target"],ke=()=>({label:"PO Popup"}),De=l=>[l],Se=(()=>{class l{cdr=f(Be);targetRef;ngAfterViewInit(){this.cdr.detectChanges();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic"]],viewQuery:function(a,o){if(a&1&&ql(Te,5,Z),a&2){let r;lo(r=uo())&&(o.targetRef=r.first);}},standalone:false,decls:4,vars:5,consts:[["target",""],["popup",""],["p-icon","an an-question",1,"po-clickable",3,"click"],[3,"p-actions","p-target"]],template:function(a,o){if(a&1){let r=Ex();Sl(0,"po-icon",2,0),ht("click",function(){Xy(r);let i=xx(3);return Qy(i.toggle())}),sg(),Wl(2,"po-popup",3,1);}a&2&&(Vp(2),tw("p-actions",dN(3,De,uN(2,ke)))("p-target",o.targetRef));},dependencies:[lt,bo],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Popup - Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-popup-basic/sample-po-popup-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-popup-basic/sample-po-popup-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popup-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ve,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return l})();var Oe=["target"],Ce=(()=>{class l{poNotification=f(Yp);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let a=r$1({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0;}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions="",this.properties=[],this.size="medium",this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return !d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${"-".repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o);}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs"]],viewQuery:function(a,o){if(a&1&&ql(Oe,7,Z),a&2){let r;lo(r=uo())&&(o.targetRef=r.first);}},standalone:false,decls:28,vars:25,consts:[["popup",""],["target",""],["formAction","ngForm"],["f","ngForm"],[3,"p-actions","p-custom-positions","p-hide-arrow","p-position","p-size","p-target"],[1,"po-row","sample-button-container"],[1,"po-offset-xl-5","po-offset-lg-5","po-md-2","po-lg-2"],["p-label","Popup",3,"p-click"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","customPositions","p-help",'["top", "left", "right-bottom"]',"p-label","Custom positions",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","position","p-label","Position",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let r=Ex();Wl(0,"po-popup",4,0),Sl(2,"div",5)(3,"div",6)(4,"po-button",7,1),ht("p-click",function(){Xy(r);let i=xx(1);return Qy(i.toggle())}),sg()()(),Wl(6,"po-divider"),Sl(7,"form",null,2)(9,"po-input",8),Ew("ngModelChange",function(i){return Xy(r),tN(o.action.label,i)||(o.action.label=i),Qy(i)}),sg(),JA(),Sl(10,"po-input",9),Ew("ngModelChange",function(i){return Xy(r),tN(o.action.action,i)||(o.action.action=i),Qy(i)}),sg(),JA(),Sl(11,"po-input",10),Ew("ngModelChange",function(i){return Xy(r),tN(o.action.url,i)||(o.action.url=i),Qy(i)}),sg(),JA(),Sl(12,"po-select",11),Ew("ngModelChange",function(i){return Xy(r),tN(o.action.type,i)||(o.action.type=i),Qy(i)}),sg(),JA(),Sl(13,"po-select",12),Ew("ngModelChange",function(i){return Xy(r),tN(o.action.icon,i)||(o.action.icon=i),Qy(i)}),sg(),JA(),Sl(14,"po-select",13),Ew("ngModelChange",function(i){return Xy(r),tN(o.action.parent,i)||(o.action.parent=i),Qy(i)}),sg(),JA(),Sl(15,"po-checkbox-group",14),Ew("ngModelChange",function(i){return Xy(r),tN(o.action,i)||(o.action=i),Qy(i)}),sg(),JA(),Sl(16,"div",15)(17,"po-button",16),ht("p-click",function(){return o.addAction(o.action)}),sg()()(),Wl(18,"po-divider"),Sl(19,"form",null,3)(21,"div",15)(22,"po-input",17),Ew("ngModelChange",function(i){return Xy(r),tN(o.positions,i)||(o.positions=i),Qy(i)}),ht("p-change",function(){return o.convertToArray()}),sg(),JA(),Sl(23,"po-select",18),Ew("ngModelChange",function(i){return Xy(r),tN(o.position,i)||(o.position=i),Qy(i)}),sg(),JA(),Sl(24,"po-checkbox-group",19),Ew("ngModelChange",function(i){return Xy(r),tN(o.properties,i)||(o.properties=i),Qy(i)}),sg(),JA(),Sl(25,"po-radio-group",20),Ew("ngModelChange",function(i){return Xy(r),tN(o.size,i)||(o.size=i),Qy(i)}),sg(),JA(),sg(),Sl(26,"div",15)(27,"po-button",21),ht("p-click",function(){Xy(r);let i=xx(8);return xx(20).reset(),i.reset(),Qy(o.restore())}),sg()()();}if(a&2){let r=xx(8);tw("p-actions",o.actions)("p-custom-positions",o.customPositions)("p-hide-arrow",o.properties.includes("hideArrow"))("p-position",o.position)("p-size",o.size)("p-target",o.targetRef),Vp(9),Dw("ngModel",o.action.label),t0(),Vp(),Dw("ngModel",o.action.action),t0(),Vp(),Dw("ngModel",o.action.url),t0(),Vp(),Dw("ngModel",o.action.type),tw("p-options",o.typeOptions),t0(),Vp(),Dw("ngModel",o.action.icon),tw("p-options",o.iconOptions),t0(),Vp(),Dw("ngModel",o.action.parent),tw("p-options",o.parentList),t0(),Vp(),Dw("ngModel",o.action),tw("p-options",o.actionOptions),t0(),Vp(2),tw("p-disabled",r.form.invalid),Vp(5),Dw("ngModel",o.positions),t0(),Vp(),Dw("ngModel",o.position),tw("p-options",o.positionOptions),t0(),Vp(),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),t0(),Vp(),Dw("ngModel",o.size),tw("p-options",o.sizeOptions),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,Ghe,bo],styles:[".sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}"],changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Popup - Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-popup-labs/sample-po-popup-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-popup
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-popup-labs/sample-po-popup-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
    } as any;
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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-popup-labs/sample-po-popup-labs.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-popup-labs"),sg(),Wl(29,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ce],encapsulation:2})}return l})();var We=["formEmail"],Ne=["target"];function ze(l,Je){if(l&1&&(Sl(0,"div")(1,"div",6),Wl(2,"po-info",20),sg(),Wl(3,"po-divider"),sg()),l&2){let d=Tx();Vp(2),tw("p-value",d.cc);}}var ye=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:"an an-plus",label:"Upper Text",type:"default",action:this.upper.bind(this)},{icon:"an an-minus",label:"Lower Text",type:"default",action:this.lower.bind(this)},{icon:"an an-x",label:"Clear",type:"danger",action:this.clear.bind(this),separator:true}],this.primaryAction={label:"Confirmar",action:()=>{this.poModal.close(),this.reset();}};}send(){this.poModal.open();}reset(){this.formEmail.reset();}clear(){this.emailText=void 0;}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase();}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email"]],viewQuery:function(a,o){if(a&1&&ql(We,7)(Ne,7,Z)(Yo,7),a&2){let r;lo(r=uo())&&(o.formEmail=r.first),lo(r=uo())&&(o.targetRef=r.first),lo(r=uo())&&(o.poModal=r.first);}},standalone:false,decls:31,vars:14,consts:[["popup",""],["formEmail","ngForm"],["target",""],["p-position","right",3,"p-actions","p-target"],["p-popup-header-template",""],[1,"sample-popup-header-template"],[1,"po-row"],["p-title","Send email",1,"po-sm-12"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","message","p-help","Click show settings popup","p-label","Message","p-required","",1,"po-lg-10",3,"ngModelChange","click","ngModel"],["src","./assets/graphics/po.png",1,"po-lg-2","sample-logo-po"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"],["p-label","Reset",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Email successfully sent",3,"p-primary-action"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6","ngDefaultControl","",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(a,o){if(a&1){let r=Ex();Sl(0,"po-popup",3,0)(2,"div",4)(3,"div",5),Jx(4,"Settings"),sg()()(),Sl(5,"div",6)(6,"po-widget",7)(7,"form",null,1)(9,"div",6)(10,"po-email",8),Ew("ngModelChange",function(i){return Xy(r),tN(o.to,i)||(o.to=i),Qy(i)}),sg(),JA(),Sl(11,"po-email",9),Ew("ngModelChange",function(i){return Xy(r),tN(o.cc,i)||(o.cc=i),Qy(i)}),sg(),JA(),Sl(12,"po-input",10),Ew("ngModelChange",function(i){return Xy(r),tN(o.subject,i)||(o.subject=i),Qy(i)}),sg(),JA(),sg(),Sl(13,"div",6)(14,"po-textarea",11,2),Ew("ngModelChange",function(i){return Xy(r),tN(o.emailText,i)||(o.emailText=i),Qy(i)}),ht("click",function(){Xy(r);let i=xx(1);return Qy(i.toggle())}),sg(),JA(),Wl(16,"img",12),sg(),Sl(17,"div",6)(18,"po-button",13),ht("p-click",function(){return o.send()}),sg(),Sl(19,"po-button",14),ht("p-click",function(){return o.reset()}),sg()()()()(),Sl(20,"po-modal",15)(21,"div",6),Wl(22,"po-info",16)(23,"po-info",17),sg(),Wl(24,"po-divider"),ux(25,ze,4,1,"div"),Sl(26,"div",6),Wl(27,"po-info",18),sg(),Wl(28,"po-divider"),Sl(29,"div",6)(30,"po-textarea",19),Ew("ngModelChange",function(i){return Xy(r),tN(o.emailText,i)||(o.emailText=i),Qy(i)}),sg(),JA(),sg()();}if(a&2){let r=xx(8);tw("p-actions",o.popupActions)("p-target",o.targetRef),Vp(10),Dw("ngModel",o.to),t0(),Vp(),Dw("ngModel",o.cc),t0(),Vp(),Dw("ngModel",o.subject),t0(),Vp(2),Dw("ngModel",o.emailText),t0(),Vp(4),tw("p-disabled",r.form.invalid),Vp(),tw("p-disabled",r.form.invalid),Vp(),tw("p-primary-action",o.primaryAction),Vp(2),tw("p-value",o.from),Vp(),tw("p-value",o.to),Vp(2),dx(o.cc!==""?25:-1),Vp(2),tw("p-value",o.subject),Vp(3),Dw("ngModel",o.emailText),t0();}},dependencies:[J9,mb,K9,X9,Dk,vk,Qt,mv,Ez,F3,jhe,Qhe,Yo,bo,bNe],styles:[".sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}"],changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Popup Email"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-popup-email/sample-po-popup-email.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-popup-email/sample-po-popup-email.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-popup-email/sample-po-popup-email.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-logo-po {
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
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-popup-email"),sg(),Wl(29,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,He,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ye],encapsulation:2})}return l})();var _e=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-doc"]],standalone:false,decls:890,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPopupAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPopupModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-popup."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoPopupComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-popup"),sg(),Jx(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),sg(),Sl(18,"p"),Jx(19,"Suporta subn\xEDveis (submenus) quando as a\xE7\xF5es possuem a propriedade "),Sl(20,"code"),Jx(21,"subItems"),sg(),Jx(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),sg(),Sl(23,"p"),Jx(24,"\xC9 poss\xEDvel escolher as posi\xE7\xF5es do "),Sl(25,"code"),Jx(26,"po-popup"),sg(),Jx(27," em rela\xE7\xE3o ao componente alvo, para isto veja a propriedade "),Sl(28,"code"),Jx(29,"p-position"),sg(),Jx(30,"."),sg(),Sl(31,"p"),Jx(32,"Tamb\xE9m \xE9 poss\xEDvel informar um "),Sl(33,"em"),Jx(34,"template"),sg(),Sl(35,"em"),Jx(36,"header"),sg(),Jx(37," para o "),Sl(38,"code"),Jx(39,"po-popup"),sg(),Jx(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Sl(41,"code"),Jx(42,"p-popup-header-template"),sg(),Jx(43," no elemento que servir\xE1 de template, por exemplo:"),sg(),Sl(44,"pre")(45,"code"),Jx(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),sg()(),Sl(47,"h4"),Jx(48,"Tokens customiz\xE1veis"),sg(),Sl(49,"p"),Jx(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(51,"blockquote")(52,"p"),Jx(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(54,"a",6),Jx(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(56,"."),sg()(),Sl(57,"table")(58,"thead")(59,"tr")(60,"th"),Jx(61,"Propriedade"),sg(),Sl(62,"th"),Jx(63,"Descri\xE7\xE3o"),sg(),Sl(64,"th"),Jx(65,"Valor Padr\xE3o"),sg()()(),Sl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),Jx(70,"Default Values"),sg()(),Wl(71,"td")(72,"td"),sg(),Sl(73,"tr")(74,"td")(75,"code"),Jx(76,"--border-radius"),sg()(),Sl(77,"td"),Jx(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(79,"td")(80,"code"),Jx(81,"var(--border-radius-md)"),sg()()(),Sl(82,"tr")(83,"td")(84,"code"),Jx(85,"--border-width"),sg()(),Sl(86,"td"),Jx(87,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Sl(88,"td")(89,"code"),Jx(90,"var(--border-width-sm)"),sg()()(),Sl(91,"tr")(92,"td")(93,"code"),Jx(94,"--border-color"),sg()(),Sl(95,"td"),Jx(96,"Cor da borda"),sg(),Sl(97,"td")(98,"code"),Jx(99,"var(--color-neutral-light-20)"),sg()()(),Sl(100,"tr")(101,"td")(102,"code"),Jx(103,"--background"),sg()(),Sl(104,"td"),Jx(105,"Cor do background"),sg(),Sl(106,"td")(107,"code"),Jx(108,"var(--color-neutral-light-00)"),sg()()(),Sl(109,"tr")(110,"td")(111,"code"),Jx(112,"--shadow"),sg()(),Sl(113,"td"),Jx(114,"Cont\xE9m o valor da sombra do elemento"),sg(),Sl(115,"td")(116,"code"),Jx(117,"var(--shadow-md)"),sg()()(),Sl(118,"tr")(119,"td")(120,"strong"),Jx(121,"po-popup po-item-list"),sg()(),Wl(122,"td")(123,"td"),sg(),Sl(124,"tr")(125,"td")(126,"code"),Jx(127,"--font-family"),sg()(),Sl(128,"td"),Jx(129,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(130,"td")(131,"code"),Jx(132,"var(--font-family-theme)"),sg()()(),Sl(133,"tr")(134,"td")(135,"code"),Jx(136,"--font-size"),sg()(),Sl(137,"td"),Jx(138,"Tamanho da fonte"),sg(),Sl(139,"td")(140,"code"),Jx(141,"var(--font-size-default)"),sg()()(),Sl(142,"tr")(143,"td")(144,"code"),Jx(145,"--line-height"),sg()(),Sl(146,"td"),Jx(147,"Tamanho da label"),sg(),Sl(148,"td")(149,"code"),Jx(150,"var(--line-height-md)"),sg()()(),Sl(151,"tr")(152,"td")(153,"strong"),Jx(154,"Action"),sg()(),Wl(155,"td")(156,"td"),sg(),Sl(157,"tr")(158,"td")(159,"code"),Jx(160,"--font-weight"),sg()(),Sl(161,"td"),Jx(162,"Peso da fonte"),sg(),Sl(163,"td")(164,"code"),Jx(165,"var(--font-weight-bold)"),sg()()(),Sl(166,"tr")(167,"td")(168,"code"),Jx(169,"--color"),sg()(),Sl(170,"td"),Jx(171,"Cor principal do popup"),sg(),Sl(172,"td")(173,"code"),Jx(174,"var(--color-action-default)"),sg()()(),Sl(175,"tr")(176,"td")(177,"strong"),Jx(178,"Hover"),sg()(),Wl(179,"td")(180,"td"),sg(),Sl(181,"tr")(182,"td")(183,"code"),Jx(184,"--color-hover"),sg()(),Sl(185,"td"),Jx(186,"Cor principal no estado hover"),sg(),Sl(187,"td")(188,"code"),Jx(189,"var(--color-brand-01-darkest)"),sg()()(),Sl(190,"tr")(191,"td")(192,"code"),Jx(193,"--background-hover"),sg()(),Sl(194,"td"),Jx(195,"Cor de background no estado hover"),sg(),Sl(196,"td")(197,"code"),Jx(198,"var(--color-brand-01-lighter)"),sg()()(),Sl(199,"tr")(200,"td")(201,"strong"),Jx(202,"Focused"),sg()(),Wl(203,"td")(204,"td"),sg(),Sl(205,"tr")(206,"td")(207,"code"),Jx(208,"--outline-color-focused"),sg()(),Sl(209,"td"),Jx(210,"Cor do outline do estado de focus"),sg(),Sl(211,"td")(212,"code"),Jx(213,"var(--color-action-focus)"),sg()()(),Sl(214,"tr")(215,"td")(216,"strong"),Jx(217,"Pressed"),sg()(),Wl(218,"td")(219,"td"),sg(),Sl(220,"tr")(221,"td")(222,"code"),Jx(223,"--background-pressed"),sg()(),Sl(224,"td"),Jx(225,"Cor de background no estado de pressionado\xA0"),sg(),Sl(226,"td")(227,"code"),Jx(228,"var(--color-brand-01-light)"),sg()()(),Sl(229,"tr")(230,"td")(231,"strong"),Jx(232,"Disabled"),sg()(),Wl(233,"td")(234,"td"),sg(),Sl(235,"tr")(236,"td")(237,"code"),Jx(238,"--color-disabled"),sg()(),Sl(239,"td"),Jx(240,"Cor principal no estado disabled"),sg(),Sl(241,"td")(242,"code"),Jx(243,"var(--color-action-disabled)"),sg()()(),Sl(244,"tr")(245,"td")(246,"strong"),Jx(247,"Selected"),sg()(),Wl(248,"td")(249,"td"),sg(),Sl(250,"tr")(251,"td")(252,"code"),Jx(253,"--font-weight-selected"),sg()(),Sl(254,"td"),Jx(255,"Peso da fonte no estado selecionado"),sg(),Sl(256,"td")(257,"code"),Jx(258,"var(--font-weight-bold)"),sg()()(),Sl(259,"tr")(260,"td")(261,"code"),Jx(262,"--background-selected"),sg()(),Sl(263,"td"),Jx(264,"Cor de background no estado selecionado"),sg(),Sl(265,"td")(266,"code"),Jx(267,"var(--color-brand-01-lightest)"),sg()()(),Sl(268,"tr")(269,"td")(270,"strong"),Jx(271,"Option e check"),sg()(),Wl(272,"td")(273,"td"),sg(),Sl(274,"tr")(275,"td")(276,"code"),Jx(277,"--color-option"),sg()(),Sl(278,"td"),Jx(279,"Cor principa no estado Option/check"),sg(),Sl(280,"td")(281,"code"),Jx(282,"var(--color-neutral-dark-90)"),sg()()()()()(),Sl(283,"div",7)(284,"h4",8),Jx(285,"Seletor"),sg(),Sl(286,"pre",9),Jx(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),sg()(),Sl(288,"h4",10),Jx(289,"Propriedades"),sg(),Sl(290,"table",11)(291,"tr",12)(292,"th",13),Jx(293,"Nome"),sg(),Sl(294,"th",13),Jx(295,"Tipo"),sg(),Sl(296,"th",13),Jx(297,"Padr\xE3o"),sg(),Sl(298,"th",13),Jx(299,"Descri\xE7\xE3o"),sg()(),Sl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),Jx(304," p-actions"),Wl(305,"br"),sg()()(),Sl(306,"td",18)(307,"code",19),Jx(308,"PoPopupAction[]"),sg()(),Sl(309,"td",20),Jx(310,"-"),sg(),Sl(311,"td",21)(312,"p"),Jx(313,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),sg()()(),Sl(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),Jx(318," p-custom-positions"),Wl(319,"br"),sg()()(),Sl(320,"td",18)(321,"code",22),Jx(322,"string[]"),sg()(),Sl(323,"td",20),Jx(324,"-"),sg(),Sl(325,"td",21)(326,"em")(327,"strong"),Jx(328,"(opcional)"),sg()(),Sl(329,"p"),Jx(330,"Define as posi\xE7\xF5es e a sequ\xEAncia que o "),Sl(331,"code"),Jx(332,"po-popup"),sg(),Jx(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Sl(334,"em"),Jx(335,"array"),sg(),Jx(336,". Caso n\xE3o seja definido, o "),Sl(337,"code"),Jx(338,"po-popup"),sg(),Jx(339," ir\xE1 rotacionar em todas as posi\xE7\xF5es v\xE1lidas."),sg(),Sl(340,"blockquote")(341,"p"),Jx(342,"O componente sempre ir\xE1 abrir na posi\xE7\xE3o definida no "),Sl(343,"code"),Jx(344,"p-position"),sg(),Jx(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Sl(346,"code"),Jx(347,"p-custom-position"),sg(),Jx(348,"."),sg()(),Sl(349,"p"),Jx(350,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Sl(351,"ul")(352,"li")(353,"code"),Jx(354,"right"),sg(),Jx(355,": Posiciona o po-popup no lado direito do componente alvo."),sg(),Sl(356,"li")(357,"code"),Jx(358,"right-bottom"),sg(),Jx(359,": Posiciona o po-popup no lado direito inferior do componente alvo."),sg(),Sl(360,"li")(361,"code"),Jx(362,"right-top"),sg(),Jx(363,": Posiciona o po-popup no lado direito superior do componente alvo."),sg(),Sl(364,"li")(365,"code"),Jx(366,"bottom"),sg(),Jx(367,": Posiciona o po-popup abaixo do componente alvo."),sg(),Sl(368,"li")(369,"code"),Jx(370,"bottom-left"),sg(),Jx(371,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),sg(),Sl(372,"li")(373,"code"),Jx(374,"bottom-right"),sg(),Jx(375,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),sg(),Sl(376,"li")(377,"code"),Jx(378,"left"),sg(),Jx(379,": Posiciona o po-popup no lado esquerdo do componente alvo."),sg(),Sl(380,"li")(381,"code"),Jx(382,"left-top"),sg(),Jx(383,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),sg(),Sl(384,"li")(385,"code"),Jx(386,"left-bottom"),sg(),Jx(387,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),sg(),Sl(388,"li")(389,"code"),Jx(390,"top"),sg(),Jx(391,": Posiciona o po-popup acima do componente alvo."),sg(),Sl(392,"li")(393,"code"),Jx(394,"top-right"),sg(),Jx(395,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),sg(),Sl(396,"li")(397,"code"),Jx(398,"top-left"),sg(),Jx(399,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),sg()()()(),Sl(400,"tr",14)(401,"td",15)(402,"div",16)(403,"span",17),Jx(404," p-hide-arrow"),Wl(405,"br"),sg()()(),Sl(406,"td",18)(407,"code",23),Jx(408,"boolean"),sg()(),Sl(409,"td",20)(410,"p")(411,"code"),Jx(412,"false"),sg()()(),Sl(413,"td",21)(414,"em")(415,"strong"),Jx(416,"(opcional)"),sg()(),Sl(417,"p"),Jx(418,"Oculta a seta do componente "),Sl(419,"em"),Jx(420,"popup"),sg(),Jx(421,"."),sg()()(),Sl(422,"tr",14)(423,"td",15)(424,"div",16)(425,"span",17),Jx(426," p-position"),Wl(427,"br"),sg()()(),Sl(428,"td",18)(429,"code",24),Jx(430,"string"),sg()(),Sl(431,"td",20)(432,"p")(433,"code"),Jx(434,"bottom-left"),sg()()(),Sl(435,"td",21)(436,"em")(437,"strong"),Jx(438,"(opcional)"),sg()(),Sl(439,"p"),Jx(440,"Define a posi\xE7\xE3o inicial que o "),Sl(441,"code"),Jx(442,"po-popup"),sg(),Jx(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Sl(444,"code"),Jx(445,"bottom-left"),sg(),Jx(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),sg(),Sl(447,"blockquote")(448,"p"),Jx(449,"Caso seja definido um "),Sl(450,"code"),Jx(451,"p-custom-positions"),sg(),Jx(452," o componente ir\xE1 abrir na posi\xE7\xE3o definida na propriedade "),Sl(453,"code"),Jx(454,"p-position"),sg(),Jx(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Sl(456,"code"),Jx(457,"p-custom-positions"),sg(),Jx(458,"."),sg()(),Sl(459,"p"),Jx(460,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Sl(461,"ul")(462,"li")(463,"code"),Jx(464,"right"),sg(),Jx(465,": Posiciona o po-popup no lado direito do componente alvo."),sg(),Sl(466,"li")(467,"code"),Jx(468,"right-bottom"),sg(),Jx(469,": Posiciona o po-popup no lado direito inferior do componente alvo."),sg(),Sl(470,"li")(471,"code"),Jx(472,"right-top"),sg(),Jx(473,": Posiciona o po-popup no lado direito superior do componente alvo."),sg(),Sl(474,"li")(475,"code"),Jx(476,"bottom"),sg(),Jx(477,": Posiciona o po-popup abaixo do componente alvo."),sg(),Sl(478,"li")(479,"code"),Jx(480,"bottom-left"),sg(),Jx(481,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),sg(),Sl(482,"li")(483,"code"),Jx(484,"bottom-right"),sg(),Jx(485,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),sg(),Sl(486,"li")(487,"code"),Jx(488,"left"),sg(),Jx(489,": Posiciona o po-popup no lado esquerdo do componente alvo."),sg(),Sl(490,"li")(491,"code"),Jx(492,"left-top"),sg(),Jx(493,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),sg(),Sl(494,"li")(495,"code"),Jx(496,"left-bottom"),sg(),Jx(497,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),sg(),Sl(498,"li")(499,"code"),Jx(500,"top"),sg(),Jx(501,": Posiciona o po-popup acima do componente alvo."),sg(),Sl(502,"li")(503,"code"),Jx(504,"top-right"),sg(),Jx(505,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),sg(),Sl(506,"li")(507,"code"),Jx(508,"top-left"),sg(),Jx(509,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),sg()()()(),Sl(510,"tr",14)(511,"td",15)(512,"div",16)(513,"span",17),Jx(514," p-size"),Wl(515,"br"),sg()()(),Sl(516,"td",18)(517,"code",24),Jx(518,"string"),sg()(),Sl(519,"td",20)(520,"p")(521,"code"),Jx(522,"medium"),sg()()(),Sl(523,"td",21)(524,"em")(525,"strong"),Jx(526,"(opcional)"),sg()(),Sl(527,"p"),Jx(528,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(529,"ul")(530,"li")(531,"code"),Jx(532,"small"),sg(),Jx(533,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(534,"li")(535,"code"),Jx(536,"medium"),sg(),Jx(537,": aplica a medida medium de cada componente."),sg()(),Sl(538,"blockquote")(539,"p"),Jx(540,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(541,"code"),Jx(542,"medium"),sg(),Jx(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(544,"a",25),Jx(545,"po-theme"),sg(),Jx(546,"."),sg()()()(),Sl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),Jx(551," p-target"),Wl(552,"br"),sg()()(),Sl(553,"td",18)(554,"code",26),Jx(555,"any"),sg()(),Sl(556,"td",20),Jx(557,"-"),sg(),Sl(558,"td",21)(559,"p"),Jx(560,"Para utilizar o "),Sl(561,"code"),Jx(562,"po-popup"),sg(),Jx(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Sl(564,"code"),Jx(565,"toggle"),sg(),Jx(566,", por exemplo:"),sg(),Sl(567,"pre")(568,"code"),Jx(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),sg()(),Sl(570,"p"),Jx(571,"Caso o elemento alvo for um componente, ser\xE1 preciso obter o "),Sl(572,"code"),Jx(573,"ElementRef"),sg(),Jx(574," do mesmo e pass\xE1-lo \xE0 propriedade, por exemplo:"),sg(),Sl(575,"pre")(576,"code"),Jx(577,`// component.html

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
`),sg()()()()(),Sl(578,"h3",10),Jx(579,"M\xE9todos"),sg(),Sl(580,"table",27)(581,"tr",14)(582,"th",28)(583,"div",16)(584,"h4")(585,"span",17),Jx(586," close "),sg()()()()(),Sl(587,"tr",21)(588,"td",21)(589,"p"),Jx(590,"Fecha o componente "),Sl(591,"em"),Jx(592,"popup"),sg(),Jx(593,"."),sg(),Sl(594,"blockquote")(595,"p"),Jx(596,"Por padr\xE3o, este comportamento \xE9 acionado somente ao clicar fora do componente ou em determinada a\xE7\xE3o / url."),sg()()()()(),Wl(597,"br"),Sl(598,"table",27)(599,"tr",14)(600,"th",28)(601,"div",16)(602,"h4")(603,"span",17),Jx(604," open "),sg()()()()(),Sl(605,"tr",21)(606,"td",21)(607,"p"),Jx(608,"Abre o componente "),Sl(609,"em"),Jx(610,"popup"),sg(),Jx(611,"."),sg(),Sl(612,"blockquote")(613,"p"),Jx(614,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),sg()()()()(),Wl(615,"br"),Sl(616,"table",27)(617,"tr",14)(618,"th",28)(619,"div",16)(620,"h4")(621,"span",17),Jx(622," toggle "),sg()()()()(),Sl(623,"tr",21)(624,"td",21)(625,"p"),Jx(626,"Respons\xE1vel por abrir e fechar o "),Sl(627,"em"),Jx(628,"popup"),sg(),Jx(629,"."),sg(),Sl(630,"p"),Jx(631,"Quando disparado abrir\xE1 o "),Sl(632,"em"),Jx(633,"popup"),sg(),Jx(634," e caso o mesmo j\xE1 estiver aberto e possuir o mesmo "),Sl(635,"code"),Jx(636,"target"),sg(),Jx(637," ir\xE1 fecha-lo."),sg(),Sl(638,"p"),Jx(639,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),sg()()()(),Wl(640,"br"),Sl(641,"h3"),Jx(642,"Interfaces"),sg(),Sl(643,"h4",29)(644,"code",5),Jx(645,"PoPopupAction"),sg()(),Sl(646,"div",2)(647,"p"),Jx(648,"Interface para lista de a\xE7\xF5es do componente."),sg()(),Sl(649,"h4",10),Jx(650,"Propriedades"),sg(),Sl(651,"table",11)(652,"tr",12)(653,"th",13),Jx(654,"Nome"),sg(),Sl(655,"th",13),Jx(656,"Tipo"),sg(),Sl(657,"th",13),Jx(658,"Descri\xE7\xE3o"),sg()(),Sl(659,"tr",14)(660,"td",15)(661,"div",16)(662,"span",17),Jx(663," action"),Wl(664,"br"),sg()()(),Sl(665,"td",18)(666,"code",30),Jx(667,"Function"),sg()(),Sl(668,"td",21)(669,"em")(670,"strong"),Jx(671,"(opcional)"),sg()(),Sl(672,"p"),Jx(673,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Sl(674,"p"),Jx(675,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(676,"code"),Jx(677,"subItems"),sg(),Jx(678,"."),sg(),Sl(679,"blockquote")(680,"p"),Jx(681,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(682,"em"),Jx(683,"bind"),sg(),Jx(684,`:
`),Sl(685,"code"),Jx(686,"action: this.myFunction.bind(this)"),sg()()()()(),Sl(687,"tr",14)(688,"td",15)(689,"div",16)(690,"span",17),Jx(691," disabled"),Wl(692,"br"),sg()()(),Sl(693,"td",18)(694,"code",23),Jx(695,"boolean "),sg(),Sl(696,"code",30),Jx(697," Function"),sg()(),Sl(698,"td",21)(699,"em")(700,"strong"),Jx(701,"(opcional)"),sg()(),Sl(702,"p"),Jx(703,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Sl(704,"tr",14)(705,"td",15)(706,"div",16)(707,"span",17),Jx(708," icon"),Wl(709,"br"),sg()()(),Sl(710,"td",18)(711,"code",24),Jx(712,"string "),sg(),Sl(713,"code",31),Jx(714," TemplateRef<void>"),sg()(),Sl(715,"td",21)(716,"em")(717,"strong"),Jx(718,"(opcional)"),sg()(),Sl(719,"p"),Jx(720,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Sl(721,"p"),Jx(722,"Aceita \xEDcones da "),Sl(723,"a",32),Jx(724,"Biblioteca de \xEDcones"),sg(),Jx(725,`, fontes externas (ex: Font Awesome)
ou um `),Sl(726,"code"),Jx(727,"TemplateRef"),sg(),Jx(728," para \xEDcones customizados."),sg(),Sl(729,"pre")(730,"code"),Jx(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Sl(732,"tr",14)(733,"td",15)(734,"div",16)(735,"span",17),Jx(736," label"),Wl(737,"br"),sg()()(),Sl(738,"td",18)(739,"code",24),Jx(740,"string"),sg()(),Sl(741,"td",21)(742,"p"),Jx(743,"R\xF3tulo da a\xE7\xE3o."),sg(),Sl(744,"p"),Jx(745,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(746,"code"),Jx(747,"subItems"),sg(),Jx(748,"."),sg()()(),Sl(749,"tr",14)(750,"td",15)(751,"div",16)(752,"span",17),Jx(753," selected"),Wl(754,"br"),sg()()(),Sl(755,"td",18)(756,"code",23),Jx(757,"boolean"),sg()(),Sl(758,"td",21)(759,"em")(760,"strong"),Jx(761,"(opcional)"),sg()(),Sl(762,"p"),Jx(763,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Sl(764,"tr",14)(765,"td",15)(766,"div",16)(767,"span",17),Jx(768," separator"),Wl(769,"br"),sg()()(),Sl(770,"td",18)(771,"code",23),Jx(772,"boolean"),sg()(),Sl(773,"td",21)(774,"em")(775,"strong"),Jx(776,"(opcional)"),sg()(),Sl(777,"p"),Jx(778,"Atribui uma linha separadora acima do item."),sg()()(),Sl(779,"tr",14)(780,"td",15)(781,"div",16)(782,"span",17),Jx(783," subItems"),Wl(784,"br"),sg()()(),Sl(785,"td",18)(786,"code",33),Jx(787,"Array<PoPopupAction>"),sg()(),Sl(788,"td",21)(789,"em")(790,"strong"),Jx(791,"(opcional)"),sg()(),Sl(792,"p"),Jx(793,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Sl(794,"p"),Jx(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Sl(796,"blockquote")(797,"p"),Jx(798,"As propriedades "),Sl(799,"code"),Jx(800,"disabled"),sg(),Jx(801,", "),Sl(802,"code"),Jx(803,"type"),sg(),Jx(804," e "),Sl(805,"code"),Jx(806,"visible"),sg(),Jx(807," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Sl(808,"blockquote")(809,"p"),Jx(810,"Quando "),Sl(811,"code"),Jx(812,"url"),sg(),Jx(813," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Sl(814,"blockquote")(815,"p"),Jx(816,"Em subn\xEDveis aninhados, o "),Sl(817,"code"),Jx(818,"icon"),sg(),Jx(819," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Sl(820,"tr",14)(821,"td",15)(822,"div",16)(823,"span",17),Jx(824," type"),Wl(825,"br"),sg()()(),Sl(826,"td",18)(827,"code",24),Jx(828,"string"),sg()(),Sl(829,"td",21)(830,"em")(831,"strong"),Jx(832,"(opcional)"),sg()(),Sl(833,"p"),Jx(834,"Define a cor do item."),sg(),Sl(835,"p"),Jx(836,"Valores v\xE1lidos:"),sg(),Sl(837,"ul")(838,"li")(839,"code"),Jx(840,"default"),sg()(),Sl(841,"li")(842,"code"),Jx(843,"danger"),sg()()()()(),Sl(844,"tr",14)(845,"td",15)(846,"div",16)(847,"span",17),Jx(848," url"),Wl(849,"br"),sg()()(),Sl(850,"td",18)(851,"code",24),Jx(852,"string"),sg()(),Sl(853,"td",21)(854,"em")(855,"strong"),Jx(856,"(opcional)"),sg()(),Sl(857,"p"),Jx(858,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Sl(859,"p"),Jx(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(861,"code"),Jx(862,"url"),sg(),Jx(863," \xE9 informada em um agrupador, o clique "),Sl(864,"strong"),Jx(865,"n\xE3o abrir\xE1 os subitens"),sg(),Jx(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Sl(867,"blockquote")(868,"p"),Jx(869,"Quando informada, tem prioridade sobre a propriedade "),Sl(870,"code"),Jx(871,"action"),sg(),Jx(872,"."),sg()()()(),Sl(873,"tr",14)(874,"td",15)(875,"div",16)(876,"span",17),Jx(877," visible"),Wl(878,"br"),sg()()(),Sl(879,"td",18)(880,"code",23),Jx(881,"boolean "),sg(),Sl(882,"code",30),Jx(883," Function"),sg()(),Sl(884,"td",21)(885,"em")(886,"strong"),Jx(887,"(opcional)"),sg()(),Sl(888,"p"),Jx(889,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return l})();var Ae=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(C(Xn),C(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-popup-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-popup-basic-view")(6,"sample-po-popup-labs-view")(7,"sample-po-popup-email-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ve,Pe,we,_e],encapsulation:2})}return l})();var Ge=[{path:"",component:Ae}],Me=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[pL.forChild(Ge),pL]})}return l})();var qt=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ar,Me]})}return l})();export{qt as DocPoPopupModule};