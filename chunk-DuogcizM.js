import {f as fe$1,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,aW as Yp,r as r$1,bA as uS,L as Gl,O as nw,bs as mN,a7 as gN,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aJ as qhe,aB as Sx,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,cn as r3,ba as _Ne,aq as gx,at as mx,a3 as lNe,aD as Ky,aT as sN,aE as Xy,aA as Nx}from'./main-P7IRR5MZ.js';var xe=()=>({label:"How to install PO",url:"/guides/how-install"}),ve=i=>[i],se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic"]],standalone:false,decls:1,vars:4,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Gl(0,"po-dropdown",0),a&2&&nw("p-actions",mN(2,ve,gN(1,xe)));},dependencies:[uS],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dropdown Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dropdown-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,De,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,se],encapsulation:2,changeDetection:1})}return i})();var ce=(()=>{class i{actions=[{label:"New Sale",action:()=>console.log("New Sale")},{label:"New Cancellation",action:()=>console.log("New Cancellation"),type:"danger"},{label:"Reports",subItems:[{label:"Monthly Sales",action:()=>console.log("Monthly Sales"),icon:"an an-chart-line-up"},{label:"Annual Sales",action:()=>console.log("Annual Sales"),icon:"an an-chart-line-up"}]},{label:"Settings",subItems:[{label:"Users",action:()=>console.log("Users")},{label:"System",subItems:[{label:"Backup",action:()=>console.log("Backup")},{label:"Logs",action:()=>console.log("Logs")}]}]}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems"]],standalone:false,decls:1,vars:1,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Gl(0,"po-dropdown",0),a&2&&nw("p-actions",o.actions);},dependencies:[uS],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dropdown Subitems"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dropdown-subitems"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,_e,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ce],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{poNotification=f(Yp);action;actions;parentList;label;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertiesOptions=[{value:"disabled",label:"Disabled"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(r){let a=r$1({},r);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!r.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,r.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}getActionNode(r,a){if(!(!r||!Array.isArray(r)||!a))for(let o of r){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(r,a=0,o=[]){return !r||!Array.isArray(r)||r.forEach(m=>{let{label:u}=m;o.push({label:`${"-".repeat(a)} ${u}`,value:u}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o);}),o}restore(){this.actions=[],this.parentList=[],this.label="PO Dropdown",this.size="medium",this.properties=[],this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}showAction(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs"]],standalone:false,decls:23,vars:21,consts:[["formAction","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-offset-xl-5","po-offset-lg-5",3,"p-actions","p-disabled","p-label","p-size"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let m=Sx();Tl(0,"div",2),Gl(1,"po-dropdown",3),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"po-input",4),ww("ngModelChange",function(p){return Ky(m),sN(o.action.label,p)||(o.action.label=p),Xy(p)}),sg(),r0(),Tl(6,"po-input",5),ww("ngModelChange",function(p){return Ky(m),sN(o.action.action,p)||(o.action.action=p),Xy(p)}),sg(),r0(),Tl(7,"po-input",6),ww("ngModelChange",function(p){return Ky(m),sN(o.action.url,p)||(o.action.url=p),Xy(p)}),sg(),r0(),Tl(8,"po-select",7),ww("ngModelChange",function(p){return Ky(m),sN(o.action.type,p)||(o.action.type=p),Xy(p)}),sg(),r0(),Tl(9,"po-select",8),ww("ngModelChange",function(p){return Ky(m),sN(o.action.icon,p)||(o.action.icon=p),Xy(p)}),sg(),r0(),Tl(10,"po-select",9),ww("ngModelChange",function(p){return Ky(m),sN(o.action.parent,p)||(o.action.parent=p),Xy(p)}),sg(),r0(),Tl(11,"po-checkbox-group",10),ww("ngModelChange",function(p){return Ky(m),sN(o.action,p)||(o.action=p),Xy(p)}),sg(),r0(),Tl(12,"div",2)(13,"po-button",11),ht("p-click",function(){return o.addAction(o.action)}),sg()()(),Gl(14,"po-divider"),Tl(15,"form",null,1)(17,"div",2)(18,"po-input",12),ww("ngModelChange",function(p){return Ky(m),sN(o.label,p)||(o.label=p),Xy(p)}),sg(),r0(),sg(),Tl(19,"po-checkbox-group",13),ww("ngModelChange",function(p){return Ky(m),sN(o.properties,p)||(o.properties=p),Xy(p)}),sg(),r0(),Tl(20,"po-radio-group",14),ww("ngModelChange",function(p){return Ky(m),sN(o.size,p)||(o.size=p),Xy(p)}),sg(),r0(),Tl(21,"div",2)(22,"po-button",15),ht("p-click",function(){return o.restore()}),sg()()();}if(a&2){let m=Fx(4);Vp(),nw("p-actions",o.actions)("p-disabled",o.properties.includes("disabled"))("p-label",o.label)("p-size",o.size),Vp(4),Ew("ngModel",o.action.label),o0(),Vp(),Ew("ngModel",o.action.action),o0(),Vp(),Ew("ngModel",o.action.url),o0(),Vp(),Ew("ngModel",o.action.type),nw("p-options",o.typeOptions),o0(),Vp(),Ew("ngModel",o.action.icon),nw("p-options",o.iconOptions),o0(),Vp(),Ew("ngModel",o.action.parent),nw("p-options",o.parentList),o0(),Vp(),Ew("ngModel",o.action),nw("p-options",o.actionOptions),o0(),Vp(2),nw("p-disabled",m.form.invalid),Vp(5),Ew("ngModel",o.label),o0(),Vp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),o0(),Vp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,uS,C3,O3,Dde,qhe],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dropdown Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dropdown-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Te,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,be],encapsulation:2,changeDetection:1})}return i})();function Le(i,Ce){if(i&1&&(Tl(0,"div",0),Gl(1,"po-avatar",2),Tl(2,"div",3)(3,"span",4),iN(4),sg(),Tl(5,"span",5),iN(6),sg(),Tl(7,"span",5),iN(8),sg()()(),Tl(9,"div",0),Gl(10,"po-dropdown",6),sg()),i&2){let r=Nx();Vp(),nw("p-src",r.userAvatar),Vp(3),fg(" ",r.currentFriend.name," "),Vp(2),fg(" ",r.currentFriend.mutualFriends," mutual friends "),Vp(2),fg(" Resides in ",r.currentFriend.reside," "),Vp(2),nw("p-actions",r.answers);}}function Ne(i,Ce){i&1&&(Tl(0,"div",0)(1,"span",7),iN(2,"Congratulations TOTVS, no more requests!"),sg()());}var Se=(()=>{class i{poNotification=f(Yp);currentFriend;userAvatar="https://lorempixel.com/144/144/";answers=[{label:"Confirm",action:this.notification.bind(this,"added","success")},{label:"Ignore",action:this.notification.bind(this,"ignored","warning")},{label:"Block",action:this.notification.bind(this,"blocked","information")}];newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-label","Add as friend?",1,"po-lg-8","po-offset-md-4","po-offset-lg-4","po-offset-xl-4",3,"p-actions"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"po-widget",1),gx(2,Le,11,5)(3,Ne,3,0,"div",0),sg()()),a&2&&(Vp(2),mx(o.currentFriend?2:3));},dependencies:[r3,uS,_Ne],encapsulation:2,changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dropdown - Social Network"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dropdown-social-network"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ie,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Se],encapsulation:2,changeDetection:1})}return i})();var fe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-doc"]],standalone:false,decls:631,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/getting-started"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDropdownAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoDropdownModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-dropdown."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoDropdownComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-dropdown"),sg(),iN(17," pode ser utilizado como um agrupador de a\xE7\xF5es e / ou op\xE7\xF5es."),sg(),Tl(18,"blockquote")(19,"p"),iN(20,"Caso n\xE3o haja configura\xE7\xE3o de rotas em sua aplica\xE7\xE3o, se faz necess\xE1rio importar o "),Tl(21,"code"),iN(22,"RouterModule"),sg(),iN(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),sg()(),Tl(24,"pre")(25,"code"),iN(26,`import { RouterModule } from '@angular/router';

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
`),sg()(),Tl(27,"blockquote")(28,"p"),iN(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),Tl(30,"a",6),iN(31,"/Configurando as rotas do po-menu"),sg(),iN(32,"."),sg()(),Tl(33,"h4"),iN(34,"Tokens customiz\xE1veis"),sg(),Tl(35,"p"),iN(36,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(37,"blockquote")(38,"p"),iN(39,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(40,"a",7),iN(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(42,"."),sg()(),Tl(43,"table")(44,"thead")(45,"tr")(46,"th"),iN(47,"Propriedade"),sg(),Tl(48,"th"),iN(49,"Descri\xE7\xE3o"),sg(),Tl(50,"th"),iN(51,"Valor Padr\xE3o"),sg()()(),Tl(52,"tbody")(53,"tr")(54,"td")(55,"strong"),iN(56,"Default Values"),sg()(),Gl(57,"td")(58,"td"),sg(),Tl(59,"tr")(60,"td")(61,"code"),iN(62,"--font-family"),sg()(),Tl(63,"td"),iN(64,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(65,"td")(66,"code"),iN(67,"var(--font-family-theme)"),sg()()(),Tl(68,"tr")(69,"td")(70,"code"),iN(71,"--font-size"),sg()(),Tl(72,"td"),iN(73,"Tamanho da fonte"),sg(),Tl(74,"td")(75,"code"),iN(76,"var(--font-size-default)"),sg()()(),Tl(77,"tr")(78,"td")(79,"code"),iN(80,"--font-weight"),sg()(),Tl(81,"td"),iN(82,"Peso da fonte"),sg(),Tl(83,"td")(84,"code"),iN(85,"var(--font-weight-bold)"),sg()()(),Tl(86,"tr")(87,"td")(88,"code"),iN(89,"--line-height"),sg()(),Tl(90,"td"),iN(91,"Tamanho da label"),sg(),Tl(92,"td")(93,"code"),iN(94,"var(--line-height-none)"),sg()()(),Tl(95,"tr")(96,"td")(97,"code"),iN(98,"--color"),sg()(),Tl(99,"td"),iN(100,"Cor principal do dropdown"),sg(),Tl(101,"td")(102,"code"),iN(103,"var(--color-action-default)"),sg()()(),Tl(104,"tr")(105,"td")(106,"code"),iN(107,"--border-radius"),sg()(),Tl(108,"td"),iN(109,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(110,"td")(111,"code"),iN(112,"var(--border-radius-md)"),sg()()(),Tl(113,"tr")(114,"td")(115,"code"),iN(116,"--border-width"),sg()(),Tl(117,"td"),iN(118,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Tl(119,"td")(120,"code"),iN(121,"var(--border-width-md)"),sg()()(),Tl(122,"tr")(123,"td")(124,"code"),iN(125,"--padding"),sg()(),Tl(126,"td"),iN(127,"Preenchimento"),sg(),Tl(128,"td")(129,"code"),iN(130,"0 1em"),sg()()(),Tl(131,"tr")(132,"td")(133,"strong"),iN(134,"Hover"),sg()(),Gl(135,"td")(136,"td"),sg(),Tl(137,"tr")(138,"td")(139,"code"),iN(140,"--color-hover"),sg()(),Tl(141,"td"),iN(142,"Cor principal no estado hover"),sg(),Tl(143,"td")(144,"code"),iN(145,"var(--color-brand-01-darkest)"),sg()()(),Tl(146,"tr")(147,"td")(148,"code"),iN(149,"--background-hover"),sg()(),Tl(150,"td"),iN(151,"Cor de background no estado hover"),sg(),Tl(152,"td")(153,"code"),iN(154,"var(--color-brand-01-lighter)"),sg()()(),Tl(155,"tr")(156,"td")(157,"strong"),iN(158,"Focused"),sg()(),Gl(159,"td")(160,"td"),sg(),Tl(161,"tr")(162,"td")(163,"code"),iN(164,"--outline-color-focused"),sg(),iN(165," \xA0"),sg(),Tl(166,"td"),iN(167,"Cor do outline do estado de focus"),sg(),Tl(168,"td")(169,"code"),iN(170,"var(--color-action-focus)"),sg()()(),Tl(171,"tr")(172,"td")(173,"strong"),iN(174,"Pressed"),sg()(),Gl(175,"td")(176,"td"),sg(),Tl(177,"tr")(178,"td")(179,"code"),iN(180,"--background-pressed"),sg(),iN(181," \xA0"),sg(),Tl(182,"td"),iN(183,"Cor de background no estado de pressionado\xA0"),sg(),Tl(184,"td")(185,"code"),iN(186,"var(--color-brand-01-light)"),sg()()(),Tl(187,"tr")(188,"td")(189,"strong"),iN(190,"Disabled"),sg()(),Gl(191,"td")(192,"td"),sg(),Tl(193,"tr")(194,"td")(195,"code"),iN(196,"--color-disabled"),sg()(),Tl(197,"td"),iN(198,"Cor principal no estado disabled"),sg(),Tl(199,"td")(200,"code"),iN(201,"var(--color-action-disabled)"),sg()()()()()(),Tl(202,"div",8)(203,"h4",9),iN(204,"Seletor"),sg(),Tl(205,"pre",10),iN(206,`<po-dropdown
    p-actions="PoDropdownAction[]"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    p-size="string" >
</po-dropdown>
`),sg()(),Tl(207,"h4",11),iN(208,"Propriedades"),sg(),Tl(209,"table",12)(210,"tr",13)(211,"th",14),iN(212,"Nome"),sg(),Tl(213,"th",14),iN(214,"Tipo"),sg(),Tl(215,"th",14),iN(216,"Padr\xE3o"),sg(),Tl(217,"th",14),iN(218,"Descri\xE7\xE3o"),sg()(),Tl(219,"tr",15)(220,"td",16)(221,"div",17)(222,"span",18),iN(223," p-actions"),Gl(224,"br"),sg()()(),Tl(225,"td",19)(226,"code",20),iN(227,"PoDropdownAction[]"),sg()(),Tl(228,"td",21),iN(229,"-"),sg(),Tl(230,"td",22)(231,"p"),iN(232,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),sg()()(),Tl(233,"tr",15)(234,"td",16)(235,"div",17)(236,"span",18),iN(237," p-disabled"),Gl(238,"br"),sg()()(),Tl(239,"td",19)(240,"code",23),iN(241,"boolean"),sg()(),Tl(242,"td",21)(243,"p")(244,"code"),iN(245,"false"),sg()()(),Tl(246,"td",22)(247,"em")(248,"strong"),iN(249,"(opcional)"),sg()(),Tl(250,"p"),iN(251,"Desabilita o campo."),sg()()(),Tl(252,"tr",15)(253,"td",16)(254,"div",17)(255,"span",18),iN(256," p-label"),Gl(257,"br"),sg()()(),Tl(258,"td",19)(259,"code",24),iN(260,"string"),sg()(),Tl(261,"td",21),iN(262,"-"),sg(),Tl(263,"td",22)(264,"p"),iN(265,"Adiciona um r\xF3tulo ao "),Tl(266,"code"),iN(267,"dropdown"),sg(),iN(268,"."),sg()()(),Tl(269,"tr",15)(270,"td",16)(271,"div",17)(272,"span",18),iN(273," p-position"),Gl(274,"br"),sg()()(),Tl(275,"td",19)(276,"code",24),iN(277,"string"),sg()(),Tl(278,"td",21)(279,"p")(280,"code"),iN(281,"bottom-left"),sg()()(),Tl(282,"td",22)(283,"em")(284,"strong"),iN(285,"(opcional)"),sg()(),Tl(286,"p"),iN(287,"Define a posi\xE7\xE3o preferencial de abertura do popup do dropdown em rela\xE7\xE3o ao bot\xE3o."),sg(),Tl(288,"p"),iN(289,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Tl(290,"ul")(291,"li")(292,"code"),iN(293,"right"),sg(),iN(294,": No lado direito."),sg(),Tl(295,"li")(296,"code"),iN(297,"right-bottom"),sg(),iN(298,": No lado direito inferior."),sg(),Tl(299,"li")(300,"code"),iN(301,"right-top"),sg(),iN(302,": No lado direito superior."),sg(),Tl(303,"li")(304,"code"),iN(305,"bottom"),sg(),iN(306,": Abaixo."),sg(),Tl(307,"li")(308,"code"),iN(309,"bottom-left"),sg(),iN(310,": Abaixo e \xE0 esquerda (padr\xE3o)."),sg(),Tl(311,"li")(312,"code"),iN(313,"bottom-right"),sg(),iN(314,": Abaixo e \xE0 direita."),sg(),Tl(315,"li")(316,"code"),iN(317,"left"),sg(),iN(318,": No lado esquerdo."),sg(),Tl(319,"li")(320,"code"),iN(321,"left-top"),sg(),iN(322,": No lado esquerdo superior."),sg(),Tl(323,"li")(324,"code"),iN(325,"left-bottom"),sg(),iN(326,": No lado esquerdo inferior."),sg(),Tl(327,"li")(328,"code"),iN(329,"top"),sg(),iN(330,": Acima."),sg(),Tl(331,"li")(332,"code"),iN(333,"top-right"),sg(),iN(334,": Acima e \xE0 direita."),sg(),Tl(335,"li")(336,"code"),iN(337,"top-left"),sg(),iN(338,": Acima e \xE0 esquerda."),sg()(),Tl(339,"blockquote")(340,"p"),iN(341,"O popup ser\xE1 rotacionado automaticamente caso n\xE3o caiba na posi\xE7\xE3o definida."),sg()()()(),Tl(342,"tr",15)(343,"td",16)(344,"div",17)(345,"span",18),iN(346," p-size"),Gl(347,"br"),sg()()(),Tl(348,"td",19)(349,"code",24),iN(350,"string"),sg()(),Tl(351,"td",21)(352,"p")(353,"code"),iN(354,"medium"),sg()()(),Tl(355,"td",22)(356,"em")(357,"strong"),iN(358,"(opcional)"),sg()(),Tl(359,"p"),iN(360,"Define o tamanho do componente:"),sg(),Tl(361,"ul")(362,"li")(363,"code"),iN(364,"small"),sg(),iN(365,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(366,"li")(367,"code"),iN(368,"medium"),sg(),iN(369,": altura do button como 44px."),sg()(),Tl(370,"blockquote")(371,"p"),iN(372,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(373,"code"),iN(374,"medium"),sg(),iN(375,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(376,"a",25),iN(377,"po-theme"),sg(),iN(378,"."),sg()()()()(),Tl(379,"h3"),iN(380,"Interfaces"),sg(),Tl(381,"h4",26)(382,"code",5),iN(383,"PoDropdownAction"),sg()(),Tl(384,"div",2)(385,"p"),iN(386,"Interface para as a\xE7\xF5es do componente "),Tl(387,"code"),iN(388,"po-dropdown"),sg(),iN(389,"."),sg()(),Tl(390,"h4",11),iN(391,"Propriedades"),sg(),Tl(392,"table",12)(393,"tr",13)(394,"th",14),iN(395,"Nome"),sg(),Tl(396,"th",14),iN(397,"Tipo"),sg(),Tl(398,"th",14),iN(399,"Descri\xE7\xE3o"),sg()(),Tl(400,"tr",15)(401,"td",16)(402,"div",17)(403,"span",18),iN(404," action"),Gl(405,"br"),sg()()(),Tl(406,"td",19)(407,"code",27),iN(408,"Function"),sg()(),Tl(409,"td",22)(410,"em")(411,"strong"),iN(412,"(opcional)"),sg()(),Tl(413,"p"),iN(414,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Tl(415,"p"),iN(416,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(417,"code"),iN(418,"subItems"),sg(),iN(419,"."),sg(),Tl(420,"blockquote")(421,"p"),iN(422,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Tl(423,"em"),iN(424,"bind"),sg(),iN(425,`:
`),Tl(426,"code"),iN(427,"action: this.myFunction.bind(this)"),sg()()()()(),Tl(428,"tr",15)(429,"td",16)(430,"div",17)(431,"span",18),iN(432," disabled"),Gl(433,"br"),sg()()(),Tl(434,"td",19)(435,"code",23),iN(436,"boolean "),sg(),Tl(437,"code",27),iN(438," Function"),sg()(),Tl(439,"td",22)(440,"em")(441,"strong"),iN(442,"(opcional)"),sg()(),Tl(443,"p"),iN(444,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Tl(445,"tr",15)(446,"td",16)(447,"div",17)(448,"span",18),iN(449," icon"),Gl(450,"br"),sg()()(),Tl(451,"td",19)(452,"code",24),iN(453,"string "),sg(),Tl(454,"code",28),iN(455," TemplateRef<void>"),sg()(),Tl(456,"td",22)(457,"em")(458,"strong"),iN(459,"(opcional)"),sg()(),Tl(460,"p"),iN(461,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(462,"p"),iN(463,"Aceita \xEDcones da "),Tl(464,"a",29),iN(465,"Biblioteca de \xEDcones"),sg(),iN(466,`, fontes externas (ex: Font Awesome)
ou um `),Tl(467,"code"),iN(468,"TemplateRef"),sg(),iN(469," para \xEDcones customizados."),sg(),Tl(470,"pre")(471,"code"),iN(472,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Tl(473,"tr",15)(474,"td",16)(475,"div",17)(476,"span",18),iN(477," label"),Gl(478,"br"),sg()()(),Tl(479,"td",19)(480,"code",24),iN(481,"string"),sg()(),Tl(482,"td",22)(483,"p"),iN(484,"R\xF3tulo da a\xE7\xE3o."),sg(),Tl(485,"p"),iN(486,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(487,"code"),iN(488,"subItems"),sg(),iN(489,"."),sg()()(),Tl(490,"tr",15)(491,"td",16)(492,"div",17)(493,"span",18),iN(494," selected"),Gl(495,"br"),sg()()(),Tl(496,"td",19)(497,"code",23),iN(498,"boolean"),sg()(),Tl(499,"td",22)(500,"em")(501,"strong"),iN(502,"(opcional)"),sg()(),Tl(503,"p"),iN(504,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Tl(505,"tr",15)(506,"td",16)(507,"div",17)(508,"span",18),iN(509," separator"),Gl(510,"br"),sg()()(),Tl(511,"td",19)(512,"code",23),iN(513,"boolean"),sg()(),Tl(514,"td",22)(515,"em")(516,"strong"),iN(517,"(opcional)"),sg()(),Tl(518,"p"),iN(519,"Atribui uma linha separadora acima do item."),sg()()(),Tl(520,"tr",15)(521,"td",16)(522,"div",17)(523,"span",18),iN(524," subItems"),Gl(525,"br"),sg()()(),Tl(526,"td",19)(527,"code",30),iN(528,"Array<PoPopupAction>"),sg()(),Tl(529,"td",22)(530,"em")(531,"strong"),iN(532,"(opcional)"),sg()(),Tl(533,"p"),iN(534,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Tl(535,"p"),iN(536,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Tl(537,"blockquote")(538,"p"),iN(539,"As propriedades "),Tl(540,"code"),iN(541,"disabled"),sg(),iN(542,", "),Tl(543,"code"),iN(544,"type"),sg(),iN(545," e "),Tl(546,"code"),iN(547,"visible"),sg(),iN(548," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Tl(549,"blockquote")(550,"p"),iN(551,"Quando "),Tl(552,"code"),iN(553,"url"),sg(),iN(554," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Tl(555,"blockquote")(556,"p"),iN(557,"Em subn\xEDveis aninhados, o "),Tl(558,"code"),iN(559,"icon"),sg(),iN(560," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Tl(561,"tr",15)(562,"td",16)(563,"div",17)(564,"span",18),iN(565," type"),Gl(566,"br"),sg()()(),Tl(567,"td",19)(568,"code",24),iN(569,"string"),sg()(),Tl(570,"td",22)(571,"em")(572,"strong"),iN(573,"(opcional)"),sg()(),Tl(574,"p"),iN(575,"Define a cor do item."),sg(),Tl(576,"p"),iN(577,"Valores v\xE1lidos:"),sg(),Tl(578,"ul")(579,"li")(580,"code"),iN(581,"default"),sg()(),Tl(582,"li")(583,"code"),iN(584,"danger"),sg()()()()(),Tl(585,"tr",15)(586,"td",16)(587,"div",17)(588,"span",18),iN(589," url"),Gl(590,"br"),sg()()(),Tl(591,"td",19)(592,"code",24),iN(593,"string"),sg()(),Tl(594,"td",22)(595,"em")(596,"strong"),iN(597,"(opcional)"),sg()(),Tl(598,"p"),iN(599,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Tl(600,"p"),iN(601,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(602,"code"),iN(603,"url"),sg(),iN(604," \xE9 informada em um agrupador, o clique "),Tl(605,"strong"),iN(606,"n\xE3o abrir\xE1 os subitens"),sg(),iN(607,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Tl(608,"blockquote")(609,"p"),iN(610,"Quando informada, tem prioridade sobre a propriedade "),Tl(611,"code"),iN(612,"action"),sg(),iN(613,"."),sg()()()(),Tl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),iN(618," visible"),Gl(619,"br"),sg()()(),Tl(620,"td",19)(621,"code",23),iN(622,"boolean "),sg(),Tl(623,"code",27),iN(624," Function"),sg()(),Tl(625,"td",22)(626,"em")(627,"strong"),iN(628,"(opcional)"),sg()(),Tl(629,"p"),iN(630,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var Ee=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dropdown",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-dropdown-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-dropdown-basic-view")(6,"sample-po-dropdown-subitems-view")(7,"sample-po-dropdown-labs-view")(8,"sample-po-dropdown-social-network-view"),sg()()()),a&2&&(nw("p-actions",o.actions),Vp(2),nw("p-active",o.activeTab==="doc"),Vp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[lNe,Wme,jme,me,ue,ge,he,fe],encapsulation:2,changeDetection:1})}return i})();var qe=[{path:"",component:Ee}],we=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[DL.forChild(qe),DL]})}return i})();var vt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ar,we]})}return i})();export{vt as DocPoDropdownModule};