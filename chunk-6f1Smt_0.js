import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,c as r$1,bA as hS,M as Wl,T as tw,bs as dN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aJ as Ghe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,cn as s3,ba as bNe,aq as ux,at as dx,a3 as pNe,aD as Xy,aT as tN,aE as Qy,aA as Tx}from'./main-QNYCBKHQ.js';var xe=()=>({label:"How to install PO",url:"/guides/how-install"}),ve=i=>[i],se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic"]],standalone:false,decls:1,vars:4,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Wl(0,"po-dropdown",0),a&2&&tw("p-actions",dN(2,ve,uN(1,xe)));},dependencies:[hS],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dropdown Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,De,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return i})();var ce=(()=>{class i{actions=[{label:"New Sale",action:()=>console.log("New Sale")},{label:"New Cancellation",action:()=>console.log("New Cancellation"),type:"danger"},{label:"Reports",subItems:[{label:"Monthly Sales",action:()=>console.log("Monthly Sales"),icon:"an an-chart-line-up"},{label:"Annual Sales",action:()=>console.log("Annual Sales"),icon:"an an-chart-line-up"}]},{label:"Settings",subItems:[{label:"Users",action:()=>console.log("Users")},{label:"System",subItems:[{label:"Backup",action:()=>console.log("Backup")},{label:"Logs",action:()=>console.log("Logs")}]}]}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems"]],standalone:false,decls:1,vars:1,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Wl(0,"po-dropdown",0),a&2&&tw("p-actions",o.actions);},dependencies:[hS],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dropdown Subitems"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoDropdownAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-subitems',
  templateUrl: './sample-po-dropdown-subitems.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownSubitemsComponent {
  actions: Array<PoDropdownAction> = [
    { label: 'New Sale', action: () => console.log('New Sale') },
    { label: 'New Cancellation', action: () => console.log('New Cancellation'), type: 'danger' },
    {
      label: 'Reports',
      subItems: [
        { label: 'Monthly Sales', action: () => console.log('Monthly Sales'), icon: 'an an-chart-line-up' },
        { label: 'Annual Sales', action: () => console.log('Annual Sales'), icon: 'an an-chart-line-up' }
      ]
    },
    {
      label: 'Settings',
      subItems: [
        { label: 'Users', action: () => console.log('Users') },
        {
          label: 'System',
          subItems: [
            { label: 'Backup', action: () => console.log('Backup') },
            { label: 'Logs', action: () => console.log('Logs') }
          ]
        }
      ]
    }
  ];
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-subitems"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,_e,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ce],encapsulation:2})}return i})();var be=(()=>{class i{poNotification=f(Yp);action;actions;parentList;label;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertiesOptions=[{value:"disabled",label:"Disabled"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(r){let a=r$1({},r);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!r.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,r.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}getActionNode(r,a){if(!(!r||!Array.isArray(r)||!a))for(let o of r){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(r,a=0,o=[]){return !r||!Array.isArray(r)||r.forEach(m=>{let{label:u}=m;o.push({label:`${"-".repeat(a)} ${u}`,value:u}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o);}),o}restore(){this.actions=[],this.parentList=[],this.label="PO Dropdown",this.size="medium",this.properties=[],this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}showAction(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs"]],standalone:false,decls:23,vars:21,consts:[["formAction","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-offset-xl-5","po-offset-lg-5",3,"p-actions","p-disabled","p-label","p-size"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let m=Ex();Sl(0,"div",2),Wl(1,"po-dropdown",3),sg(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"po-input",4),Ew("ngModelChange",function(p){return Xy(m),tN(o.action.label,p)||(o.action.label=p),Qy(p)}),sg(),JA(),Sl(6,"po-input",5),Ew("ngModelChange",function(p){return Xy(m),tN(o.action.action,p)||(o.action.action=p),Qy(p)}),sg(),JA(),Sl(7,"po-input",6),Ew("ngModelChange",function(p){return Xy(m),tN(o.action.url,p)||(o.action.url=p),Qy(p)}),sg(),JA(),Sl(8,"po-select",7),Ew("ngModelChange",function(p){return Xy(m),tN(o.action.type,p)||(o.action.type=p),Qy(p)}),sg(),JA(),Sl(9,"po-select",8),Ew("ngModelChange",function(p){return Xy(m),tN(o.action.icon,p)||(o.action.icon=p),Qy(p)}),sg(),JA(),Sl(10,"po-select",9),Ew("ngModelChange",function(p){return Xy(m),tN(o.action.parent,p)||(o.action.parent=p),Qy(p)}),sg(),JA(),Sl(11,"po-checkbox-group",10),Ew("ngModelChange",function(p){return Xy(m),tN(o.action,p)||(o.action=p),Qy(p)}),sg(),JA(),Sl(12,"div",2)(13,"po-button",11),ht("p-click",function(){return o.addAction(o.action)}),sg()()(),Wl(14,"po-divider"),Sl(15,"form",null,1)(17,"div",2)(18,"po-input",12),Ew("ngModelChange",function(p){return Xy(m),tN(o.label,p)||(o.label=p),Qy(p)}),sg(),JA(),sg(),Sl(19,"po-checkbox-group",13),Ew("ngModelChange",function(p){return Xy(m),tN(o.properties,p)||(o.properties=p),Qy(p)}),sg(),JA(),Sl(20,"po-radio-group",14),Ew("ngModelChange",function(p){return Xy(m),tN(o.size,p)||(o.size=p),Qy(p)}),sg(),JA(),Sl(21,"div",2)(22,"po-button",15),ht("p-click",function(){return o.restore()}),sg()()();}if(a&2){let m=xx(4);Vp(),tw("p-actions",o.actions)("p-disabled",o.properties.includes("disabled"))("p-label",o.label)("p-size",o.size),Vp(4),Dw("ngModel",o.action.label),t0(),Vp(),Dw("ngModel",o.action.action),t0(),Vp(),Dw("ngModel",o.action.url),t0(),Vp(),Dw("ngModel",o.action.type),tw("p-options",o.typeOptions),t0(),Vp(),Dw("ngModel",o.action.icon),tw("p-options",o.iconOptions),t0(),Vp(),Dw("ngModel",o.action.parent),tw("p-options",o.parentList),t0(),Vp(),Dw("ngModel",o.action),tw("p-options",o.actionOptions),t0(),Vp(2),tw("p-disabled",m.form.invalid),Vp(5),Dw("ngModel",o.label),t0(),Vp(),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),t0(),Vp(),Dw("ngModel",o.size),tw("p-options",o.sizeOptions),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,hS,x3,F3,Pde,Ghe],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dropdown Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-dropdown
    class="po-offset-xl-5 po-offset-lg-5"
    [p-actions]="actions"
    [p-disabled]="properties.includes('disabled')"
    [p-label]="label"
    [p-size]="size"
  >
  </po-dropdown>
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
      class="po-md-4 po-lg-2"
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
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>
  </div>
  <po-checkbox-group
    class="po-md-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoSelectOption,
  PoDropdownAction,
  PoRadioGroupOption,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-labs',
  templateUrl: './sample-po-dropdown-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoDropdownAction & { parent?: string };
  actions: Array<PoDropdownAction>;
  parentList: Array<PoSelectOption>;
  label: string;
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
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

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

  addAction(action: PoDropdownAction & { parent?: string }) {
    const newAction: PoDropdownAction = { ...action };
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

  private getActionNode(items: Array<PoDropdownAction>, value: string): PoDropdownAction | undefined {
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
    items: Array<PoDropdownAction>,
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

  restore() {
    this.actions = [];
    this.parentList = [];
    this.label = 'PO Dropdown';
    this.size = 'medium';
    this.properties = [];
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    } as any;
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return i})();function Le(i,Ce){if(i&1&&(Sl(0,"div",0),Wl(1,"po-avatar",2),Sl(2,"div",3)(3,"span",4),Jx(4),sg(),Sl(5,"span",5),Jx(6),sg(),Sl(7,"span",5),Jx(8),sg()()(),Sl(9,"div",0),Wl(10,"po-dropdown",6),sg()),i&2){let r=Tx();Vp(),tw("p-src",r.userAvatar),Vp(3),fg(" ",r.currentFriend.name," "),Vp(2),fg(" ",r.currentFriend.mutualFriends," mutual friends "),Vp(2),fg(" Resides in ",r.currentFriend.reside," "),Vp(2),tw("p-actions",r.answers);}}function Ne(i,Ce){i&1&&(Sl(0,"div",0)(1,"span",7),Jx(2,"Congratulations TOTVS, no more requests!"),sg()());}var Se=(()=>{class i{poNotification=f(Yp);currentFriend;userAvatar="https://lorempixel.com/144/144/";answers=[{label:"Confirm",action:this.notification.bind(this,"added","success")},{label:"Ignore",action:this.notification.bind(this,"ignored","warning")},{label:"Block",action:this.notification.bind(this,"blocked","information")}];newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-label","Add as friend?",1,"po-lg-8","po-offset-md-4","po-offset-lg-4","po-offset-xl-4",3,"p-actions"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"po-widget",1),ux(2,Le,11,5)(3,Ne,3,0,"div",0),sg()()),a&2&&(Vp(2),dx(o.currentFriend?2:3));},dependencies:[s3,hS,bNe],encapsulation:2,changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dropdown - Social Network"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
        </div>
      </div>
      <div class="po-row">
        <po-dropdown
          class="po-lg-8 po-offset-md-4 po-offset-lg-4 po-offset-xl-4"
          p-label="Add as friend?"
          [p-actions]="answers"
        >
        </po-dropdown>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations TOTVS, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-social-network',
  templateUrl: './sample-po-dropdown-social-network.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly answers: Array<object> = [
    { label: 'Confirm', action: this.notification.bind(this, 'added', 'success') },
    { label: 'Ignore', action: this.notification.bind(this, 'ignored', 'warning') },
    { label: 'Block', action: this.notification.bind(this, 'blocked', 'information') }
  ];

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  private notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-social-network"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ie,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return i})();var fe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-doc"]],standalone:false,decls:631,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/getting-started"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDropdownAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoDropdownModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-dropdown."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoDropdownComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-dropdown"),sg(),Jx(17," pode ser utilizado como um agrupador de a\xE7\xF5es e / ou op\xE7\xF5es."),sg(),Sl(18,"blockquote")(19,"p"),Jx(20,"Caso n\xE3o haja configura\xE7\xE3o de rotas em sua aplica\xE7\xE3o, se faz necess\xE1rio importar o "),Sl(21,"code"),Jx(22,"RouterModule"),sg(),Jx(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),sg()(),Sl(24,"pre")(25,"code"),Jx(26,`import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ...
    RouterModule.forRoot([]),
    PoModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
`),sg()(),Sl(27,"blockquote")(28,"p"),Jx(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),Sl(30,"a",6),Jx(31,"/Configurando as rotas do po-menu"),sg(),Jx(32,"."),sg()(),Sl(33,"h4"),Jx(34,"Tokens customiz\xE1veis"),sg(),Sl(35,"p"),Jx(36,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(37,"blockquote")(38,"p"),Jx(39,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(40,"a",7),Jx(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(42,"."),sg()(),Sl(43,"table")(44,"thead")(45,"tr")(46,"th"),Jx(47,"Propriedade"),sg(),Sl(48,"th"),Jx(49,"Descri\xE7\xE3o"),sg(),Sl(50,"th"),Jx(51,"Valor Padr\xE3o"),sg()()(),Sl(52,"tbody")(53,"tr")(54,"td")(55,"strong"),Jx(56,"Default Values"),sg()(),Wl(57,"td")(58,"td"),sg(),Sl(59,"tr")(60,"td")(61,"code"),Jx(62,"--font-family"),sg()(),Sl(63,"td"),Jx(64,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(65,"td")(66,"code"),Jx(67,"var(--font-family-theme)"),sg()()(),Sl(68,"tr")(69,"td")(70,"code"),Jx(71,"--font-size"),sg()(),Sl(72,"td"),Jx(73,"Tamanho da fonte"),sg(),Sl(74,"td")(75,"code"),Jx(76,"var(--font-size-default)"),sg()()(),Sl(77,"tr")(78,"td")(79,"code"),Jx(80,"--font-weight"),sg()(),Sl(81,"td"),Jx(82,"Peso da fonte"),sg(),Sl(83,"td")(84,"code"),Jx(85,"var(--font-weight-bold)"),sg()()(),Sl(86,"tr")(87,"td")(88,"code"),Jx(89,"--line-height"),sg()(),Sl(90,"td"),Jx(91,"Tamanho da label"),sg(),Sl(92,"td")(93,"code"),Jx(94,"var(--line-height-none)"),sg()()(),Sl(95,"tr")(96,"td")(97,"code"),Jx(98,"--color"),sg()(),Sl(99,"td"),Jx(100,"Cor principal do dropdown"),sg(),Sl(101,"td")(102,"code"),Jx(103,"var(--color-action-default)"),sg()()(),Sl(104,"tr")(105,"td")(106,"code"),Jx(107,"--border-radius"),sg()(),Sl(108,"td"),Jx(109,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(110,"td")(111,"code"),Jx(112,"var(--border-radius-md)"),sg()()(),Sl(113,"tr")(114,"td")(115,"code"),Jx(116,"--border-width"),sg()(),Sl(117,"td"),Jx(118,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Sl(119,"td")(120,"code"),Jx(121,"var(--border-width-md)"),sg()()(),Sl(122,"tr")(123,"td")(124,"code"),Jx(125,"--padding"),sg()(),Sl(126,"td"),Jx(127,"Preenchimento"),sg(),Sl(128,"td")(129,"code"),Jx(130,"0 1em"),sg()()(),Sl(131,"tr")(132,"td")(133,"strong"),Jx(134,"Hover"),sg()(),Wl(135,"td")(136,"td"),sg(),Sl(137,"tr")(138,"td")(139,"code"),Jx(140,"--color-hover"),sg()(),Sl(141,"td"),Jx(142,"Cor principal no estado hover"),sg(),Sl(143,"td")(144,"code"),Jx(145,"var(--color-brand-01-darkest)"),sg()()(),Sl(146,"tr")(147,"td")(148,"code"),Jx(149,"--background-hover"),sg()(),Sl(150,"td"),Jx(151,"Cor de background no estado hover"),sg(),Sl(152,"td")(153,"code"),Jx(154,"var(--color-brand-01-lighter)"),sg()()(),Sl(155,"tr")(156,"td")(157,"strong"),Jx(158,"Focused"),sg()(),Wl(159,"td")(160,"td"),sg(),Sl(161,"tr")(162,"td")(163,"code"),Jx(164,"--outline-color-focused"),sg(),Jx(165," \xA0"),sg(),Sl(166,"td"),Jx(167,"Cor do outline do estado de focus"),sg(),Sl(168,"td")(169,"code"),Jx(170,"var(--color-action-focus)"),sg()()(),Sl(171,"tr")(172,"td")(173,"strong"),Jx(174,"Pressed"),sg()(),Wl(175,"td")(176,"td"),sg(),Sl(177,"tr")(178,"td")(179,"code"),Jx(180,"--background-pressed"),sg(),Jx(181," \xA0"),sg(),Sl(182,"td"),Jx(183,"Cor de background no estado de pressionado\xA0"),sg(),Sl(184,"td")(185,"code"),Jx(186,"var(--color-brand-01-light)"),sg()()(),Sl(187,"tr")(188,"td")(189,"strong"),Jx(190,"Disabled"),sg()(),Wl(191,"td")(192,"td"),sg(),Sl(193,"tr")(194,"td")(195,"code"),Jx(196,"--color-disabled"),sg()(),Sl(197,"td"),Jx(198,"Cor principal no estado disabled"),sg(),Sl(199,"td")(200,"code"),Jx(201,"var(--color-action-disabled)"),sg()()()()()(),Sl(202,"div",8)(203,"h4",9),Jx(204,"Seletor"),sg(),Sl(205,"pre",10),Jx(206,`<po-dropdown
    p-actions="PoDropdownAction[]"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    p-size="string" >
</po-dropdown>
`),sg()(),Sl(207,"h4",11),Jx(208,"Propriedades"),sg(),Sl(209,"table",12)(210,"tr",13)(211,"th",14),Jx(212,"Nome"),sg(),Sl(213,"th",14),Jx(214,"Tipo"),sg(),Sl(215,"th",14),Jx(216,"Padr\xE3o"),sg(),Sl(217,"th",14),Jx(218,"Descri\xE7\xE3o"),sg()(),Sl(219,"tr",15)(220,"td",16)(221,"div",17)(222,"span",18),Jx(223," p-actions"),Wl(224,"br"),sg()()(),Sl(225,"td",19)(226,"code",20),Jx(227,"PoDropdownAction[]"),sg()(),Sl(228,"td",21),Jx(229,"-"),sg(),Sl(230,"td",22)(231,"p"),Jx(232,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),sg()()(),Sl(233,"tr",15)(234,"td",16)(235,"div",17)(236,"span",18),Jx(237," p-disabled"),Wl(238,"br"),sg()()(),Sl(239,"td",19)(240,"code",23),Jx(241,"boolean"),sg()(),Sl(242,"td",21)(243,"p")(244,"code"),Jx(245,"false"),sg()()(),Sl(246,"td",22)(247,"em")(248,"strong"),Jx(249,"(opcional)"),sg()(),Sl(250,"p"),Jx(251,"Desabilita o campo."),sg()()(),Sl(252,"tr",15)(253,"td",16)(254,"div",17)(255,"span",18),Jx(256," p-label"),Wl(257,"br"),sg()()(),Sl(258,"td",19)(259,"code",24),Jx(260,"string"),sg()(),Sl(261,"td",21),Jx(262,"-"),sg(),Sl(263,"td",22)(264,"p"),Jx(265,"Adiciona um r\xF3tulo ao "),Sl(266,"code"),Jx(267,"dropdown"),sg(),Jx(268,"."),sg()()(),Sl(269,"tr",15)(270,"td",16)(271,"div",17)(272,"span",18),Jx(273," p-position"),Wl(274,"br"),sg()()(),Sl(275,"td",19)(276,"code",24),Jx(277,"string"),sg()(),Sl(278,"td",21)(279,"p")(280,"code"),Jx(281,"bottom-left"),sg()()(),Sl(282,"td",22)(283,"em")(284,"strong"),Jx(285,"(opcional)"),sg()(),Sl(286,"p"),Jx(287,"Define a posi\xE7\xE3o preferencial de abertura do popup do dropdown em rela\xE7\xE3o ao bot\xE3o."),sg(),Sl(288,"p"),Jx(289,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Sl(290,"ul")(291,"li")(292,"code"),Jx(293,"right"),sg(),Jx(294,": No lado direito."),sg(),Sl(295,"li")(296,"code"),Jx(297,"right-bottom"),sg(),Jx(298,": No lado direito inferior."),sg(),Sl(299,"li")(300,"code"),Jx(301,"right-top"),sg(),Jx(302,": No lado direito superior."),sg(),Sl(303,"li")(304,"code"),Jx(305,"bottom"),sg(),Jx(306,": Abaixo."),sg(),Sl(307,"li")(308,"code"),Jx(309,"bottom-left"),sg(),Jx(310,": Abaixo e \xE0 esquerda (padr\xE3o)."),sg(),Sl(311,"li")(312,"code"),Jx(313,"bottom-right"),sg(),Jx(314,": Abaixo e \xE0 direita."),sg(),Sl(315,"li")(316,"code"),Jx(317,"left"),sg(),Jx(318,": No lado esquerdo."),sg(),Sl(319,"li")(320,"code"),Jx(321,"left-top"),sg(),Jx(322,": No lado esquerdo superior."),sg(),Sl(323,"li")(324,"code"),Jx(325,"left-bottom"),sg(),Jx(326,": No lado esquerdo inferior."),sg(),Sl(327,"li")(328,"code"),Jx(329,"top"),sg(),Jx(330,": Acima."),sg(),Sl(331,"li")(332,"code"),Jx(333,"top-right"),sg(),Jx(334,": Acima e \xE0 direita."),sg(),Sl(335,"li")(336,"code"),Jx(337,"top-left"),sg(),Jx(338,": Acima e \xE0 esquerda."),sg()(),Sl(339,"blockquote")(340,"p"),Jx(341,"O popup ser\xE1 rotacionado automaticamente caso n\xE3o caiba na posi\xE7\xE3o definida."),sg()()()(),Sl(342,"tr",15)(343,"td",16)(344,"div",17)(345,"span",18),Jx(346," p-size"),Wl(347,"br"),sg()()(),Sl(348,"td",19)(349,"code",24),Jx(350,"string"),sg()(),Sl(351,"td",21)(352,"p")(353,"code"),Jx(354,"medium"),sg()()(),Sl(355,"td",22)(356,"em")(357,"strong"),Jx(358,"(opcional)"),sg()(),Sl(359,"p"),Jx(360,"Define o tamanho do componente:"),sg(),Sl(361,"ul")(362,"li")(363,"code"),Jx(364,"small"),sg(),Jx(365,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(366,"li")(367,"code"),Jx(368,"medium"),sg(),Jx(369,": altura do button como 44px."),sg()(),Sl(370,"blockquote")(371,"p"),Jx(372,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(373,"code"),Jx(374,"medium"),sg(),Jx(375,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(376,"a",25),Jx(377,"po-theme"),sg(),Jx(378,"."),sg()()()()(),Sl(379,"h3"),Jx(380,"Interfaces"),sg(),Sl(381,"h4",26)(382,"code",5),Jx(383,"PoDropdownAction"),sg()(),Sl(384,"div",2)(385,"p"),Jx(386,"Interface para as a\xE7\xF5es do componente "),Sl(387,"code"),Jx(388,"po-dropdown"),sg(),Jx(389,"."),sg()(),Sl(390,"h4",11),Jx(391,"Propriedades"),sg(),Sl(392,"table",12)(393,"tr",13)(394,"th",14),Jx(395,"Nome"),sg(),Sl(396,"th",14),Jx(397,"Tipo"),sg(),Sl(398,"th",14),Jx(399,"Descri\xE7\xE3o"),sg()(),Sl(400,"tr",15)(401,"td",16)(402,"div",17)(403,"span",18),Jx(404," action"),Wl(405,"br"),sg()()(),Sl(406,"td",19)(407,"code",27),Jx(408,"Function"),sg()(),Sl(409,"td",22)(410,"em")(411,"strong"),Jx(412,"(opcional)"),sg()(),Sl(413,"p"),Jx(414,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Sl(415,"p"),Jx(416,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(417,"code"),Jx(418,"subItems"),sg(),Jx(419,"."),sg(),Sl(420,"blockquote")(421,"p"),Jx(422,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(423,"em"),Jx(424,"bind"),sg(),Jx(425,`:
`),Sl(426,"code"),Jx(427,"action: this.myFunction.bind(this)"),sg()()()()(),Sl(428,"tr",15)(429,"td",16)(430,"div",17)(431,"span",18),Jx(432," disabled"),Wl(433,"br"),sg()()(),Sl(434,"td",19)(435,"code",23),Jx(436,"boolean "),sg(),Sl(437,"code",27),Jx(438," Function"),sg()(),Sl(439,"td",22)(440,"em")(441,"strong"),Jx(442,"(opcional)"),sg()(),Sl(443,"p"),Jx(444,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Sl(445,"tr",15)(446,"td",16)(447,"div",17)(448,"span",18),Jx(449," icon"),Wl(450,"br"),sg()()(),Sl(451,"td",19)(452,"code",24),Jx(453,"string "),sg(),Sl(454,"code",28),Jx(455," TemplateRef<void>"),sg()(),Sl(456,"td",22)(457,"em")(458,"strong"),Jx(459,"(opcional)"),sg()(),Sl(460,"p"),Jx(461,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Sl(462,"p"),Jx(463,"Aceita \xEDcones da "),Sl(464,"a",29),Jx(465,"Biblioteca de \xEDcones"),sg(),Jx(466,`, fontes externas (ex: Font Awesome)
ou um `),Sl(467,"code"),Jx(468,"TemplateRef"),sg(),Jx(469," para \xEDcones customizados."),sg(),Sl(470,"pre")(471,"code"),Jx(472,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Sl(473,"tr",15)(474,"td",16)(475,"div",17)(476,"span",18),Jx(477," label"),Wl(478,"br"),sg()()(),Sl(479,"td",19)(480,"code",24),Jx(481,"string"),sg()(),Sl(482,"td",22)(483,"p"),Jx(484,"R\xF3tulo da a\xE7\xE3o."),sg(),Sl(485,"p"),Jx(486,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(487,"code"),Jx(488,"subItems"),sg(),Jx(489,"."),sg()()(),Sl(490,"tr",15)(491,"td",16)(492,"div",17)(493,"span",18),Jx(494," selected"),Wl(495,"br"),sg()()(),Sl(496,"td",19)(497,"code",23),Jx(498,"boolean"),sg()(),Sl(499,"td",22)(500,"em")(501,"strong"),Jx(502,"(opcional)"),sg()(),Sl(503,"p"),Jx(504,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Sl(505,"tr",15)(506,"td",16)(507,"div",17)(508,"span",18),Jx(509," separator"),Wl(510,"br"),sg()()(),Sl(511,"td",19)(512,"code",23),Jx(513,"boolean"),sg()(),Sl(514,"td",22)(515,"em")(516,"strong"),Jx(517,"(opcional)"),sg()(),Sl(518,"p"),Jx(519,"Atribui uma linha separadora acima do item."),sg()()(),Sl(520,"tr",15)(521,"td",16)(522,"div",17)(523,"span",18),Jx(524," subItems"),Wl(525,"br"),sg()()(),Sl(526,"td",19)(527,"code",30),Jx(528,"Array<PoPopupAction>"),sg()(),Sl(529,"td",22)(530,"em")(531,"strong"),Jx(532,"(opcional)"),sg()(),Sl(533,"p"),Jx(534,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Sl(535,"p"),Jx(536,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Sl(537,"blockquote")(538,"p"),Jx(539,"As propriedades "),Sl(540,"code"),Jx(541,"disabled"),sg(),Jx(542,", "),Sl(543,"code"),Jx(544,"type"),sg(),Jx(545," e "),Sl(546,"code"),Jx(547,"visible"),sg(),Jx(548," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Sl(549,"blockquote")(550,"p"),Jx(551,"Quando "),Sl(552,"code"),Jx(553,"url"),sg(),Jx(554," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Sl(555,"blockquote")(556,"p"),Jx(557,"Em subn\xEDveis aninhados, o "),Sl(558,"code"),Jx(559,"icon"),sg(),Jx(560," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Sl(561,"tr",15)(562,"td",16)(563,"div",17)(564,"span",18),Jx(565," type"),Wl(566,"br"),sg()()(),Sl(567,"td",19)(568,"code",24),Jx(569,"string"),sg()(),Sl(570,"td",22)(571,"em")(572,"strong"),Jx(573,"(opcional)"),sg()(),Sl(574,"p"),Jx(575,"Define a cor do item."),sg(),Sl(576,"p"),Jx(577,"Valores v\xE1lidos:"),sg(),Sl(578,"ul")(579,"li")(580,"code"),Jx(581,"default"),sg()(),Sl(582,"li")(583,"code"),Jx(584,"danger"),sg()()()()(),Sl(585,"tr",15)(586,"td",16)(587,"div",17)(588,"span",18),Jx(589," url"),Wl(590,"br"),sg()()(),Sl(591,"td",19)(592,"code",24),Jx(593,"string"),sg()(),Sl(594,"td",22)(595,"em")(596,"strong"),Jx(597,"(opcional)"),sg()(),Sl(598,"p"),Jx(599,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Sl(600,"p"),Jx(601,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(602,"code"),Jx(603,"url"),sg(),Jx(604," \xE9 informada em um agrupador, o clique "),Sl(605,"strong"),Jx(606,"n\xE3o abrir\xE1 os subitens"),sg(),Jx(607,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Sl(608,"blockquote")(609,"p"),Jx(610,"Quando informada, tem prioridade sobre a propriedade "),Sl(611,"code"),Jx(612,"action"),sg(),Jx(613,"."),sg()()()(),Sl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),Jx(618," visible"),Wl(619,"br"),sg()()(),Sl(620,"td",19)(621,"code",23),Jx(622,"boolean "),sg(),Sl(623,"code",27),Jx(624," Function"),sg()(),Sl(625,"td",22)(626,"em")(627,"strong"),Jx(628,"(opcional)"),sg()(),Sl(629,"p"),Jx(630,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var Ee=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dropdown",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-dropdown-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-dropdown-basic-view")(6,"sample-po-dropdown-subitems-view")(7,"sample-po-dropdown-labs-view")(8,"sample-po-dropdown-social-network-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,me,ue,ge,he,fe],encapsulation:2})}return i})();var qe=[{path:"",component:Ee}],we=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[pL.forChild(qe),pL]})}return i})();var vt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ar,we]})}return i})();export{vt as DocPoDropdownModule};