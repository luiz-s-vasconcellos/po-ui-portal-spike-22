import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,a_ as Ue$1,aE as Bp,r as r$1,ab as J,bg as Ci,al as lx,J as wl,a1 as ut,R as ng,N as Ul,P as Pp,S as YE,bi as Jx,a7 as Qx,as as $l,at as uo,au as fo,a$ as fO,ag as fP,aS as Vd,aT as Rd,z as Ux,bw as Ax,aY as cg,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bB as ga,ai as ya,am as pw,an as $0,aX as _x,ap as hw,aq as G0,b1 as lb,c2 as Ap,aP as Da,bC as Vp,aQ as dt,aU as IR,ao as QA,ar as JA,i as K,c3 as zo,a3 as D3,az as Qy,aA as Jy,aB as $x,ax as gx}from'./main-6SPFG3VI.js';var Le=["target"],Ve=()=>({label:"PO Popup"}),qe=l=>[l],Ce=(()=>{class l{cdr=f(Ue$1);targetRef;ngAfterViewInit(){this.cdr.detectChanges();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic"]],viewQuery:function(a,o){if(a&1&&$l(Le,5,K),a&2){let r;uo(r=fo())&&(o.targetRef=r.first);}},standalone:false,decls:4,vars:5,consts:[["target",""],["popup",""],["p-icon","an an-question",1,"po-clickable",3,"click"],[3,"p-actions","p-target"]],template:function(a,o){if(a&1){let r=lx();wl(0,"po-icon",2,0),ut("click",function(){Qy(r);let i=_x(3);return Jy(i.toggle())}),ng(),Ul(2,"po-popup",3,1);}a&2&&(Pp(2),YE("p-actions",Jx(3,qe,Qx(2,Ve)))("p-target",o.targetRef));},dependencies:[J,Ci],encapsulation:2,changeDetection:1})}return l})();var Oe=l=>({"docs-sample-code-tabs":l}),ye=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Popup - Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-popup-basic/sample-po-popup-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-popup-basic/sample-po-popup-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-popup-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Oe,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ce],encapsulation:2})}return l})();var ze=["target"],we=(()=>{class l{poNotification=f(Bp);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(s){let a=r$1({},s);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!s.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,s.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0;}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions="",this.properties=[],this.size="medium",this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}getActionNode(s,a){if(!(!s||!Array.isArray(s)||!a))for(let o of s){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(s,a=0,o=[]){return !s||!Array.isArray(s)||s.forEach(r=>{let{label:c}=r;o.push({label:`${"-".repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o);}),o}showAction(s){this.poNotification.success(`Action clicked: ${s}`);}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs"]],viewQuery:function(a,o){if(a&1&&$l(ze,7,K),a&2){let r;uo(r=fo())&&(o.targetRef=r.first);}},standalone:false,decls:28,vars:25,consts:[["popup",""],["target",""],["formAction","ngForm"],["f","ngForm"],[3,"p-actions","p-custom-positions","p-hide-arrow","p-position","p-size","p-target"],[1,"po-row","sample-button-container"],[1,"po-offset-xl-5","po-offset-lg-5","po-md-2","po-lg-2"],["p-label","Popup",3,"p-click"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","customPositions","p-help",'["top", "left", "right-bottom"]',"p-label","Custom positions",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","position","p-label","Position",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let r=lx();Ul(0,"po-popup",4,0),wl(2,"div",5)(3,"div",6)(4,"po-button",7,1),ut("p-click",function(){Qy(r);let i=_x(1);return Jy(i.toggle())}),ng()()(),Ul(6,"po-divider"),wl(7,"form",null,2)(9,"po-input",8),pw("ngModelChange",function(i){return Qy(r),$x(o.action.label,i)||(o.action.label=i),Jy(i)}),ng(),$0(),wl(10,"po-input",9),pw("ngModelChange",function(i){return Qy(r),$x(o.action.action,i)||(o.action.action=i),Jy(i)}),ng(),$0(),wl(11,"po-input",10),pw("ngModelChange",function(i){return Qy(r),$x(o.action.url,i)||(o.action.url=i),Jy(i)}),ng(),$0(),wl(12,"po-select",11),pw("ngModelChange",function(i){return Qy(r),$x(o.action.type,i)||(o.action.type=i),Jy(i)}),ng(),$0(),wl(13,"po-select",12),pw("ngModelChange",function(i){return Qy(r),$x(o.action.icon,i)||(o.action.icon=i),Jy(i)}),ng(),$0(),wl(14,"po-select",13),pw("ngModelChange",function(i){return Qy(r),$x(o.action.parent,i)||(o.action.parent=i),Jy(i)}),ng(),$0(),wl(15,"po-checkbox-group",14),pw("ngModelChange",function(i){return Qy(r),$x(o.action,i)||(o.action=i),Jy(i)}),ng(),$0(),wl(16,"div",15)(17,"po-button",16),ut("p-click",function(){return o.addAction(o.action)}),ng()()(),Ul(18,"po-divider"),wl(19,"form",null,3)(21,"div",15)(22,"po-input",17),pw("ngModelChange",function(i){return Qy(r),$x(o.positions,i)||(o.positions=i),Jy(i)}),ut("p-change",function(){return o.convertToArray()}),ng(),$0(),wl(23,"po-select",18),pw("ngModelChange",function(i){return Qy(r),$x(o.position,i)||(o.position=i),Jy(i)}),ng(),$0(),wl(24,"po-checkbox-group",19),pw("ngModelChange",function(i){return Qy(r),$x(o.properties,i)||(o.properties=i),Jy(i)}),ng(),$0(),wl(25,"po-radio-group",20),pw("ngModelChange",function(i){return Qy(r),$x(o.size,i)||(o.size=i),Jy(i)}),ng(),$0(),ng(),wl(26,"div",15)(27,"po-button",21),ut("p-click",function(){Qy(r);let i=_x(8);return _x(20).reset(),i.reset(),Jy(o.restore())}),ng()()();}if(a&2){let r=_x(8);YE("p-actions",o.actions)("p-custom-positions",o.customPositions)("p-hide-arrow",o.properties.includes("hideArrow"))("p-position",o.position)("p-size",o.size)("p-target",o.targetRef),Pp(9),hw("ngModel",o.action.label),G0(),Pp(),hw("ngModel",o.action.action),G0(),Pp(),hw("ngModel",o.action.url),G0(),Pp(),hw("ngModel",o.action.type),YE("p-options",o.typeOptions),G0(),Pp(),hw("ngModel",o.action.icon),YE("p-options",o.iconOptions),G0(),Pp(),hw("ngModel",o.action.parent),YE("p-options",o.parentList),G0(),Pp(),hw("ngModel",o.action),YE("p-options",o.actionOptions),G0(),Pp(2),YE("p-disabled",r.form.invalid),Pp(5),hw("ngModel",o.positions),G0(),Pp(),hw("ngModel",o.position),YE("p-options",o.positionOptions),G0(),Pp(),hw("ngModel",o.properties),YE("p-options",o.propertiesOptions),G0(),Pp(),hw("ngModel",o.size),YE("p-options",o.sizeOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ga,ya,Ci],styles:[".sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}"],changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),_e=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Popup - Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-popup-labs/sample-po-popup-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-popup
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-popup-labs/sample-po-popup-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-popup-labs/sample-po-popup-labs.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-popup-labs"),ng(),Ul(29,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,He,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,we],encapsulation:2})}return l})();var Ue=["formEmail"],Ge=["target"];function Je(l,et){if(l&1&&(wl(0,"div")(1,"div",6),Ul(2,"po-info",20),ng(),Ul(3,"po-divider"),ng()),l&2){let s=gx();Pp(2),YE("p-value",s.cc);}}var Ae=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:"an an-plus",label:"Upper Text",type:"default",action:this.upper.bind(this)},{icon:"an an-minus",label:"Lower Text",type:"default",action:this.lower.bind(this)},{icon:"an an-x",label:"Clear",type:"danger",action:this.clear.bind(this),separator:true}],this.primaryAction={label:"Confirmar",action:()=>{this.poModal.close(),this.reset();}};}send(){this.poModal.open();}reset(){this.formEmail.reset();}clear(){this.emailText=void 0;}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase();}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email"]],viewQuery:function(a,o){if(a&1&&$l(Ue,7)(Ge,7,K)(zo,7),a&2){let r;uo(r=fo())&&(o.formEmail=r.first),uo(r=fo())&&(o.targetRef=r.first),uo(r=fo())&&(o.poModal=r.first);}},standalone:false,decls:31,vars:14,consts:[["popup",""],["formEmail","ngForm"],["target",""],["p-position","right",3,"p-actions","p-target"],["p-popup-header-template",""],[1,"sample-popup-header-template"],[1,"po-row"],["p-title","Send email",1,"po-sm-12"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","message","p-help","Click show settings popup","p-label","Message","p-required","",1,"po-lg-10",3,"ngModelChange","click","ngModel"],["src","./assets/graphics/po.png",1,"po-lg-2","sample-logo-po"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"],["p-label","Reset",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Email successfully sent",3,"p-primary-action"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6","ngDefaultControl","",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(a,o){if(a&1){let r=lx();wl(0,"po-popup",3,0)(2,"div",4)(3,"div",5),Ux(4,"Settings"),ng()()(),wl(5,"div",6)(6,"po-widget",7)(7,"form",null,1)(9,"div",6)(10,"po-email",8),pw("ngModelChange",function(i){return Qy(r),$x(o.to,i)||(o.to=i),Jy(i)}),ng(),$0(),wl(11,"po-email",9),pw("ngModelChange",function(i){return Qy(r),$x(o.cc,i)||(o.cc=i),Jy(i)}),ng(),$0(),wl(12,"po-input",10),pw("ngModelChange",function(i){return Qy(r),$x(o.subject,i)||(o.subject=i),Jy(i)}),ng(),$0(),ng(),wl(13,"div",6)(14,"po-textarea",11,2),pw("ngModelChange",function(i){return Qy(r),$x(o.emailText,i)||(o.emailText=i),Jy(i)}),ut("click",function(){Qy(r);let i=_x(1);return Jy(i.toggle())}),ng(),$0(),Ul(16,"img",12),ng(),wl(17,"div",6)(18,"po-button",13),ut("p-click",function(){return o.send()}),ng(),wl(19,"po-button",14),ut("p-click",function(){return o.reset()}),ng()()()()(),wl(20,"po-modal",15)(21,"div",6),Ul(22,"po-info",16)(23,"po-info",17),ng(),Ul(24,"po-divider"),QA(25,Je,4,1,"div"),wl(26,"div",6),Ul(27,"po-info",18),ng(),Ul(28,"po-divider"),wl(29,"div",6)(30,"po-textarea",19),pw("ngModelChange",function(i){return Qy(r),$x(o.emailText,i)||(o.emailText=i),Jy(i)}),ng(),$0(),ng()();}if(a&2){let r=_x(8);YE("p-actions",o.popupActions)("p-target",o.targetRef),Pp(10),hw("ngModel",o.to),G0(),Pp(),hw("ngModel",o.cc),G0(),Pp(),hw("ngModel",o.subject),G0(),Pp(2),hw("ngModel",o.emailText),G0(),Pp(4),YE("p-disabled",r.form.invalid),Pp(),YE("p-disabled",r.form.invalid),Pp(),YE("p-primary-action",o.primaryAction),Pp(2),YE("p-value",o.from),Pp(),YE("p-value",o.to),Pp(2),JA(o.cc!==""?25:-1),Pp(2),YE("p-value",o.subject),Pp(3),hw("ngModel",o.emailText),G0();}},dependencies:[aY,lb,iY,oY,ck,ok,Pe,di,Ap,Yo,Da,Vp,dt,Ci,IR],styles:[".sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}"],changeDetection:1})}return l})();var Xe=l=>({"docs-sample-code-tabs":l}),Me=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Popup Email"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-popup-email/sample-po-popup-email.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-popup-email/sample-po-popup-email.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-popup-email/sample-po-popup-email.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-logo-po {
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
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-popup-email"),ng(),Ul(29,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Xe,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ae],encapsulation:2})}return l})();var Te=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-doc"]],standalone:false,decls:890,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPopupAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPopupModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-popup."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoPopupComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-popup"),ng(),Ux(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),ng(),wl(18,"p"),Ux(19,"Suporta subn\xEDveis (submenus) quando as a\xE7\xF5es possuem a propriedade "),wl(20,"code"),Ux(21,"subItems"),ng(),Ux(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),ng(),wl(23,"p"),Ux(24,"\xC9 poss\xEDvel escolher as posi\xE7\xF5es do "),wl(25,"code"),Ux(26,"po-popup"),ng(),Ux(27," em rela\xE7\xE3o ao componente alvo, para isto veja a propriedade "),wl(28,"code"),Ux(29,"p-position"),ng(),Ux(30,"."),ng(),wl(31,"p"),Ux(32,"Tamb\xE9m \xE9 poss\xEDvel informar um "),wl(33,"em"),Ux(34,"template"),ng(),wl(35,"em"),Ux(36,"header"),ng(),Ux(37," para o "),wl(38,"code"),Ux(39,"po-popup"),ng(),Ux(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),wl(41,"code"),Ux(42,"p-popup-header-template"),ng(),Ux(43," no elemento que servir\xE1 de template, por exemplo:"),ng(),wl(44,"pre")(45,"code"),Ux(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),ng()(),wl(47,"h4"),Ux(48,"Tokens customiz\xE1veis"),ng(),wl(49,"p"),Ux(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(51,"blockquote")(52,"p"),Ux(53,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(54,"a",6),Ux(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(56,"."),ng()(),wl(57,"table")(58,"thead")(59,"tr")(60,"th"),Ux(61,"Propriedade"),ng(),wl(62,"th"),Ux(63,"Descri\xE7\xE3o"),ng(),wl(64,"th"),Ux(65,"Valor Padr\xE3o"),ng()()(),wl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),Ux(70,"Default Values"),ng()(),Ul(71,"td")(72,"td"),ng(),wl(73,"tr")(74,"td")(75,"code"),Ux(76,"--border-radius"),ng()(),wl(77,"td"),Ux(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(79,"td")(80,"code"),Ux(81,"var(--border-radius-md)"),ng()()(),wl(82,"tr")(83,"td")(84,"code"),Ux(85,"--border-width"),ng()(),wl(86,"td"),Ux(87,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),ng(),wl(88,"td")(89,"code"),Ux(90,"var(--border-width-sm)"),ng()()(),wl(91,"tr")(92,"td")(93,"code"),Ux(94,"--border-color"),ng()(),wl(95,"td"),Ux(96,"Cor da borda"),ng(),wl(97,"td")(98,"code"),Ux(99,"var(--color-neutral-light-20)"),ng()()(),wl(100,"tr")(101,"td")(102,"code"),Ux(103,"--background"),ng()(),wl(104,"td"),Ux(105,"Cor do background"),ng(),wl(106,"td")(107,"code"),Ux(108,"var(--color-neutral-light-00)"),ng()()(),wl(109,"tr")(110,"td")(111,"code"),Ux(112,"--shadow"),ng()(),wl(113,"td"),Ux(114,"Cont\xE9m o valor da sombra do elemento"),ng(),wl(115,"td")(116,"code"),Ux(117,"var(--shadow-md)"),ng()()(),wl(118,"tr")(119,"td")(120,"strong"),Ux(121,"po-popup po-item-list"),ng()(),Ul(122,"td")(123,"td"),ng(),wl(124,"tr")(125,"td")(126,"code"),Ux(127,"--font-family"),ng()(),wl(128,"td"),Ux(129,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(130,"td")(131,"code"),Ux(132,"var(--font-family-theme)"),ng()()(),wl(133,"tr")(134,"td")(135,"code"),Ux(136,"--font-size"),ng()(),wl(137,"td"),Ux(138,"Tamanho da fonte"),ng(),wl(139,"td")(140,"code"),Ux(141,"var(--font-size-default)"),ng()()(),wl(142,"tr")(143,"td")(144,"code"),Ux(145,"--line-height"),ng()(),wl(146,"td"),Ux(147,"Tamanho da label"),ng(),wl(148,"td")(149,"code"),Ux(150,"var(--line-height-md)"),ng()()(),wl(151,"tr")(152,"td")(153,"strong"),Ux(154,"Action"),ng()(),Ul(155,"td")(156,"td"),ng(),wl(157,"tr")(158,"td")(159,"code"),Ux(160,"--font-weight"),ng()(),wl(161,"td"),Ux(162,"Peso da fonte"),ng(),wl(163,"td")(164,"code"),Ux(165,"var(--font-weight-bold)"),ng()()(),wl(166,"tr")(167,"td")(168,"code"),Ux(169,"--color"),ng()(),wl(170,"td"),Ux(171,"Cor principal do popup"),ng(),wl(172,"td")(173,"code"),Ux(174,"var(--color-action-default)"),ng()()(),wl(175,"tr")(176,"td")(177,"strong"),Ux(178,"Hover"),ng()(),Ul(179,"td")(180,"td"),ng(),wl(181,"tr")(182,"td")(183,"code"),Ux(184,"--color-hover"),ng()(),wl(185,"td"),Ux(186,"Cor principal no estado hover"),ng(),wl(187,"td")(188,"code"),Ux(189,"var(--color-brand-01-darkest)"),ng()()(),wl(190,"tr")(191,"td")(192,"code"),Ux(193,"--background-hover"),ng()(),wl(194,"td"),Ux(195,"Cor de background no estado hover"),ng(),wl(196,"td")(197,"code"),Ux(198,"var(--color-brand-01-lighter)"),ng()()(),wl(199,"tr")(200,"td")(201,"strong"),Ux(202,"Focused"),ng()(),Ul(203,"td")(204,"td"),ng(),wl(205,"tr")(206,"td")(207,"code"),Ux(208,"--outline-color-focused"),ng()(),wl(209,"td"),Ux(210,"Cor do outline do estado de focus"),ng(),wl(211,"td")(212,"code"),Ux(213,"var(--color-action-focus)"),ng()()(),wl(214,"tr")(215,"td")(216,"strong"),Ux(217,"Pressed"),ng()(),Ul(218,"td")(219,"td"),ng(),wl(220,"tr")(221,"td")(222,"code"),Ux(223,"--background-pressed"),ng()(),wl(224,"td"),Ux(225,"Cor de background no estado de pressionado\xA0"),ng(),wl(226,"td")(227,"code"),Ux(228,"var(--color-brand-01-light)"),ng()()(),wl(229,"tr")(230,"td")(231,"strong"),Ux(232,"Disabled"),ng()(),Ul(233,"td")(234,"td"),ng(),wl(235,"tr")(236,"td")(237,"code"),Ux(238,"--color-disabled"),ng()(),wl(239,"td"),Ux(240,"Cor principal no estado disabled"),ng(),wl(241,"td")(242,"code"),Ux(243,"var(--color-action-disabled)"),ng()()(),wl(244,"tr")(245,"td")(246,"strong"),Ux(247,"Selected"),ng()(),Ul(248,"td")(249,"td"),ng(),wl(250,"tr")(251,"td")(252,"code"),Ux(253,"--font-weight-selected"),ng()(),wl(254,"td"),Ux(255,"Peso da fonte no estado selecionado"),ng(),wl(256,"td")(257,"code"),Ux(258,"var(--font-weight-bold)"),ng()()(),wl(259,"tr")(260,"td")(261,"code"),Ux(262,"--background-selected"),ng()(),wl(263,"td"),Ux(264,"Cor de background no estado selecionado"),ng(),wl(265,"td")(266,"code"),Ux(267,"var(--color-brand-01-lightest)"),ng()()(),wl(268,"tr")(269,"td")(270,"strong"),Ux(271,"Option e check"),ng()(),Ul(272,"td")(273,"td"),ng(),wl(274,"tr")(275,"td")(276,"code"),Ux(277,"--color-option"),ng()(),wl(278,"td"),Ux(279,"Cor principa no estado Option/check"),ng(),wl(280,"td")(281,"code"),Ux(282,"var(--color-neutral-dark-90)"),ng()()()()()(),wl(283,"div",7)(284,"h4",8),Ux(285,"Seletor"),ng(),wl(286,"pre",9),Ux(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),ng()(),wl(288,"h4",10),Ux(289,"Propriedades"),ng(),wl(290,"table",11)(291,"tr",12)(292,"th",13),Ux(293,"Nome"),ng(),wl(294,"th",13),Ux(295,"Tipo"),ng(),wl(296,"th",13),Ux(297,"Padr\xE3o"),ng(),wl(298,"th",13),Ux(299,"Descri\xE7\xE3o"),ng()(),wl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),Ux(304," p-actions"),Ul(305,"br"),ng()()(),wl(306,"td",18)(307,"code",19),Ux(308,"PoPopupAction[]"),ng()(),wl(309,"td",20),Ux(310,"-"),ng(),wl(311,"td",21)(312,"p"),Ux(313,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),ng()()(),wl(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),Ux(318," p-custom-positions"),Ul(319,"br"),ng()()(),wl(320,"td",18)(321,"code",22),Ux(322,"string[]"),ng()(),wl(323,"td",20),Ux(324,"-"),ng(),wl(325,"td",21)(326,"em")(327,"strong"),Ux(328,"(opcional)"),ng()(),wl(329,"p"),Ux(330,"Define as posi\xE7\xF5es e a sequ\xEAncia que o "),wl(331,"code"),Ux(332,"po-popup"),ng(),Ux(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),wl(334,"em"),Ux(335,"array"),ng(),Ux(336,". Caso n\xE3o seja definido, o "),wl(337,"code"),Ux(338,"po-popup"),ng(),Ux(339," ir\xE1 rotacionar em todas as posi\xE7\xF5es v\xE1lidas."),ng(),wl(340,"blockquote")(341,"p"),Ux(342,"O componente sempre ir\xE1 abrir na posi\xE7\xE3o definida no "),wl(343,"code"),Ux(344,"p-position"),ng(),Ux(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),wl(346,"code"),Ux(347,"p-custom-position"),ng(),Ux(348,"."),ng()(),wl(349,"p"),Ux(350,"Posi\xE7\xF5es v\xE1lidas:"),ng(),wl(351,"ul")(352,"li")(353,"code"),Ux(354,"right"),ng(),Ux(355,": Posiciona o po-popup no lado direito do componente alvo."),ng(),wl(356,"li")(357,"code"),Ux(358,"right-bottom"),ng(),Ux(359,": Posiciona o po-popup no lado direito inferior do componente alvo."),ng(),wl(360,"li")(361,"code"),Ux(362,"right-top"),ng(),Ux(363,": Posiciona o po-popup no lado direito superior do componente alvo."),ng(),wl(364,"li")(365,"code"),Ux(366,"bottom"),ng(),Ux(367,": Posiciona o po-popup abaixo do componente alvo."),ng(),wl(368,"li")(369,"code"),Ux(370,"bottom-left"),ng(),Ux(371,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),ng(),wl(372,"li")(373,"code"),Ux(374,"bottom-right"),ng(),Ux(375,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),ng(),wl(376,"li")(377,"code"),Ux(378,"left"),ng(),Ux(379,": Posiciona o po-popup no lado esquerdo do componente alvo."),ng(),wl(380,"li")(381,"code"),Ux(382,"left-top"),ng(),Ux(383,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),ng(),wl(384,"li")(385,"code"),Ux(386,"left-bottom"),ng(),Ux(387,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),ng(),wl(388,"li")(389,"code"),Ux(390,"top"),ng(),Ux(391,": Posiciona o po-popup acima do componente alvo."),ng(),wl(392,"li")(393,"code"),Ux(394,"top-right"),ng(),Ux(395,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),ng(),wl(396,"li")(397,"code"),Ux(398,"top-left"),ng(),Ux(399,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),ng()()()(),wl(400,"tr",14)(401,"td",15)(402,"div",16)(403,"span",17),Ux(404," p-hide-arrow"),Ul(405,"br"),ng()()(),wl(406,"td",18)(407,"code",23),Ux(408,"boolean"),ng()(),wl(409,"td",20)(410,"p")(411,"code"),Ux(412,"false"),ng()()(),wl(413,"td",21)(414,"em")(415,"strong"),Ux(416,"(opcional)"),ng()(),wl(417,"p"),Ux(418,"Oculta a seta do componente "),wl(419,"em"),Ux(420,"popup"),ng(),Ux(421,"."),ng()()(),wl(422,"tr",14)(423,"td",15)(424,"div",16)(425,"span",17),Ux(426," p-position"),Ul(427,"br"),ng()()(),wl(428,"td",18)(429,"code",24),Ux(430,"string"),ng()(),wl(431,"td",20)(432,"p")(433,"code"),Ux(434,"bottom-left"),ng()()(),wl(435,"td",21)(436,"em")(437,"strong"),Ux(438,"(opcional)"),ng()(),wl(439,"p"),Ux(440,"Define a posi\xE7\xE3o inicial que o "),wl(441,"code"),Ux(442,"po-popup"),ng(),Ux(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),wl(444,"code"),Ux(445,"bottom-left"),ng(),Ux(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),ng(),wl(447,"blockquote")(448,"p"),Ux(449,"Caso seja definido um "),wl(450,"code"),Ux(451,"p-custom-positions"),ng(),Ux(452," o componente ir\xE1 abrir na posi\xE7\xE3o definida na propriedade "),wl(453,"code"),Ux(454,"p-position"),ng(),Ux(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),wl(456,"code"),Ux(457,"p-custom-positions"),ng(),Ux(458,"."),ng()(),wl(459,"p"),Ux(460,"Posi\xE7\xF5es v\xE1lidas:"),ng(),wl(461,"ul")(462,"li")(463,"code"),Ux(464,"right"),ng(),Ux(465,": Posiciona o po-popup no lado direito do componente alvo."),ng(),wl(466,"li")(467,"code"),Ux(468,"right-bottom"),ng(),Ux(469,": Posiciona o po-popup no lado direito inferior do componente alvo."),ng(),wl(470,"li")(471,"code"),Ux(472,"right-top"),ng(),Ux(473,": Posiciona o po-popup no lado direito superior do componente alvo."),ng(),wl(474,"li")(475,"code"),Ux(476,"bottom"),ng(),Ux(477,": Posiciona o po-popup abaixo do componente alvo."),ng(),wl(478,"li")(479,"code"),Ux(480,"bottom-left"),ng(),Ux(481,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),ng(),wl(482,"li")(483,"code"),Ux(484,"bottom-right"),ng(),Ux(485,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),ng(),wl(486,"li")(487,"code"),Ux(488,"left"),ng(),Ux(489,": Posiciona o po-popup no lado esquerdo do componente alvo."),ng(),wl(490,"li")(491,"code"),Ux(492,"left-top"),ng(),Ux(493,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),ng(),wl(494,"li")(495,"code"),Ux(496,"left-bottom"),ng(),Ux(497,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),ng(),wl(498,"li")(499,"code"),Ux(500,"top"),ng(),Ux(501,": Posiciona o po-popup acima do componente alvo."),ng(),wl(502,"li")(503,"code"),Ux(504,"top-right"),ng(),Ux(505,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),ng(),wl(506,"li")(507,"code"),Ux(508,"top-left"),ng(),Ux(509,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),ng()()()(),wl(510,"tr",14)(511,"td",15)(512,"div",16)(513,"span",17),Ux(514," p-size"),Ul(515,"br"),ng()()(),wl(516,"td",18)(517,"code",24),Ux(518,"string"),ng()(),wl(519,"td",20)(520,"p")(521,"code"),Ux(522,"medium"),ng()()(),wl(523,"td",21)(524,"em")(525,"strong"),Ux(526,"(opcional)"),ng()(),wl(527,"p"),Ux(528,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(529,"ul")(530,"li")(531,"code"),Ux(532,"small"),ng(),Ux(533,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(534,"li")(535,"code"),Ux(536,"medium"),ng(),Ux(537,": aplica a medida medium de cada componente."),ng()(),wl(538,"blockquote")(539,"p"),Ux(540,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(541,"code"),Ux(542,"medium"),ng(),Ux(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(544,"a",25),Ux(545,"po-theme"),ng(),Ux(546,"."),ng()()()(),wl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),Ux(551," p-target"),Ul(552,"br"),ng()()(),wl(553,"td",18)(554,"code",26),Ux(555,"any"),ng()(),wl(556,"td",20),Ux(557,"-"),ng(),wl(558,"td",21)(559,"p"),Ux(560,"Para utilizar o "),wl(561,"code"),Ux(562,"po-popup"),ng(),Ux(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),wl(564,"code"),Ux(565,"toggle"),ng(),Ux(566,", por exemplo:"),ng(),wl(567,"pre")(568,"code"),Ux(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),ng()(),wl(570,"p"),Ux(571,"Caso o elemento alvo for um componente, ser\xE1 preciso obter o "),wl(572,"code"),Ux(573,"ElementRef"),ng(),Ux(574," do mesmo e pass\xE1-lo \xE0 propriedade, por exemplo:"),ng(),wl(575,"pre")(576,"code"),Ux(577,`// component.html

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
`),ng()()()()(),wl(578,"h3",10),Ux(579,"M\xE9todos"),ng(),wl(580,"table",27)(581,"tr",14)(582,"th",28)(583,"div",16)(584,"h4")(585,"span",17),Ux(586," close "),ng()()()()(),wl(587,"tr",21)(588,"td",21)(589,"p"),Ux(590,"Fecha o componente "),wl(591,"em"),Ux(592,"popup"),ng(),Ux(593,"."),ng(),wl(594,"blockquote")(595,"p"),Ux(596,"Por padr\xE3o, este comportamento \xE9 acionado somente ao clicar fora do componente ou em determinada a\xE7\xE3o / url."),ng()()()()(),Ul(597,"br"),wl(598,"table",27)(599,"tr",14)(600,"th",28)(601,"div",16)(602,"h4")(603,"span",17),Ux(604," open "),ng()()()()(),wl(605,"tr",21)(606,"td",21)(607,"p"),Ux(608,"Abre o componente "),wl(609,"em"),Ux(610,"popup"),ng(),Ux(611,"."),ng(),wl(612,"blockquote")(613,"p"),Ux(614,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),ng()()()()(),Ul(615,"br"),wl(616,"table",27)(617,"tr",14)(618,"th",28)(619,"div",16)(620,"h4")(621,"span",17),Ux(622," toggle "),ng()()()()(),wl(623,"tr",21)(624,"td",21)(625,"p"),Ux(626,"Respons\xE1vel por abrir e fechar o "),wl(627,"em"),Ux(628,"popup"),ng(),Ux(629,"."),ng(),wl(630,"p"),Ux(631,"Quando disparado abrir\xE1 o "),wl(632,"em"),Ux(633,"popup"),ng(),Ux(634," e caso o mesmo j\xE1 estiver aberto e possuir o mesmo "),wl(635,"code"),Ux(636,"target"),ng(),Ux(637," ir\xE1 fecha-lo."),ng(),wl(638,"p"),Ux(639,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),ng()()()(),Ul(640,"br"),wl(641,"h3"),Ux(642,"Interfaces"),ng(),wl(643,"h4",29)(644,"code",5),Ux(645,"PoPopupAction"),ng()(),wl(646,"div",2)(647,"p"),Ux(648,"Interface para lista de a\xE7\xF5es do componente."),ng()(),wl(649,"h4",10),Ux(650,"Propriedades"),ng(),wl(651,"table",11)(652,"tr",12)(653,"th",13),Ux(654,"Nome"),ng(),wl(655,"th",13),Ux(656,"Tipo"),ng(),wl(657,"th",13),Ux(658,"Descri\xE7\xE3o"),ng()(),wl(659,"tr",14)(660,"td",15)(661,"div",16)(662,"span",17),Ux(663," action"),Ul(664,"br"),ng()()(),wl(665,"td",18)(666,"code",30),Ux(667,"Function"),ng()(),wl(668,"td",21)(669,"em")(670,"strong"),Ux(671,"(opcional)"),ng()(),wl(672,"p"),Ux(673,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),ng(),wl(674,"p"),Ux(675,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(676,"code"),Ux(677,"subItems"),ng(),Ux(678,"."),ng(),wl(679,"blockquote")(680,"p"),Ux(681,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),wl(682,"em"),Ux(683,"bind"),ng(),Ux(684,`:
`),wl(685,"code"),Ux(686,"action: this.myFunction.bind(this)"),ng()()()()(),wl(687,"tr",14)(688,"td",15)(689,"div",16)(690,"span",17),Ux(691," disabled"),Ul(692,"br"),ng()()(),wl(693,"td",18)(694,"code",23),Ux(695,"boolean "),ng(),wl(696,"code",30),Ux(697," Function"),ng()(),wl(698,"td",21)(699,"em")(700,"strong"),Ux(701,"(opcional)"),ng()(),wl(702,"p"),Ux(703,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()(),wl(704,"tr",14)(705,"td",15)(706,"div",16)(707,"span",17),Ux(708," icon"),Ul(709,"br"),ng()()(),wl(710,"td",18)(711,"code",24),Ux(712,"string "),ng(),wl(713,"code",31),Ux(714," TemplateRef<void>"),ng()(),wl(715,"td",21)(716,"em")(717,"strong"),Ux(718,"(opcional)"),ng()(),wl(719,"p"),Ux(720,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(721,"p"),Ux(722,"Aceita \xEDcones da "),wl(723,"a",32),Ux(724,"Biblioteca de \xEDcones"),ng(),Ux(725,`, fontes externas (ex: Font Awesome)
ou um `),wl(726,"code"),Ux(727,"TemplateRef"),ng(),Ux(728," para \xEDcones customizados."),ng(),wl(729,"pre")(730,"code"),Ux(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ng()()()(),wl(732,"tr",14)(733,"td",15)(734,"div",16)(735,"span",17),Ux(736," label"),Ul(737,"br"),ng()()(),wl(738,"td",18)(739,"code",24),Ux(740,"string"),ng()(),wl(741,"td",21)(742,"p"),Ux(743,"R\xF3tulo da a\xE7\xE3o."),ng(),wl(744,"p"),Ux(745,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(746,"code"),Ux(747,"subItems"),ng(),Ux(748,"."),ng()()(),wl(749,"tr",14)(750,"td",15)(751,"div",16)(752,"span",17),Ux(753," selected"),Ul(754,"br"),ng()()(),wl(755,"td",18)(756,"code",23),Ux(757,"boolean"),ng()(),wl(758,"td",21)(759,"em")(760,"strong"),Ux(761,"(opcional)"),ng()(),wl(762,"p"),Ux(763,"Define se a a\xE7\xE3o est\xE1 selecionada."),ng()()(),wl(764,"tr",14)(765,"td",15)(766,"div",16)(767,"span",17),Ux(768," separator"),Ul(769,"br"),ng()()(),wl(770,"td",18)(771,"code",23),Ux(772,"boolean"),ng()(),wl(773,"td",21)(774,"em")(775,"strong"),Ux(776,"(opcional)"),ng()(),wl(777,"p"),Ux(778,"Atribui uma linha separadora acima do item."),ng()()(),wl(779,"tr",14)(780,"td",15)(781,"div",16)(782,"span",17),Ux(783," subItems"),Ul(784,"br"),ng()()(),wl(785,"td",18)(786,"code",33),Ux(787,"Array<PoPopupAction>"),ng()(),wl(788,"td",21)(789,"em")(790,"strong"),Ux(791,"(opcional)"),ng()(),wl(792,"p"),Ux(793,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),ng(),wl(794,"p"),Ux(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ng(),wl(796,"blockquote")(797,"p"),Ux(798,"As propriedades "),wl(799,"code"),Ux(800,"disabled"),ng(),Ux(801,", "),wl(802,"code"),Ux(803,"type"),ng(),Ux(804," e "),wl(805,"code"),Ux(806,"visible"),ng(),Ux(807," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),ng()(),wl(808,"blockquote")(809,"p"),Ux(810,"Quando "),wl(811,"code"),Ux(812,"url"),ng(),Ux(813," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),ng()(),wl(814,"blockquote")(815,"p"),Ux(816,"Em subn\xEDveis aninhados, o "),wl(817,"code"),Ux(818,"icon"),ng(),Ux(819," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),ng()()()(),wl(820,"tr",14)(821,"td",15)(822,"div",16)(823,"span",17),Ux(824," type"),Ul(825,"br"),ng()()(),wl(826,"td",18)(827,"code",24),Ux(828,"string"),ng()(),wl(829,"td",21)(830,"em")(831,"strong"),Ux(832,"(opcional)"),ng()(),wl(833,"p"),Ux(834,"Define a cor do item."),ng(),wl(835,"p"),Ux(836,"Valores v\xE1lidos:"),ng(),wl(837,"ul")(838,"li")(839,"code"),Ux(840,"default"),ng()(),wl(841,"li")(842,"code"),Ux(843,"danger"),ng()()()()(),wl(844,"tr",14)(845,"td",15)(846,"div",16)(847,"span",17),Ux(848," url"),Ul(849,"br"),ng()()(),wl(850,"td",18)(851,"code",24),Ux(852,"string"),ng()(),wl(853,"td",21)(854,"em")(855,"strong"),Ux(856,"(opcional)"),ng()(),wl(857,"p"),Ux(858,"URL para redirecionamento. Aceita rotas internas e links externos."),ng(),wl(859,"p"),Ux(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),wl(861,"code"),Ux(862,"url"),ng(),Ux(863," \xE9 informada em um agrupador, o clique "),wl(864,"strong"),Ux(865,"n\xE3o abrir\xE1 os subitens"),ng(),Ux(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ng(),wl(867,"blockquote")(868,"p"),Ux(869,"Quando informada, tem prioridade sobre a propriedade "),wl(870,"code"),Ux(871,"action"),ng(),Ux(872,"."),ng()()()(),wl(873,"tr",14)(874,"td",15)(875,"div",16)(876,"span",17),Ux(877," visible"),Ul(878,"br"),ng()()(),wl(879,"td",18)(880,"code",23),Ux(881,"boolean "),ng(),wl(882,"code",30),Ux(883," Function"),ng()(),wl(884,"td",21)(885,"em")(886,"strong"),Ux(887,"(opcional)"),ng()(),wl(888,"p"),Ux(889,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()()()());},dependencies:[fP],encapsulation:2})}return l})();var ke=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(C(Xn),C(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-popup-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-popup-basic-view")(6,"sample-po-popup-labs-view")(7,"sample-po-popup-email-view"),ng()()()),a&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,ye,_e,Me,Te],encapsulation:2})}return l})();var $e=[{path:"",component:ke}],De=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[vL.forChild($e),vL]})}return l})();var Xt=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[u5,De]})}return l})();export{Xt as DocPoPopupModule};