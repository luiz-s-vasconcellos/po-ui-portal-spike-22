import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,ae as He$1,aV as Xp,r as r$1,ab as lt,bO as xo,aB as gx,Q as Cl,a1 as dt,T as og,R as Hl,H as Lp,Z as ZE,bw as oN,a7 as iN,av as zl,aw as uo,ax as fo,an as yO,aH as Zr,b7 as ofe,b8 as lfe,z as qx,ar as Fx,au as dg,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aJ as nme,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,bz as pb,cE as Uz,b4 as rme,cd as sme,b5 as Ko,b9 as ONe,aq as ix,at as ox,K,a3 as SNe,aD as Jy,aE as e_,aT as Zx,aA as Ex}from'./main-OS7VVRJY.js';var Te=["target"],ke=()=>({label:"PO Popup"}),De=l=>[l],Se=(()=>{class l{cdr=f(He$1);targetRef;ngAfterViewInit(){this.cdr.detectChanges();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic"]],viewQuery:function(a,o){if(a&1&&zl(Te,5,K),a&2){let r;uo(r=fo())&&(o.targetRef=r.first);}},standalone:false,decls:4,vars:5,consts:[["target",""],["popup",""],["p-icon","an an-question",1,"po-clickable",3,"click"],[3,"p-actions","p-target"]],template:function(a,o){if(a&1){let r=gx();Cl(0,"po-icon",2,0),dt("click",function(){Jy(r);let i=Sx(3);return e_(i.toggle())}),og(),Hl(2,"po-popup",3,1);}a&2&&(Lp(2),ZE("p-actions",oN(3,De,iN(2,ke)))("p-target",o.targetRef));},dependencies:[lt,xo],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Popup - Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-popup-basic/sample-po-popup-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-popup-basic/sample-po-popup-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-popup-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ve,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return l})();var Oe=["target"],Ce=(()=>{class l{poNotification=f(Xp);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let a=r$1({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0;}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions="",this.properties=[],this.size="medium",this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return !d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${"-".repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o);}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs"]],viewQuery:function(a,o){if(a&1&&zl(Oe,7,K),a&2){let r;uo(r=fo())&&(o.targetRef=r.first);}},standalone:false,decls:28,vars:25,consts:[["popup",""],["target",""],["formAction","ngForm"],["f","ngForm"],[3,"p-actions","p-custom-positions","p-hide-arrow","p-position","p-size","p-target"],[1,"po-row","sample-button-container"],[1,"po-offset-xl-5","po-offset-lg-5","po-md-2","po-lg-2"],["p-label","Popup",3,"p-click"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","customPositions","p-help",'["top", "left", "right-bottom"]',"p-label","Custom positions",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","position","p-label","Position",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let r=gx();Hl(0,"po-popup",4,0),Cl(2,"div",5)(3,"div",6)(4,"po-button",7,1),dt("p-click",function(){Jy(r);let i=Sx(1);return e_(i.toggle())}),og()()(),Hl(6,"po-divider"),Cl(7,"form",null,2)(9,"po-input",8),gw("ngModelChange",function(i){return Jy(r),Zx(o.action.label,i)||(o.action.label=i),e_(i)}),og(),Z0(),Cl(10,"po-input",9),gw("ngModelChange",function(i){return Jy(r),Zx(o.action.action,i)||(o.action.action=i),e_(i)}),og(),Z0(),Cl(11,"po-input",10),gw("ngModelChange",function(i){return Jy(r),Zx(o.action.url,i)||(o.action.url=i),e_(i)}),og(),Z0(),Cl(12,"po-select",11),gw("ngModelChange",function(i){return Jy(r),Zx(o.action.type,i)||(o.action.type=i),e_(i)}),og(),Z0(),Cl(13,"po-select",12),gw("ngModelChange",function(i){return Jy(r),Zx(o.action.icon,i)||(o.action.icon=i),e_(i)}),og(),Z0(),Cl(14,"po-select",13),gw("ngModelChange",function(i){return Jy(r),Zx(o.action.parent,i)||(o.action.parent=i),e_(i)}),og(),Z0(),Cl(15,"po-checkbox-group",14),gw("ngModelChange",function(i){return Jy(r),Zx(o.action,i)||(o.action=i),e_(i)}),og(),Z0(),Cl(16,"div",15)(17,"po-button",16),dt("p-click",function(){return o.addAction(o.action)}),og()()(),Hl(18,"po-divider"),Cl(19,"form",null,3)(21,"div",15)(22,"po-input",17),gw("ngModelChange",function(i){return Jy(r),Zx(o.positions,i)||(o.positions=i),e_(i)}),dt("p-change",function(){return o.convertToArray()}),og(),Z0(),Cl(23,"po-select",18),gw("ngModelChange",function(i){return Jy(r),Zx(o.position,i)||(o.position=i),e_(i)}),og(),Z0(),Cl(24,"po-checkbox-group",19),gw("ngModelChange",function(i){return Jy(r),Zx(o.properties,i)||(o.properties=i),e_(i)}),og(),Z0(),Cl(25,"po-radio-group",20),gw("ngModelChange",function(i){return Jy(r),Zx(o.size,i)||(o.size=i),e_(i)}),og(),Z0(),og(),Cl(26,"div",15)(27,"po-button",21),dt("p-click",function(){Jy(r);let i=Sx(8);return Sx(20).reset(),i.reset(),e_(o.restore())}),og()()();}if(a&2){let r=Sx(8);ZE("p-actions",o.actions)("p-custom-positions",o.customPositions)("p-hide-arrow",o.properties.includes("hideArrow"))("p-position",o.position)("p-size",o.size)("p-target",o.targetRef),Lp(9),pw("ngModel",o.action.label),X0(),Lp(),pw("ngModel",o.action.action),X0(),Lp(),pw("ngModel",o.action.url),X0(),Lp(),pw("ngModel",o.action.type),ZE("p-options",o.typeOptions),X0(),Lp(),pw("ngModel",o.action.icon),ZE("p-options",o.iconOptions),X0(),Lp(),pw("ngModel",o.action.parent),ZE("p-options",o.parentList),X0(),Lp(),pw("ngModel",o.action),ZE("p-options",o.actionOptions),X0(),Lp(2),ZE("p-disabled",r.form.invalid),Lp(5),pw("ngModel",o.positions),X0(),Lp(),pw("ngModel",o.position),ZE("p-options",o.positionOptions),X0(),Lp(),pw("ngModel",o.properties),ZE("p-options",o.propertiesOptions),X0(),Lp(),pw("ngModel",o.size),ZE("p-options",o.sizeOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,nme,xo],styles:[".sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}"],changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Popup - Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-popup-labs/sample-po-popup-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-popup
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-popup-labs/sample-po-popup-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-popup-labs/sample-po-popup-labs.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-popup-labs"),og(),Hl(29,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ce],encapsulation:2})}return l})();var We=["formEmail"],Ne=["target"];function ze(l,Je){if(l&1&&(Cl(0,"div")(1,"div",6),Hl(2,"po-info",20),og(),Hl(3,"po-divider"),og()),l&2){let d=Ex();Lp(2),ZE("p-value",d.cc);}}var ye=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:"an an-plus",label:"Upper Text",type:"default",action:this.upper.bind(this)},{icon:"an an-minus",label:"Lower Text",type:"default",action:this.lower.bind(this)},{icon:"an an-x",label:"Clear",type:"danger",action:this.clear.bind(this),separator:true}],this.primaryAction={label:"Confirmar",action:()=>{this.poModal.close(),this.reset();}};}send(){this.poModal.open();}reset(){this.formEmail.reset();}clear(){this.emailText=void 0;}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase();}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email"]],viewQuery:function(a,o){if(a&1&&zl(We,7)(Ne,7,K)(Ko,7),a&2){let r;uo(r=fo())&&(o.formEmail=r.first),uo(r=fo())&&(o.targetRef=r.first),uo(r=fo())&&(o.poModal=r.first);}},standalone:false,decls:31,vars:14,consts:[["popup",""],["formEmail","ngForm"],["target",""],["p-position","right",3,"p-actions","p-target"],["p-popup-header-template",""],[1,"sample-popup-header-template"],[1,"po-row"],["p-title","Send email",1,"po-sm-12"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","message","p-help","Click show settings popup","p-label","Message","p-required","",1,"po-lg-10",3,"ngModelChange","click","ngModel"],["src","./assets/graphics/po.png",1,"po-lg-2","sample-logo-po"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"],["p-label","Reset",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Email successfully sent",3,"p-primary-action"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6","ngDefaultControl","",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(a,o){if(a&1){let r=gx();Cl(0,"po-popup",3,0)(2,"div",4)(3,"div",5),qx(4,"Settings"),og()()(),Cl(5,"div",6)(6,"po-widget",7)(7,"form",null,1)(9,"div",6)(10,"po-email",8),gw("ngModelChange",function(i){return Jy(r),Zx(o.to,i)||(o.to=i),e_(i)}),og(),Z0(),Cl(11,"po-email",9),gw("ngModelChange",function(i){return Jy(r),Zx(o.cc,i)||(o.cc=i),e_(i)}),og(),Z0(),Cl(12,"po-input",10),gw("ngModelChange",function(i){return Jy(r),Zx(o.subject,i)||(o.subject=i),e_(i)}),og(),Z0(),og(),Cl(13,"div",6)(14,"po-textarea",11,2),gw("ngModelChange",function(i){return Jy(r),Zx(o.emailText,i)||(o.emailText=i),e_(i)}),dt("click",function(){Jy(r);let i=Sx(1);return e_(i.toggle())}),og(),Z0(),Hl(16,"img",12),og(),Cl(17,"div",6)(18,"po-button",13),dt("p-click",function(){return o.send()}),og(),Cl(19,"po-button",14),dt("p-click",function(){return o.reset()}),og()()()()(),Cl(20,"po-modal",15)(21,"div",6),Hl(22,"po-info",16)(23,"po-info",17),og(),Hl(24,"po-divider"),ix(25,ze,4,1,"div"),Cl(26,"div",6),Hl(27,"po-info",18),og(),Hl(28,"po-divider"),Cl(29,"div",6)(30,"po-textarea",19),gw("ngModelChange",function(i){return Jy(r),Zx(o.emailText,i)||(o.emailText=i),e_(i)}),og(),Z0(),og()();}if(a&2){let r=Sx(8);ZE("p-actions",o.popupActions)("p-target",o.targetRef),Lp(10),pw("ngModel",o.to),X0(),Lp(),pw("ngModel",o.cc),X0(),Lp(),pw("ngModel",o.subject),X0(),Lp(2),pw("ngModel",o.emailText),X0(),Lp(4),ZE("p-disabled",r.form.invalid),Lp(),ZE("p-disabled",r.form.invalid),Lp(),ZE("p-primary-action",o.primaryAction),Lp(2),ZE("p-value",o.from),Lp(),ZE("p-value",o.to),Lp(2),ox(o.cc!==""?25:-1),Lp(2),ZE("p-value",o.subject),Lp(3),pw("ngModel",o.emailText),X0();}},dependencies:[lY,pb,sY,aY,gk,fk,Qt,_v,Uz,q3,rme,sme,Ko,xo,ONe],styles:[".sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}"],changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Popup Email"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-popup-email/sample-po-popup-email.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-popup-email/sample-po-popup-email.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-popup-email/sample-po-popup-email.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-logo-po {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-popup-email"),og(),Hl(29,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,He,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ye],encapsulation:2})}return l})();var _e=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-doc"]],standalone:false,decls:890,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPopupAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPopupModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-popup."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoPopupComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-popup"),og(),qx(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),og(),Cl(18,"p"),qx(19,"Suporta subn\xEDveis (submenus) quando as a\xE7\xF5es possuem a propriedade "),Cl(20,"code"),qx(21,"subItems"),og(),qx(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),og(),Cl(23,"p"),qx(24,"\xC9 poss\xEDvel escolher as posi\xE7\xF5es do "),Cl(25,"code"),qx(26,"po-popup"),og(),qx(27," em rela\xE7\xE3o ao componente alvo, para isto veja a propriedade "),Cl(28,"code"),qx(29,"p-position"),og(),qx(30,"."),og(),Cl(31,"p"),qx(32,"Tamb\xE9m \xE9 poss\xEDvel informar um "),Cl(33,"em"),qx(34,"template"),og(),Cl(35,"em"),qx(36,"header"),og(),qx(37," para o "),Cl(38,"code"),qx(39,"po-popup"),og(),qx(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Cl(41,"code"),qx(42,"p-popup-header-template"),og(),qx(43," no elemento que servir\xE1 de template, por exemplo:"),og(),Cl(44,"pre")(45,"code"),qx(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),og()(),Cl(47,"h4"),qx(48,"Tokens customiz\xE1veis"),og(),Cl(49,"p"),qx(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(51,"blockquote")(52,"p"),qx(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(54,"a",6),qx(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(56,"."),og()(),Cl(57,"table")(58,"thead")(59,"tr")(60,"th"),qx(61,"Propriedade"),og(),Cl(62,"th"),qx(63,"Descri\xE7\xE3o"),og(),Cl(64,"th"),qx(65,"Valor Padr\xE3o"),og()()(),Cl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),qx(70,"Default Values"),og()(),Hl(71,"td")(72,"td"),og(),Cl(73,"tr")(74,"td")(75,"code"),qx(76,"--border-radius"),og()(),Cl(77,"td"),qx(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(79,"td")(80,"code"),qx(81,"var(--border-radius-md)"),og()()(),Cl(82,"tr")(83,"td")(84,"code"),qx(85,"--border-width"),og()(),Cl(86,"td"),qx(87,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Cl(88,"td")(89,"code"),qx(90,"var(--border-width-sm)"),og()()(),Cl(91,"tr")(92,"td")(93,"code"),qx(94,"--border-color"),og()(),Cl(95,"td"),qx(96,"Cor da borda"),og(),Cl(97,"td")(98,"code"),qx(99,"var(--color-neutral-light-20)"),og()()(),Cl(100,"tr")(101,"td")(102,"code"),qx(103,"--background"),og()(),Cl(104,"td"),qx(105,"Cor do background"),og(),Cl(106,"td")(107,"code"),qx(108,"var(--color-neutral-light-00)"),og()()(),Cl(109,"tr")(110,"td")(111,"code"),qx(112,"--shadow"),og()(),Cl(113,"td"),qx(114,"Cont\xE9m o valor da sombra do elemento"),og(),Cl(115,"td")(116,"code"),qx(117,"var(--shadow-md)"),og()()(),Cl(118,"tr")(119,"td")(120,"strong"),qx(121,"po-popup po-item-list"),og()(),Hl(122,"td")(123,"td"),og(),Cl(124,"tr")(125,"td")(126,"code"),qx(127,"--font-family"),og()(),Cl(128,"td"),qx(129,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(130,"td")(131,"code"),qx(132,"var(--font-family-theme)"),og()()(),Cl(133,"tr")(134,"td")(135,"code"),qx(136,"--font-size"),og()(),Cl(137,"td"),qx(138,"Tamanho da fonte"),og(),Cl(139,"td")(140,"code"),qx(141,"var(--font-size-default)"),og()()(),Cl(142,"tr")(143,"td")(144,"code"),qx(145,"--line-height"),og()(),Cl(146,"td"),qx(147,"Tamanho da label"),og(),Cl(148,"td")(149,"code"),qx(150,"var(--line-height-md)"),og()()(),Cl(151,"tr")(152,"td")(153,"strong"),qx(154,"Action"),og()(),Hl(155,"td")(156,"td"),og(),Cl(157,"tr")(158,"td")(159,"code"),qx(160,"--font-weight"),og()(),Cl(161,"td"),qx(162,"Peso da fonte"),og(),Cl(163,"td")(164,"code"),qx(165,"var(--font-weight-bold)"),og()()(),Cl(166,"tr")(167,"td")(168,"code"),qx(169,"--color"),og()(),Cl(170,"td"),qx(171,"Cor principal do popup"),og(),Cl(172,"td")(173,"code"),qx(174,"var(--color-action-default)"),og()()(),Cl(175,"tr")(176,"td")(177,"strong"),qx(178,"Hover"),og()(),Hl(179,"td")(180,"td"),og(),Cl(181,"tr")(182,"td")(183,"code"),qx(184,"--color-hover"),og()(),Cl(185,"td"),qx(186,"Cor principal no estado hover"),og(),Cl(187,"td")(188,"code"),qx(189,"var(--color-brand-01-darkest)"),og()()(),Cl(190,"tr")(191,"td")(192,"code"),qx(193,"--background-hover"),og()(),Cl(194,"td"),qx(195,"Cor de background no estado hover"),og(),Cl(196,"td")(197,"code"),qx(198,"var(--color-brand-01-lighter)"),og()()(),Cl(199,"tr")(200,"td")(201,"strong"),qx(202,"Focused"),og()(),Hl(203,"td")(204,"td"),og(),Cl(205,"tr")(206,"td")(207,"code"),qx(208,"--outline-color-focused"),og()(),Cl(209,"td"),qx(210,"Cor do outline do estado de focus"),og(),Cl(211,"td")(212,"code"),qx(213,"var(--color-action-focus)"),og()()(),Cl(214,"tr")(215,"td")(216,"strong"),qx(217,"Pressed"),og()(),Hl(218,"td")(219,"td"),og(),Cl(220,"tr")(221,"td")(222,"code"),qx(223,"--background-pressed"),og()(),Cl(224,"td"),qx(225,"Cor de background no estado de pressionado\xA0"),og(),Cl(226,"td")(227,"code"),qx(228,"var(--color-brand-01-light)"),og()()(),Cl(229,"tr")(230,"td")(231,"strong"),qx(232,"Disabled"),og()(),Hl(233,"td")(234,"td"),og(),Cl(235,"tr")(236,"td")(237,"code"),qx(238,"--color-disabled"),og()(),Cl(239,"td"),qx(240,"Cor principal no estado disabled"),og(),Cl(241,"td")(242,"code"),qx(243,"var(--color-action-disabled)"),og()()(),Cl(244,"tr")(245,"td")(246,"strong"),qx(247,"Selected"),og()(),Hl(248,"td")(249,"td"),og(),Cl(250,"tr")(251,"td")(252,"code"),qx(253,"--font-weight-selected"),og()(),Cl(254,"td"),qx(255,"Peso da fonte no estado selecionado"),og(),Cl(256,"td")(257,"code"),qx(258,"var(--font-weight-bold)"),og()()(),Cl(259,"tr")(260,"td")(261,"code"),qx(262,"--background-selected"),og()(),Cl(263,"td"),qx(264,"Cor de background no estado selecionado"),og(),Cl(265,"td")(266,"code"),qx(267,"var(--color-brand-01-lightest)"),og()()(),Cl(268,"tr")(269,"td")(270,"strong"),qx(271,"Option e check"),og()(),Hl(272,"td")(273,"td"),og(),Cl(274,"tr")(275,"td")(276,"code"),qx(277,"--color-option"),og()(),Cl(278,"td"),qx(279,"Cor principa no estado Option/check"),og(),Cl(280,"td")(281,"code"),qx(282,"var(--color-neutral-dark-90)"),og()()()()()(),Cl(283,"div",7)(284,"h4",8),qx(285,"Seletor"),og(),Cl(286,"pre",9),qx(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),og()(),Cl(288,"h4",10),qx(289,"Propriedades"),og(),Cl(290,"table",11)(291,"tr",12)(292,"th",13),qx(293,"Nome"),og(),Cl(294,"th",13),qx(295,"Tipo"),og(),Cl(296,"th",13),qx(297,"Padr\xE3o"),og(),Cl(298,"th",13),qx(299,"Descri\xE7\xE3o"),og()(),Cl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),qx(304," p-actions"),Hl(305,"br"),og()()(),Cl(306,"td",18)(307,"code",19),qx(308,"PoPopupAction[]"),og()(),Cl(309,"td",20),qx(310,"-"),og(),Cl(311,"td",21)(312,"p"),qx(313,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),og()()(),Cl(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),qx(318," p-custom-positions"),Hl(319,"br"),og()()(),Cl(320,"td",18)(321,"code",22),qx(322,"string[]"),og()(),Cl(323,"td",20),qx(324,"-"),og(),Cl(325,"td",21)(326,"em")(327,"strong"),qx(328,"(opcional)"),og()(),Cl(329,"p"),qx(330,"Define as posi\xE7\xF5es e a sequ\xEAncia que o "),Cl(331,"code"),qx(332,"po-popup"),og(),qx(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Cl(334,"em"),qx(335,"array"),og(),qx(336,". Caso n\xE3o seja definido, o "),Cl(337,"code"),qx(338,"po-popup"),og(),qx(339," ir\xE1 rotacionar em todas as posi\xE7\xF5es v\xE1lidas."),og(),Cl(340,"blockquote")(341,"p"),qx(342,"O componente sempre ir\xE1 abrir na posi\xE7\xE3o definida no "),Cl(343,"code"),qx(344,"p-position"),og(),qx(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Cl(346,"code"),qx(347,"p-custom-position"),og(),qx(348,"."),og()(),Cl(349,"p"),qx(350,"Posi\xE7\xF5es v\xE1lidas:"),og(),Cl(351,"ul")(352,"li")(353,"code"),qx(354,"right"),og(),qx(355,": Posiciona o po-popup no lado direito do componente alvo."),og(),Cl(356,"li")(357,"code"),qx(358,"right-bottom"),og(),qx(359,": Posiciona o po-popup no lado direito inferior do componente alvo."),og(),Cl(360,"li")(361,"code"),qx(362,"right-top"),og(),qx(363,": Posiciona o po-popup no lado direito superior do componente alvo."),og(),Cl(364,"li")(365,"code"),qx(366,"bottom"),og(),qx(367,": Posiciona o po-popup abaixo do componente alvo."),og(),Cl(368,"li")(369,"code"),qx(370,"bottom-left"),og(),qx(371,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),og(),Cl(372,"li")(373,"code"),qx(374,"bottom-right"),og(),qx(375,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),og(),Cl(376,"li")(377,"code"),qx(378,"left"),og(),qx(379,": Posiciona o po-popup no lado esquerdo do componente alvo."),og(),Cl(380,"li")(381,"code"),qx(382,"left-top"),og(),qx(383,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),og(),Cl(384,"li")(385,"code"),qx(386,"left-bottom"),og(),qx(387,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),og(),Cl(388,"li")(389,"code"),qx(390,"top"),og(),qx(391,": Posiciona o po-popup acima do componente alvo."),og(),Cl(392,"li")(393,"code"),qx(394,"top-right"),og(),qx(395,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),og(),Cl(396,"li")(397,"code"),qx(398,"top-left"),og(),qx(399,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),og()()()(),Cl(400,"tr",14)(401,"td",15)(402,"div",16)(403,"span",17),qx(404," p-hide-arrow"),Hl(405,"br"),og()()(),Cl(406,"td",18)(407,"code",23),qx(408,"boolean"),og()(),Cl(409,"td",20)(410,"p")(411,"code"),qx(412,"false"),og()()(),Cl(413,"td",21)(414,"em")(415,"strong"),qx(416,"(opcional)"),og()(),Cl(417,"p"),qx(418,"Oculta a seta do componente "),Cl(419,"em"),qx(420,"popup"),og(),qx(421,"."),og()()(),Cl(422,"tr",14)(423,"td",15)(424,"div",16)(425,"span",17),qx(426," p-position"),Hl(427,"br"),og()()(),Cl(428,"td",18)(429,"code",24),qx(430,"string"),og()(),Cl(431,"td",20)(432,"p")(433,"code"),qx(434,"bottom-left"),og()()(),Cl(435,"td",21)(436,"em")(437,"strong"),qx(438,"(opcional)"),og()(),Cl(439,"p"),qx(440,"Define a posi\xE7\xE3o inicial que o "),Cl(441,"code"),qx(442,"po-popup"),og(),qx(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Cl(444,"code"),qx(445,"bottom-left"),og(),qx(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Cl(447,"blockquote")(448,"p"),qx(449,"Caso seja definido um "),Cl(450,"code"),qx(451,"p-custom-positions"),og(),qx(452," o componente ir\xE1 abrir na posi\xE7\xE3o definida na propriedade "),Cl(453,"code"),qx(454,"p-position"),og(),qx(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Cl(456,"code"),qx(457,"p-custom-positions"),og(),qx(458,"."),og()(),Cl(459,"p"),qx(460,"Posi\xE7\xF5es v\xE1lidas:"),og(),Cl(461,"ul")(462,"li")(463,"code"),qx(464,"right"),og(),qx(465,": Posiciona o po-popup no lado direito do componente alvo."),og(),Cl(466,"li")(467,"code"),qx(468,"right-bottom"),og(),qx(469,": Posiciona o po-popup no lado direito inferior do componente alvo."),og(),Cl(470,"li")(471,"code"),qx(472,"right-top"),og(),qx(473,": Posiciona o po-popup no lado direito superior do componente alvo."),og(),Cl(474,"li")(475,"code"),qx(476,"bottom"),og(),qx(477,": Posiciona o po-popup abaixo do componente alvo."),og(),Cl(478,"li")(479,"code"),qx(480,"bottom-left"),og(),qx(481,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),og(),Cl(482,"li")(483,"code"),qx(484,"bottom-right"),og(),qx(485,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),og(),Cl(486,"li")(487,"code"),qx(488,"left"),og(),qx(489,": Posiciona o po-popup no lado esquerdo do componente alvo."),og(),Cl(490,"li")(491,"code"),qx(492,"left-top"),og(),qx(493,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),og(),Cl(494,"li")(495,"code"),qx(496,"left-bottom"),og(),qx(497,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),og(),Cl(498,"li")(499,"code"),qx(500,"top"),og(),qx(501,": Posiciona o po-popup acima do componente alvo."),og(),Cl(502,"li")(503,"code"),qx(504,"top-right"),og(),qx(505,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),og(),Cl(506,"li")(507,"code"),qx(508,"top-left"),og(),qx(509,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),og()()()(),Cl(510,"tr",14)(511,"td",15)(512,"div",16)(513,"span",17),qx(514," p-size"),Hl(515,"br"),og()()(),Cl(516,"td",18)(517,"code",24),qx(518,"string"),og()(),Cl(519,"td",20)(520,"p")(521,"code"),qx(522,"medium"),og()()(),Cl(523,"td",21)(524,"em")(525,"strong"),qx(526,"(opcional)"),og()(),Cl(527,"p"),qx(528,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(529,"ul")(530,"li")(531,"code"),qx(532,"small"),og(),qx(533,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(534,"li")(535,"code"),qx(536,"medium"),og(),qx(537,": aplica a medida medium de cada componente."),og()(),Cl(538,"blockquote")(539,"p"),qx(540,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(541,"code"),qx(542,"medium"),og(),qx(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(544,"a",25),qx(545,"po-theme"),og(),qx(546,"."),og()()()(),Cl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),qx(551," p-target"),Hl(552,"br"),og()()(),Cl(553,"td",18)(554,"code",26),qx(555,"any"),og()(),Cl(556,"td",20),qx(557,"-"),og(),Cl(558,"td",21)(559,"p"),qx(560,"Para utilizar o "),Cl(561,"code"),qx(562,"po-popup"),og(),qx(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Cl(564,"code"),qx(565,"toggle"),og(),qx(566,", por exemplo:"),og(),Cl(567,"pre")(568,"code"),qx(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),og()(),Cl(570,"p"),qx(571,"Caso o elemento alvo for um componente, ser\xE1 preciso obter o "),Cl(572,"code"),qx(573,"ElementRef"),og(),qx(574," do mesmo e pass\xE1-lo \xE0 propriedade, por exemplo:"),og(),Cl(575,"pre")(576,"code"),qx(577,`// component.html

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
`),og()()()()(),Cl(578,"h3",10),qx(579,"M\xE9todos"),og(),Cl(580,"table",27)(581,"tr",14)(582,"th",28)(583,"div",16)(584,"h4")(585,"span",17),qx(586," close "),og()()()()(),Cl(587,"tr",21)(588,"td",21)(589,"p"),qx(590,"Fecha o componente "),Cl(591,"em"),qx(592,"popup"),og(),qx(593,"."),og(),Cl(594,"blockquote")(595,"p"),qx(596,"Por padr\xE3o, este comportamento \xE9 acionado somente ao clicar fora do componente ou em determinada a\xE7\xE3o / url."),og()()()()(),Hl(597,"br"),Cl(598,"table",27)(599,"tr",14)(600,"th",28)(601,"div",16)(602,"h4")(603,"span",17),qx(604," open "),og()()()()(),Cl(605,"tr",21)(606,"td",21)(607,"p"),qx(608,"Abre o componente "),Cl(609,"em"),qx(610,"popup"),og(),qx(611,"."),og(),Cl(612,"blockquote")(613,"p"),qx(614,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),og()()()()(),Hl(615,"br"),Cl(616,"table",27)(617,"tr",14)(618,"th",28)(619,"div",16)(620,"h4")(621,"span",17),qx(622," toggle "),og()()()()(),Cl(623,"tr",21)(624,"td",21)(625,"p"),qx(626,"Respons\xE1vel por abrir e fechar o "),Cl(627,"em"),qx(628,"popup"),og(),qx(629,"."),og(),Cl(630,"p"),qx(631,"Quando disparado abrir\xE1 o "),Cl(632,"em"),qx(633,"popup"),og(),qx(634," e caso o mesmo j\xE1 estiver aberto e possuir o mesmo "),Cl(635,"code"),qx(636,"target"),og(),qx(637," ir\xE1 fecha-lo."),og(),Cl(638,"p"),qx(639,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),og()()()(),Hl(640,"br"),Cl(641,"h3"),qx(642,"Interfaces"),og(),Cl(643,"h4",29)(644,"code",5),qx(645,"PoPopupAction"),og()(),Cl(646,"div",2)(647,"p"),qx(648,"Interface para lista de a\xE7\xF5es do componente."),og()(),Cl(649,"h4",10),qx(650,"Propriedades"),og(),Cl(651,"table",11)(652,"tr",12)(653,"th",13),qx(654,"Nome"),og(),Cl(655,"th",13),qx(656,"Tipo"),og(),Cl(657,"th",13),qx(658,"Descri\xE7\xE3o"),og()(),Cl(659,"tr",14)(660,"td",15)(661,"div",16)(662,"span",17),qx(663," action"),Hl(664,"br"),og()()(),Cl(665,"td",18)(666,"code",30),qx(667,"Function"),og()(),Cl(668,"td",21)(669,"em")(670,"strong"),qx(671,"(opcional)"),og()(),Cl(672,"p"),qx(673,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Cl(674,"p"),qx(675,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(676,"code"),qx(677,"subItems"),og(),qx(678,"."),og(),Cl(679,"blockquote")(680,"p"),qx(681,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Cl(682,"em"),qx(683,"bind"),og(),qx(684,`:
`),Cl(685,"code"),qx(686,"action: this.myFunction.bind(this)"),og()()()()(),Cl(687,"tr",14)(688,"td",15)(689,"div",16)(690,"span",17),qx(691," disabled"),Hl(692,"br"),og()()(),Cl(693,"td",18)(694,"code",23),qx(695,"boolean "),og(),Cl(696,"code",30),qx(697," Function"),og()(),Cl(698,"td",21)(699,"em")(700,"strong"),qx(701,"(opcional)"),og()(),Cl(702,"p"),qx(703,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Cl(704,"tr",14)(705,"td",15)(706,"div",16)(707,"span",17),qx(708," icon"),Hl(709,"br"),og()()(),Cl(710,"td",18)(711,"code",24),qx(712,"string "),og(),Cl(713,"code",31),qx(714," TemplateRef<void>"),og()(),Cl(715,"td",21)(716,"em")(717,"strong"),qx(718,"(opcional)"),og()(),Cl(719,"p"),qx(720,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Cl(721,"p"),qx(722,"Aceita \xEDcones da "),Cl(723,"a",32),qx(724,"Biblioteca de \xEDcones"),og(),qx(725,`, fontes externas (ex: Font Awesome)
ou um `),Cl(726,"code"),qx(727,"TemplateRef"),og(),qx(728," para \xEDcones customizados."),og(),Cl(729,"pre")(730,"code"),qx(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Cl(732,"tr",14)(733,"td",15)(734,"div",16)(735,"span",17),qx(736," label"),Hl(737,"br"),og()()(),Cl(738,"td",18)(739,"code",24),qx(740,"string"),og()(),Cl(741,"td",21)(742,"p"),qx(743,"R\xF3tulo da a\xE7\xE3o."),og(),Cl(744,"p"),qx(745,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(746,"code"),qx(747,"subItems"),og(),qx(748,"."),og()()(),Cl(749,"tr",14)(750,"td",15)(751,"div",16)(752,"span",17),qx(753," selected"),Hl(754,"br"),og()()(),Cl(755,"td",18)(756,"code",23),qx(757,"boolean"),og()(),Cl(758,"td",21)(759,"em")(760,"strong"),qx(761,"(opcional)"),og()(),Cl(762,"p"),qx(763,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Cl(764,"tr",14)(765,"td",15)(766,"div",16)(767,"span",17),qx(768," separator"),Hl(769,"br"),og()()(),Cl(770,"td",18)(771,"code",23),qx(772,"boolean"),og()(),Cl(773,"td",21)(774,"em")(775,"strong"),qx(776,"(opcional)"),og()(),Cl(777,"p"),qx(778,"Atribui uma linha separadora acima do item."),og()()(),Cl(779,"tr",14)(780,"td",15)(781,"div",16)(782,"span",17),qx(783," subItems"),Hl(784,"br"),og()()(),Cl(785,"td",18)(786,"code",33),qx(787,"Array<PoPopupAction>"),og()(),Cl(788,"td",21)(789,"em")(790,"strong"),qx(791,"(opcional)"),og()(),Cl(792,"p"),qx(793,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Cl(794,"p"),qx(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Cl(796,"blockquote")(797,"p"),qx(798,"As propriedades "),Cl(799,"code"),qx(800,"disabled"),og(),qx(801,", "),Cl(802,"code"),qx(803,"type"),og(),qx(804," e "),Cl(805,"code"),qx(806,"visible"),og(),qx(807," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Cl(808,"blockquote")(809,"p"),qx(810,"Quando "),Cl(811,"code"),qx(812,"url"),og(),qx(813," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Cl(814,"blockquote")(815,"p"),qx(816,"Em subn\xEDveis aninhados, o "),Cl(817,"code"),qx(818,"icon"),og(),qx(819," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Cl(820,"tr",14)(821,"td",15)(822,"div",16)(823,"span",17),qx(824," type"),Hl(825,"br"),og()()(),Cl(826,"td",18)(827,"code",24),qx(828,"string"),og()(),Cl(829,"td",21)(830,"em")(831,"strong"),qx(832,"(opcional)"),og()(),Cl(833,"p"),qx(834,"Define a cor do item."),og(),Cl(835,"p"),qx(836,"Valores v\xE1lidos:"),og(),Cl(837,"ul")(838,"li")(839,"code"),qx(840,"default"),og()(),Cl(841,"li")(842,"code"),qx(843,"danger"),og()()()()(),Cl(844,"tr",14)(845,"td",15)(846,"div",16)(847,"span",17),qx(848," url"),Hl(849,"br"),og()()(),Cl(850,"td",18)(851,"code",24),qx(852,"string"),og()(),Cl(853,"td",21)(854,"em")(855,"strong"),qx(856,"(opcional)"),og()(),Cl(857,"p"),qx(858,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Cl(859,"p"),qx(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Cl(861,"code"),qx(862,"url"),og(),qx(863," \xE9 informada em um agrupador, o clique "),Cl(864,"strong"),qx(865,"n\xE3o abrir\xE1 os subitens"),og(),qx(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Cl(867,"blockquote")(868,"p"),qx(869,"Quando informada, tem prioridade sobre a propriedade "),Cl(870,"code"),qx(871,"action"),og(),qx(872,"."),og()()()(),Cl(873,"tr",14)(874,"td",15)(875,"div",16)(876,"span",17),qx(877," visible"),Hl(878,"br"),og()()(),Cl(879,"td",18)(880,"code",23),qx(881,"boolean "),og(),Cl(882,"code",30),qx(883," Function"),og()(),Cl(884,"td",21)(885,"em")(886,"strong"),qx(887,"(opcional)"),og()(),Cl(888,"p"),qx(889,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()()());},dependencies:[Zr],encapsulation:2})}return l})();var Ae=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(w(Xn),w(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-popup-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-popup-basic-view")(6,"sample-po-popup-labs-view")(7,"sample-po-popup-email-view"),og()()()),a&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ve,Pe,we,_e],encapsulation:2})}return l})();var Ge=[{path:"",component:Ae}],Me=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[bL.forChild(Ge),bL]})}return l})();var qt=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ca,Me]})}return l})();export{qt as DocPoPopupModule};