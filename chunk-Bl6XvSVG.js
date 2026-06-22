import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,ae as Be,aW as Yp,e as r$1,ab as lt,bK as bo,aB as Cx,T as Tl,a1 as ht,L as sg,J as Gl,F as Vp,M as tw,bs as hN,a7 as fN,av as Yl,aw as uo,ax as fo,an as TO,aH as Ga,b8 as Hme,b9 as Gme,z as tN,ar as zx,au as fg,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,aJ as Uhe,aM as Ew,aN as t0,bd as Ox,aO as Dw,aP as r0,bv as mb,cz as Mz,b5 as qhe,c9 as $he,b6 as Yo,ba as gNe,aq as fx,at as hx,l as K,a3 as aNe,aD as Ky,aE as Xy,aT as rN,aA as Rx}from'./main-LUSFEIN7.js';var Te=["target"],ke=()=>({label:"PO Popup"}),De=l=>[l],Se=(()=>{class l{cdr=f(Be);targetRef;ngAfterViewInit(){this.cdr.detectChanges();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic"]],viewQuery:function(a,o){if(a&1&&Yl(Te,5,K),a&2){let r;uo(r=fo())&&(o.targetRef=r.first);}},standalone:false,decls:4,vars:5,consts:[["target",""],["popup",""],["p-icon","an an-question",1,"po-clickable",3,"click"],[3,"p-actions","p-target"]],template:function(a,o){if(a&1){let r=Cx();Tl(0,"po-icon",2,0),ht("click",function(){Ky(r);let i=Ox(3);return Xy(i.toggle())}),sg(),Gl(2,"po-popup",3,1);}a&2&&(Vp(2),tw("p-actions",hN(3,De,fN(2,ke)))("p-target",o.targetRef));},dependencies:[lt,bo],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Popup - Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-popup-basic/sample-po-popup-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-popup-basic/sample-po-popup-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-popup-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ve,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Se],encapsulation:2})}return l})();var Oe=["target"],Ce=(()=>{class l{poNotification=f(Yp);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let a=r$1({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0;}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions="",this.properties=[],this.size="medium",this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return !d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${"-".repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o);}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs"]],viewQuery:function(a,o){if(a&1&&Yl(Oe,7,K),a&2){let r;uo(r=fo())&&(o.targetRef=r.first);}},standalone:false,decls:28,vars:25,consts:[["popup",""],["target",""],["formAction","ngForm"],["f","ngForm"],[3,"p-actions","p-custom-positions","p-hide-arrow","p-position","p-size","p-target"],[1,"po-row","sample-button-container"],[1,"po-offset-xl-5","po-offset-lg-5","po-md-2","po-lg-2"],["p-label","Popup",3,"p-click"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","customPositions","p-help",'["top", "left", "right-bottom"]',"p-label","Custom positions",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","position","p-label","Position",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let r=Cx();Gl(0,"po-popup",4,0),Tl(2,"div",5)(3,"div",6)(4,"po-button",7,1),ht("p-click",function(){Ky(r);let i=Ox(1);return Xy(i.toggle())}),sg()()(),Gl(6,"po-divider"),Tl(7,"form",null,2)(9,"po-input",8),Ew("ngModelChange",function(i){return Ky(r),rN(o.action.label,i)||(o.action.label=i),Xy(i)}),sg(),t0(),Tl(10,"po-input",9),Ew("ngModelChange",function(i){return Ky(r),rN(o.action.action,i)||(o.action.action=i),Xy(i)}),sg(),t0(),Tl(11,"po-input",10),Ew("ngModelChange",function(i){return Ky(r),rN(o.action.url,i)||(o.action.url=i),Xy(i)}),sg(),t0(),Tl(12,"po-select",11),Ew("ngModelChange",function(i){return Ky(r),rN(o.action.type,i)||(o.action.type=i),Xy(i)}),sg(),t0(),Tl(13,"po-select",12),Ew("ngModelChange",function(i){return Ky(r),rN(o.action.icon,i)||(o.action.icon=i),Xy(i)}),sg(),t0(),Tl(14,"po-select",13),Ew("ngModelChange",function(i){return Ky(r),rN(o.action.parent,i)||(o.action.parent=i),Xy(i)}),sg(),t0(),Tl(15,"po-checkbox-group",14),Ew("ngModelChange",function(i){return Ky(r),rN(o.action,i)||(o.action=i),Xy(i)}),sg(),t0(),Tl(16,"div",15)(17,"po-button",16),ht("p-click",function(){return o.addAction(o.action)}),sg()()(),Gl(18,"po-divider"),Tl(19,"form",null,3)(21,"div",15)(22,"po-input",17),Ew("ngModelChange",function(i){return Ky(r),rN(o.positions,i)||(o.positions=i),Xy(i)}),ht("p-change",function(){return o.convertToArray()}),sg(),t0(),Tl(23,"po-select",18),Ew("ngModelChange",function(i){return Ky(r),rN(o.position,i)||(o.position=i),Xy(i)}),sg(),t0(),Tl(24,"po-checkbox-group",19),Ew("ngModelChange",function(i){return Ky(r),rN(o.properties,i)||(o.properties=i),Xy(i)}),sg(),t0(),Tl(25,"po-radio-group",20),Ew("ngModelChange",function(i){return Ky(r),rN(o.size,i)||(o.size=i),Xy(i)}),sg(),t0(),sg(),Tl(26,"div",15)(27,"po-button",21),ht("p-click",function(){Ky(r);let i=Ox(8);return Ox(20).reset(),i.reset(),Xy(o.restore())}),sg()()();}if(a&2){let r=Ox(8);tw("p-actions",o.actions)("p-custom-positions",o.customPositions)("p-hide-arrow",o.properties.includes("hideArrow"))("p-position",o.position)("p-size",o.size)("p-target",o.targetRef),Vp(9),Dw("ngModel",o.action.label),r0(),Vp(),Dw("ngModel",o.action.action),r0(),Vp(),Dw("ngModel",o.action.url),r0(),Vp(),Dw("ngModel",o.action.type),tw("p-options",o.typeOptions),r0(),Vp(),Dw("ngModel",o.action.icon),tw("p-options",o.iconOptions),r0(),Vp(),Dw("ngModel",o.action.parent),tw("p-options",o.parentList),r0(),Vp(),Dw("ngModel",o.action),tw("p-options",o.actionOptions),r0(),Vp(2),tw("p-disabled",r.form.invalid),Vp(5),Dw("ngModel",o.positions),r0(),Vp(),Dw("ngModel",o.position),tw("p-options",o.positionOptions),r0(),Vp(),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),r0(),Vp(),Dw("ngModel",o.size),tw("p-options",o.sizeOptions),r0();}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,Uhe,bo],styles:[".sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}"],changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Popup - Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-popup-labs/sample-po-popup-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-popup
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-popup-labs/sample-po-popup-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),tN(24,"sample-po-popup-labs/sample-po-popup-labs.component.css"),sg(),Tl(25,"pre",11),tN(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-popup-labs"),sg(),Gl(29,"hr")),a&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ce],encapsulation:2})}return l})();var We=["formEmail"],Ne=["target"];function ze(l,Je){if(l&1&&(Tl(0,"div")(1,"div",6),Gl(2,"po-info",20),sg(),Gl(3,"po-divider"),sg()),l&2){let d=Rx();Vp(2),tw("p-value",d.cc);}}var ye=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:"an an-plus",label:"Upper Text",type:"default",action:this.upper.bind(this)},{icon:"an an-minus",label:"Lower Text",type:"default",action:this.lower.bind(this)},{icon:"an an-x",label:"Clear",type:"danger",action:this.clear.bind(this),separator:true}],this.primaryAction={label:"Confirmar",action:()=>{this.poModal.close(),this.reset();}};}send(){this.poModal.open();}reset(){this.formEmail.reset();}clear(){this.emailText=void 0;}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase();}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email"]],viewQuery:function(a,o){if(a&1&&Yl(We,7)(Ne,7,K)(Yo,7),a&2){let r;uo(r=fo())&&(o.formEmail=r.first),uo(r=fo())&&(o.targetRef=r.first),uo(r=fo())&&(o.poModal=r.first);}},standalone:false,decls:31,vars:14,consts:[["popup",""],["formEmail","ngForm"],["target",""],["p-position","right",3,"p-actions","p-target"],["p-popup-header-template",""],[1,"sample-popup-header-template"],[1,"po-row"],["p-title","Send email",1,"po-sm-12"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","message","p-help","Click show settings popup","p-label","Message","p-required","",1,"po-lg-10",3,"ngModelChange","click","ngModel"],["src","./assets/graphics/po.png",1,"po-lg-2","sample-logo-po"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"],["p-label","Reset",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Email successfully sent",3,"p-primary-action"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6","ngDefaultControl","",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(a,o){if(a&1){let r=Cx();Tl(0,"po-popup",3,0)(2,"div",4)(3,"div",5),tN(4,"Settings"),sg()()(),Tl(5,"div",6)(6,"po-widget",7)(7,"form",null,1)(9,"div",6)(10,"po-email",8),Ew("ngModelChange",function(i){return Ky(r),rN(o.to,i)||(o.to=i),Xy(i)}),sg(),t0(),Tl(11,"po-email",9),Ew("ngModelChange",function(i){return Ky(r),rN(o.cc,i)||(o.cc=i),Xy(i)}),sg(),t0(),Tl(12,"po-input",10),Ew("ngModelChange",function(i){return Ky(r),rN(o.subject,i)||(o.subject=i),Xy(i)}),sg(),t0(),sg(),Tl(13,"div",6)(14,"po-textarea",11,2),Ew("ngModelChange",function(i){return Ky(r),rN(o.emailText,i)||(o.emailText=i),Xy(i)}),ht("click",function(){Ky(r);let i=Ox(1);return Xy(i.toggle())}),sg(),t0(),Gl(16,"img",12),sg(),Tl(17,"div",6)(18,"po-button",13),ht("p-click",function(){return o.send()}),sg(),Tl(19,"po-button",14),ht("p-click",function(){return o.reset()}),sg()()()()(),Tl(20,"po-modal",15)(21,"div",6),Gl(22,"po-info",16)(23,"po-info",17),sg(),Gl(24,"po-divider"),fx(25,ze,4,1,"div"),Tl(26,"div",6),Gl(27,"po-info",18),sg(),Gl(28,"po-divider"),Tl(29,"div",6)(30,"po-textarea",19),Ew("ngModelChange",function(i){return Ky(r),rN(o.emailText,i)||(o.emailText=i),Xy(i)}),sg(),t0(),sg()();}if(a&2){let r=Ox(8);tw("p-actions",o.popupActions)("p-target",o.targetRef),Vp(10),Dw("ngModel",o.to),r0(),Vp(),Dw("ngModel",o.cc),r0(),Vp(),Dw("ngModel",o.subject),r0(),Vp(2),Dw("ngModel",o.emailText),r0(),Vp(4),tw("p-disabled",r.form.invalid),Vp(),tw("p-disabled",r.form.invalid),Vp(),tw("p-primary-action",o.primaryAction),Vp(2),tw("p-value",o.from),Vp(),tw("p-value",o.to),Vp(2),hx(o.cc!==""?25:-1),Vp(2),tw("p-value",o.subject),Vp(3),Dw("ngModel",o.emailText),r0();}},dependencies:[nY,mb,J9,eY,Ck,Dk,Qt,mv,Mz,O3,qhe,$he,Yo,bo,gNe],styles:[".sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}"],changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Popup Email"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-popup-email/sample-po-popup-email.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-popup-email/sample-po-popup-email.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),tN(24,"sample-po-popup-email/sample-po-popup-email.component.css"),sg(),Tl(25,"pre",11),tN(26,`.sample-logo-po {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-popup-email"),sg(),Gl(29,"hr")),a&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,He,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ye],encapsulation:2})}return l})();var _e=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-doc"]],standalone:false,decls:890,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPopupAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoPopupModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-popup."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoPopupComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O componente "),Tl(15,"code"),tN(16,"po-popup"),sg(),tN(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),sg(),Tl(18,"p"),tN(19,"Suporta subn\xEDveis (submenus) quando as a\xE7\xF5es possuem a propriedade "),Tl(20,"code"),tN(21,"subItems"),sg(),tN(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),sg(),Tl(23,"p"),tN(24,"\xC9 poss\xEDvel escolher as posi\xE7\xF5es do "),Tl(25,"code"),tN(26,"po-popup"),sg(),tN(27," em rela\xE7\xE3o ao componente alvo, para isto veja a propriedade "),Tl(28,"code"),tN(29,"p-position"),sg(),tN(30,"."),sg(),Tl(31,"p"),tN(32,"Tamb\xE9m \xE9 poss\xEDvel informar um "),Tl(33,"em"),tN(34,"template"),sg(),Tl(35,"em"),tN(36,"header"),sg(),tN(37," para o "),Tl(38,"code"),tN(39,"po-popup"),sg(),tN(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Tl(41,"code"),tN(42,"p-popup-header-template"),sg(),tN(43," no elemento que servir\xE1 de template, por exemplo:"),sg(),Tl(44,"pre")(45,"code"),tN(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),sg()(),Tl(47,"h4"),tN(48,"Tokens customiz\xE1veis"),sg(),Tl(49,"p"),tN(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(51,"blockquote")(52,"p"),tN(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(54,"a",6),tN(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(56,"."),sg()(),Tl(57,"table")(58,"thead")(59,"tr")(60,"th"),tN(61,"Propriedade"),sg(),Tl(62,"th"),tN(63,"Descri\xE7\xE3o"),sg(),Tl(64,"th"),tN(65,"Valor Padr\xE3o"),sg()()(),Tl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),tN(70,"Default Values"),sg()(),Gl(71,"td")(72,"td"),sg(),Tl(73,"tr")(74,"td")(75,"code"),tN(76,"--border-radius"),sg()(),Tl(77,"td"),tN(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(79,"td")(80,"code"),tN(81,"var(--border-radius-md)"),sg()()(),Tl(82,"tr")(83,"td")(84,"code"),tN(85,"--border-width"),sg()(),Tl(86,"td"),tN(87,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Tl(88,"td")(89,"code"),tN(90,"var(--border-width-sm)"),sg()()(),Tl(91,"tr")(92,"td")(93,"code"),tN(94,"--border-color"),sg()(),Tl(95,"td"),tN(96,"Cor da borda"),sg(),Tl(97,"td")(98,"code"),tN(99,"var(--color-neutral-light-20)"),sg()()(),Tl(100,"tr")(101,"td")(102,"code"),tN(103,"--background"),sg()(),Tl(104,"td"),tN(105,"Cor do background"),sg(),Tl(106,"td")(107,"code"),tN(108,"var(--color-neutral-light-00)"),sg()()(),Tl(109,"tr")(110,"td")(111,"code"),tN(112,"--shadow"),sg()(),Tl(113,"td"),tN(114,"Cont\xE9m o valor da sombra do elemento"),sg(),Tl(115,"td")(116,"code"),tN(117,"var(--shadow-md)"),sg()()(),Tl(118,"tr")(119,"td")(120,"strong"),tN(121,"po-popup po-item-list"),sg()(),Gl(122,"td")(123,"td"),sg(),Tl(124,"tr")(125,"td")(126,"code"),tN(127,"--font-family"),sg()(),Tl(128,"td"),tN(129,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(130,"td")(131,"code"),tN(132,"var(--font-family-theme)"),sg()()(),Tl(133,"tr")(134,"td")(135,"code"),tN(136,"--font-size"),sg()(),Tl(137,"td"),tN(138,"Tamanho da fonte"),sg(),Tl(139,"td")(140,"code"),tN(141,"var(--font-size-default)"),sg()()(),Tl(142,"tr")(143,"td")(144,"code"),tN(145,"--line-height"),sg()(),Tl(146,"td"),tN(147,"Tamanho da label"),sg(),Tl(148,"td")(149,"code"),tN(150,"var(--line-height-md)"),sg()()(),Tl(151,"tr")(152,"td")(153,"strong"),tN(154,"Action"),sg()(),Gl(155,"td")(156,"td"),sg(),Tl(157,"tr")(158,"td")(159,"code"),tN(160,"--font-weight"),sg()(),Tl(161,"td"),tN(162,"Peso da fonte"),sg(),Tl(163,"td")(164,"code"),tN(165,"var(--font-weight-bold)"),sg()()(),Tl(166,"tr")(167,"td")(168,"code"),tN(169,"--color"),sg()(),Tl(170,"td"),tN(171,"Cor principal do popup"),sg(),Tl(172,"td")(173,"code"),tN(174,"var(--color-action-default)"),sg()()(),Tl(175,"tr")(176,"td")(177,"strong"),tN(178,"Hover"),sg()(),Gl(179,"td")(180,"td"),sg(),Tl(181,"tr")(182,"td")(183,"code"),tN(184,"--color-hover"),sg()(),Tl(185,"td"),tN(186,"Cor principal no estado hover"),sg(),Tl(187,"td")(188,"code"),tN(189,"var(--color-brand-01-darkest)"),sg()()(),Tl(190,"tr")(191,"td")(192,"code"),tN(193,"--background-hover"),sg()(),Tl(194,"td"),tN(195,"Cor de background no estado hover"),sg(),Tl(196,"td")(197,"code"),tN(198,"var(--color-brand-01-lighter)"),sg()()(),Tl(199,"tr")(200,"td")(201,"strong"),tN(202,"Focused"),sg()(),Gl(203,"td")(204,"td"),sg(),Tl(205,"tr")(206,"td")(207,"code"),tN(208,"--outline-color-focused"),sg()(),Tl(209,"td"),tN(210,"Cor do outline do estado de focus"),sg(),Tl(211,"td")(212,"code"),tN(213,"var(--color-action-focus)"),sg()()(),Tl(214,"tr")(215,"td")(216,"strong"),tN(217,"Pressed"),sg()(),Gl(218,"td")(219,"td"),sg(),Tl(220,"tr")(221,"td")(222,"code"),tN(223,"--background-pressed"),sg()(),Tl(224,"td"),tN(225,"Cor de background no estado de pressionado\xA0"),sg(),Tl(226,"td")(227,"code"),tN(228,"var(--color-brand-01-light)"),sg()()(),Tl(229,"tr")(230,"td")(231,"strong"),tN(232,"Disabled"),sg()(),Gl(233,"td")(234,"td"),sg(),Tl(235,"tr")(236,"td")(237,"code"),tN(238,"--color-disabled"),sg()(),Tl(239,"td"),tN(240,"Cor principal no estado disabled"),sg(),Tl(241,"td")(242,"code"),tN(243,"var(--color-action-disabled)"),sg()()(),Tl(244,"tr")(245,"td")(246,"strong"),tN(247,"Selected"),sg()(),Gl(248,"td")(249,"td"),sg(),Tl(250,"tr")(251,"td")(252,"code"),tN(253,"--font-weight-selected"),sg()(),Tl(254,"td"),tN(255,"Peso da fonte no estado selecionado"),sg(),Tl(256,"td")(257,"code"),tN(258,"var(--font-weight-bold)"),sg()()(),Tl(259,"tr")(260,"td")(261,"code"),tN(262,"--background-selected"),sg()(),Tl(263,"td"),tN(264,"Cor de background no estado selecionado"),sg(),Tl(265,"td")(266,"code"),tN(267,"var(--color-brand-01-lightest)"),sg()()(),Tl(268,"tr")(269,"td")(270,"strong"),tN(271,"Option e check"),sg()(),Gl(272,"td")(273,"td"),sg(),Tl(274,"tr")(275,"td")(276,"code"),tN(277,"--color-option"),sg()(),Tl(278,"td"),tN(279,"Cor principa no estado Option/check"),sg(),Tl(280,"td")(281,"code"),tN(282,"var(--color-neutral-dark-90)"),sg()()()()()(),Tl(283,"div",7)(284,"h4",8),tN(285,"Seletor"),sg(),Tl(286,"pre",9),tN(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),sg()(),Tl(288,"h4",10),tN(289,"Propriedades"),sg(),Tl(290,"table",11)(291,"tr",12)(292,"th",13),tN(293,"Nome"),sg(),Tl(294,"th",13),tN(295,"Tipo"),sg(),Tl(296,"th",13),tN(297,"Padr\xE3o"),sg(),Tl(298,"th",13),tN(299,"Descri\xE7\xE3o"),sg()(),Tl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),tN(304," p-actions"),Gl(305,"br"),sg()()(),Tl(306,"td",18)(307,"code",19),tN(308,"PoPopupAction[]"),sg()(),Tl(309,"td",20),tN(310,"-"),sg(),Tl(311,"td",21)(312,"p"),tN(313,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),sg()()(),Tl(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),tN(318," p-custom-positions"),Gl(319,"br"),sg()()(),Tl(320,"td",18)(321,"code",22),tN(322,"string[]"),sg()(),Tl(323,"td",20),tN(324,"-"),sg(),Tl(325,"td",21)(326,"em")(327,"strong"),tN(328,"(opcional)"),sg()(),Tl(329,"p"),tN(330,"Define as posi\xE7\xF5es e a sequ\xEAncia que o "),Tl(331,"code"),tN(332,"po-popup"),sg(),tN(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Tl(334,"em"),tN(335,"array"),sg(),tN(336,". Caso n\xE3o seja definido, o "),Tl(337,"code"),tN(338,"po-popup"),sg(),tN(339," ir\xE1 rotacionar em todas as posi\xE7\xF5es v\xE1lidas."),sg(),Tl(340,"blockquote")(341,"p"),tN(342,"O componente sempre ir\xE1 abrir na posi\xE7\xE3o definida no "),Tl(343,"code"),tN(344,"p-position"),sg(),tN(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Tl(346,"code"),tN(347,"p-custom-position"),sg(),tN(348,"."),sg()(),Tl(349,"p"),tN(350,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Tl(351,"ul")(352,"li")(353,"code"),tN(354,"right"),sg(),tN(355,": Posiciona o po-popup no lado direito do componente alvo."),sg(),Tl(356,"li")(357,"code"),tN(358,"right-bottom"),sg(),tN(359,": Posiciona o po-popup no lado direito inferior do componente alvo."),sg(),Tl(360,"li")(361,"code"),tN(362,"right-top"),sg(),tN(363,": Posiciona o po-popup no lado direito superior do componente alvo."),sg(),Tl(364,"li")(365,"code"),tN(366,"bottom"),sg(),tN(367,": Posiciona o po-popup abaixo do componente alvo."),sg(),Tl(368,"li")(369,"code"),tN(370,"bottom-left"),sg(),tN(371,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),sg(),Tl(372,"li")(373,"code"),tN(374,"bottom-right"),sg(),tN(375,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),sg(),Tl(376,"li")(377,"code"),tN(378,"left"),sg(),tN(379,": Posiciona o po-popup no lado esquerdo do componente alvo."),sg(),Tl(380,"li")(381,"code"),tN(382,"left-top"),sg(),tN(383,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),sg(),Tl(384,"li")(385,"code"),tN(386,"left-bottom"),sg(),tN(387,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),sg(),Tl(388,"li")(389,"code"),tN(390,"top"),sg(),tN(391,": Posiciona o po-popup acima do componente alvo."),sg(),Tl(392,"li")(393,"code"),tN(394,"top-right"),sg(),tN(395,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),sg(),Tl(396,"li")(397,"code"),tN(398,"top-left"),sg(),tN(399,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),sg()()()(),Tl(400,"tr",14)(401,"td",15)(402,"div",16)(403,"span",17),tN(404," p-hide-arrow"),Gl(405,"br"),sg()()(),Tl(406,"td",18)(407,"code",23),tN(408,"boolean"),sg()(),Tl(409,"td",20)(410,"p")(411,"code"),tN(412,"false"),sg()()(),Tl(413,"td",21)(414,"em")(415,"strong"),tN(416,"(opcional)"),sg()(),Tl(417,"p"),tN(418,"Oculta a seta do componente "),Tl(419,"em"),tN(420,"popup"),sg(),tN(421,"."),sg()()(),Tl(422,"tr",14)(423,"td",15)(424,"div",16)(425,"span",17),tN(426," p-position"),Gl(427,"br"),sg()()(),Tl(428,"td",18)(429,"code",24),tN(430,"string"),sg()(),Tl(431,"td",20)(432,"p")(433,"code"),tN(434,"bottom-left"),sg()()(),Tl(435,"td",21)(436,"em")(437,"strong"),tN(438,"(opcional)"),sg()(),Tl(439,"p"),tN(440,"Define a posi\xE7\xE3o inicial que o "),Tl(441,"code"),tN(442,"po-popup"),sg(),tN(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Tl(444,"code"),tN(445,"bottom-left"),sg(),tN(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),sg(),Tl(447,"blockquote")(448,"p"),tN(449,"Caso seja definido um "),Tl(450,"code"),tN(451,"p-custom-positions"),sg(),tN(452," o componente ir\xE1 abrir na posi\xE7\xE3o definida na propriedade "),Tl(453,"code"),tN(454,"p-position"),sg(),tN(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Tl(456,"code"),tN(457,"p-custom-positions"),sg(),tN(458,"."),sg()(),Tl(459,"p"),tN(460,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Tl(461,"ul")(462,"li")(463,"code"),tN(464,"right"),sg(),tN(465,": Posiciona o po-popup no lado direito do componente alvo."),sg(),Tl(466,"li")(467,"code"),tN(468,"right-bottom"),sg(),tN(469,": Posiciona o po-popup no lado direito inferior do componente alvo."),sg(),Tl(470,"li")(471,"code"),tN(472,"right-top"),sg(),tN(473,": Posiciona o po-popup no lado direito superior do componente alvo."),sg(),Tl(474,"li")(475,"code"),tN(476,"bottom"),sg(),tN(477,": Posiciona o po-popup abaixo do componente alvo."),sg(),Tl(478,"li")(479,"code"),tN(480,"bottom-left"),sg(),tN(481,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),sg(),Tl(482,"li")(483,"code"),tN(484,"bottom-right"),sg(),tN(485,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),sg(),Tl(486,"li")(487,"code"),tN(488,"left"),sg(),tN(489,": Posiciona o po-popup no lado esquerdo do componente alvo."),sg(),Tl(490,"li")(491,"code"),tN(492,"left-top"),sg(),tN(493,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),sg(),Tl(494,"li")(495,"code"),tN(496,"left-bottom"),sg(),tN(497,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),sg(),Tl(498,"li")(499,"code"),tN(500,"top"),sg(),tN(501,": Posiciona o po-popup acima do componente alvo."),sg(),Tl(502,"li")(503,"code"),tN(504,"top-right"),sg(),tN(505,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),sg(),Tl(506,"li")(507,"code"),tN(508,"top-left"),sg(),tN(509,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),sg()()()(),Tl(510,"tr",14)(511,"td",15)(512,"div",16)(513,"span",17),tN(514," p-size"),Gl(515,"br"),sg()()(),Tl(516,"td",18)(517,"code",24),tN(518,"string"),sg()(),Tl(519,"td",20)(520,"p")(521,"code"),tN(522,"medium"),sg()()(),Tl(523,"td",21)(524,"em")(525,"strong"),tN(526,"(opcional)"),sg()(),Tl(527,"p"),tN(528,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(529,"ul")(530,"li")(531,"code"),tN(532,"small"),sg(),tN(533,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(534,"li")(535,"code"),tN(536,"medium"),sg(),tN(537,": aplica a medida medium de cada componente."),sg()(),Tl(538,"blockquote")(539,"p"),tN(540,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(541,"code"),tN(542,"medium"),sg(),tN(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(544,"a",25),tN(545,"po-theme"),sg(),tN(546,"."),sg()()()(),Tl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),tN(551," p-target"),Gl(552,"br"),sg()()(),Tl(553,"td",18)(554,"code",26),tN(555,"any"),sg()(),Tl(556,"td",20),tN(557,"-"),sg(),Tl(558,"td",21)(559,"p"),tN(560,"Para utilizar o "),Tl(561,"code"),tN(562,"po-popup"),sg(),tN(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Tl(564,"code"),tN(565,"toggle"),sg(),tN(566,", por exemplo:"),sg(),Tl(567,"pre")(568,"code"),tN(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),sg()(),Tl(570,"p"),tN(571,"Caso o elemento alvo for um componente, ser\xE1 preciso obter o "),Tl(572,"code"),tN(573,"ElementRef"),sg(),tN(574," do mesmo e pass\xE1-lo \xE0 propriedade, por exemplo:"),sg(),Tl(575,"pre")(576,"code"),tN(577,`// component.html

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
`),sg()()()()(),Tl(578,"h3",10),tN(579,"M\xE9todos"),sg(),Tl(580,"table",27)(581,"tr",14)(582,"th",28)(583,"div",16)(584,"h4")(585,"span",17),tN(586," close "),sg()()()()(),Tl(587,"tr",21)(588,"td",21)(589,"p"),tN(590,"Fecha o componente "),Tl(591,"em"),tN(592,"popup"),sg(),tN(593,"."),sg(),Tl(594,"blockquote")(595,"p"),tN(596,"Por padr\xE3o, este comportamento \xE9 acionado somente ao clicar fora do componente ou em determinada a\xE7\xE3o / url."),sg()()()()(),Gl(597,"br"),Tl(598,"table",27)(599,"tr",14)(600,"th",28)(601,"div",16)(602,"h4")(603,"span",17),tN(604," open "),sg()()()()(),Tl(605,"tr",21)(606,"td",21)(607,"p"),tN(608,"Abre o componente "),Tl(609,"em"),tN(610,"popup"),sg(),tN(611,"."),sg(),Tl(612,"blockquote")(613,"p"),tN(614,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),sg()()()()(),Gl(615,"br"),Tl(616,"table",27)(617,"tr",14)(618,"th",28)(619,"div",16)(620,"h4")(621,"span",17),tN(622," toggle "),sg()()()()(),Tl(623,"tr",21)(624,"td",21)(625,"p"),tN(626,"Respons\xE1vel por abrir e fechar o "),Tl(627,"em"),tN(628,"popup"),sg(),tN(629,"."),sg(),Tl(630,"p"),tN(631,"Quando disparado abrir\xE1 o "),Tl(632,"em"),tN(633,"popup"),sg(),tN(634," e caso o mesmo j\xE1 estiver aberto e possuir o mesmo "),Tl(635,"code"),tN(636,"target"),sg(),tN(637," ir\xE1 fecha-lo."),sg(),Tl(638,"p"),tN(639,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),sg()()()(),Gl(640,"br"),Tl(641,"h3"),tN(642,"Interfaces"),sg(),Tl(643,"h4",29)(644,"code",5),tN(645,"PoPopupAction"),sg()(),Tl(646,"div",2)(647,"p"),tN(648,"Interface para lista de a\xE7\xF5es do componente."),sg()(),Tl(649,"h4",10),tN(650,"Propriedades"),sg(),Tl(651,"table",11)(652,"tr",12)(653,"th",13),tN(654,"Nome"),sg(),Tl(655,"th",13),tN(656,"Tipo"),sg(),Tl(657,"th",13),tN(658,"Descri\xE7\xE3o"),sg()(),Tl(659,"tr",14)(660,"td",15)(661,"div",16)(662,"span",17),tN(663," action"),Gl(664,"br"),sg()()(),Tl(665,"td",18)(666,"code",30),tN(667,"Function"),sg()(),Tl(668,"td",21)(669,"em")(670,"strong"),tN(671,"(opcional)"),sg()(),Tl(672,"p"),tN(673,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Tl(674,"p"),tN(675,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(676,"code"),tN(677,"subItems"),sg(),tN(678,"."),sg(),Tl(679,"blockquote")(680,"p"),tN(681,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Tl(682,"em"),tN(683,"bind"),sg(),tN(684,`:
`),Tl(685,"code"),tN(686,"action: this.myFunction.bind(this)"),sg()()()()(),Tl(687,"tr",14)(688,"td",15)(689,"div",16)(690,"span",17),tN(691," disabled"),Gl(692,"br"),sg()()(),Tl(693,"td",18)(694,"code",23),tN(695,"boolean "),sg(),Tl(696,"code",30),tN(697," Function"),sg()(),Tl(698,"td",21)(699,"em")(700,"strong"),tN(701,"(opcional)"),sg()(),Tl(702,"p"),tN(703,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Tl(704,"tr",14)(705,"td",15)(706,"div",16)(707,"span",17),tN(708," icon"),Gl(709,"br"),sg()()(),Tl(710,"td",18)(711,"code",24),tN(712,"string "),sg(),Tl(713,"code",31),tN(714," TemplateRef<void>"),sg()(),Tl(715,"td",21)(716,"em")(717,"strong"),tN(718,"(opcional)"),sg()(),Tl(719,"p"),tN(720,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(721,"p"),tN(722,"Aceita \xEDcones da "),Tl(723,"a",32),tN(724,"Biblioteca de \xEDcones"),sg(),tN(725,`, fontes externas (ex: Font Awesome)
ou um `),Tl(726,"code"),tN(727,"TemplateRef"),sg(),tN(728," para \xEDcones customizados."),sg(),Tl(729,"pre")(730,"code"),tN(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Tl(732,"tr",14)(733,"td",15)(734,"div",16)(735,"span",17),tN(736," label"),Gl(737,"br"),sg()()(),Tl(738,"td",18)(739,"code",24),tN(740,"string"),sg()(),Tl(741,"td",21)(742,"p"),tN(743,"R\xF3tulo da a\xE7\xE3o."),sg(),Tl(744,"p"),tN(745,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(746,"code"),tN(747,"subItems"),sg(),tN(748,"."),sg()()(),Tl(749,"tr",14)(750,"td",15)(751,"div",16)(752,"span",17),tN(753," selected"),Gl(754,"br"),sg()()(),Tl(755,"td",18)(756,"code",23),tN(757,"boolean"),sg()(),Tl(758,"td",21)(759,"em")(760,"strong"),tN(761,"(opcional)"),sg()(),Tl(762,"p"),tN(763,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Tl(764,"tr",14)(765,"td",15)(766,"div",16)(767,"span",17),tN(768," separator"),Gl(769,"br"),sg()()(),Tl(770,"td",18)(771,"code",23),tN(772,"boolean"),sg()(),Tl(773,"td",21)(774,"em")(775,"strong"),tN(776,"(opcional)"),sg()(),Tl(777,"p"),tN(778,"Atribui uma linha separadora acima do item."),sg()()(),Tl(779,"tr",14)(780,"td",15)(781,"div",16)(782,"span",17),tN(783," subItems"),Gl(784,"br"),sg()()(),Tl(785,"td",18)(786,"code",33),tN(787,"Array<PoPopupAction>"),sg()(),Tl(788,"td",21)(789,"em")(790,"strong"),tN(791,"(opcional)"),sg()(),Tl(792,"p"),tN(793,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Tl(794,"p"),tN(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Tl(796,"blockquote")(797,"p"),tN(798,"As propriedades "),Tl(799,"code"),tN(800,"disabled"),sg(),tN(801,", "),Tl(802,"code"),tN(803,"type"),sg(),tN(804," e "),Tl(805,"code"),tN(806,"visible"),sg(),tN(807," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Tl(808,"blockquote")(809,"p"),tN(810,"Quando "),Tl(811,"code"),tN(812,"url"),sg(),tN(813," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Tl(814,"blockquote")(815,"p"),tN(816,"Em subn\xEDveis aninhados, o "),Tl(817,"code"),tN(818,"icon"),sg(),tN(819," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Tl(820,"tr",14)(821,"td",15)(822,"div",16)(823,"span",17),tN(824," type"),Gl(825,"br"),sg()()(),Tl(826,"td",18)(827,"code",24),tN(828,"string"),sg()(),Tl(829,"td",21)(830,"em")(831,"strong"),tN(832,"(opcional)"),sg()(),Tl(833,"p"),tN(834,"Define a cor do item."),sg(),Tl(835,"p"),tN(836,"Valores v\xE1lidos:"),sg(),Tl(837,"ul")(838,"li")(839,"code"),tN(840,"default"),sg()(),Tl(841,"li")(842,"code"),tN(843,"danger"),sg()()()()(),Tl(844,"tr",14)(845,"td",15)(846,"div",16)(847,"span",17),tN(848," url"),Gl(849,"br"),sg()()(),Tl(850,"td",18)(851,"code",24),tN(852,"string"),sg()(),Tl(853,"td",21)(854,"em")(855,"strong"),tN(856,"(opcional)"),sg()(),Tl(857,"p"),tN(858,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Tl(859,"p"),tN(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(861,"code"),tN(862,"url"),sg(),tN(863," \xE9 informada em um agrupador, o clique "),Tl(864,"strong"),tN(865,"n\xE3o abrir\xE1 os subitens"),sg(),tN(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Tl(867,"blockquote")(868,"p"),tN(869,"Quando informada, tem prioridade sobre a propriedade "),Tl(870,"code"),tN(871,"action"),sg(),tN(872,"."),sg()()()(),Tl(873,"tr",14)(874,"td",15)(875,"div",16)(876,"span",17),tN(877," visible"),Gl(878,"br"),sg()()(),Tl(879,"td",18)(880,"code",23),tN(881,"boolean "),sg(),Tl(882,"code",30),tN(883," Function"),sg()(),Tl(884,"td",21)(885,"em")(886,"strong"),tN(887,"(opcional)"),sg()(),Tl(888,"p"),tN(889,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return l})();var Ae=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(w(Xn),w(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-popup-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-popup-basic-view")(6,"sample-po-popup-labs-view")(7,"sample-po-popup-email-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ve,Pe,we,_e],encapsulation:2})}return l})();var Ge=[{path:"",component:Ae}],Me=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[vL.forChild(Ge),vL]})}return l})();var qt=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ar,Me]})}return l})();export{qt as DocPoPopupModule};