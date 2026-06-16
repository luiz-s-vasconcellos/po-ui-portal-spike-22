import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,r as r$1,b6 as qo,N as Ul,S as YE,bi as Jx,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bB as ga,ai as ya,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,bR as Qn,aU as IR,ao as QA,ar as JA,a3 as D3,az as Qy,aB as $x,aA as Jy,ax as gx}from'./main-6SPFG3VI.js';var ye=()=>({label:"How to install PO",url:"/guides/how-install"}),De=i=>[i],ce=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic"]],standalone:false,decls:1,vars:4,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Ul(0,"po-dropdown",0),a&2&&YE("p-actions",Jx(2,De,Qx(1,ye)));},dependencies:[qo],encapsulation:2,changeDetection:1})}return i})();var Ae=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dropdown Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dropdown-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ae,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ce],encapsulation:2})}return i})();var be=(()=>{class i{actions=[{label:"New Sale",action:()=>console.log("New Sale")},{label:"New Cancellation",action:()=>console.log("New Cancellation"),type:"danger"},{label:"Reports",subItems:[{label:"Monthly Sales",action:()=>console.log("Monthly Sales"),icon:"an an-chart-line-up"},{label:"Annual Sales",action:()=>console.log("Annual Sales"),icon:"an an-chart-line-up"}]},{label:"Settings",subItems:[{label:"Users",action:()=>console.log("Users")},{label:"System",subItems:[{label:"Backup",action:()=>console.log("Backup")},{label:"Logs",action:()=>console.log("Logs")}]}]}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems"]],standalone:false,decls:1,vars:1,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Ul(0,"po-dropdown",0),a&2&&YE("p-actions",o.actions);},dependencies:[qo],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dropdown Subitems"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dropdown-subitems"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ke,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return i})();var Se=(()=>{class i{poNotification=f(Bp);action;actions;parentList;label;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertiesOptions=[{value:"disabled",label:"Disabled"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(r){let a=r$1({},r);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!r.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,r.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}getActionNode(r,a){if(!(!r||!Array.isArray(r)||!a))for(let o of r){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(r,a=0,o=[]){return !r||!Array.isArray(r)||r.forEach(m=>{let{label:u}=m;o.push({label:`${"-".repeat(a)} ${u}`,value:u}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o);}),o}restore(){this.actions=[],this.parentList=[],this.label="PO Dropdown",this.size="medium",this.properties=[],this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}showAction(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs"]],standalone:false,decls:23,vars:21,consts:[["formAction","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-offset-xl-5","po-offset-lg-5",3,"p-actions","p-disabled","p-label","p-size"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let m=lx();wl(0,"div",2),Ul(1,"po-dropdown",3),ng(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"po-input",4),pw("ngModelChange",function(p){return Qy(m),$x(o.action.label,p)||(o.action.label=p),Jy(p)}),ng(),$0(),wl(6,"po-input",5),pw("ngModelChange",function(p){return Qy(m),$x(o.action.action,p)||(o.action.action=p),Jy(p)}),ng(),$0(),wl(7,"po-input",6),pw("ngModelChange",function(p){return Qy(m),$x(o.action.url,p)||(o.action.url=p),Jy(p)}),ng(),$0(),wl(8,"po-select",7),pw("ngModelChange",function(p){return Qy(m),$x(o.action.type,p)||(o.action.type=p),Jy(p)}),ng(),$0(),wl(9,"po-select",8),pw("ngModelChange",function(p){return Qy(m),$x(o.action.icon,p)||(o.action.icon=p),Jy(p)}),ng(),$0(),wl(10,"po-select",9),pw("ngModelChange",function(p){return Qy(m),$x(o.action.parent,p)||(o.action.parent=p),Jy(p)}),ng(),$0(),wl(11,"po-checkbox-group",10),pw("ngModelChange",function(p){return Qy(m),$x(o.action,p)||(o.action=p),Jy(p)}),ng(),$0(),wl(12,"div",2)(13,"po-button",11),ut("p-click",function(){return o.addAction(o.action)}),ng()()(),Ul(14,"po-divider"),wl(15,"form",null,1)(17,"div",2)(18,"po-input",12),pw("ngModelChange",function(p){return Qy(m),$x(o.label,p)||(o.label=p),Jy(p)}),ng(),$0(),ng(),wl(19,"po-checkbox-group",13),pw("ngModelChange",function(p){return Qy(m),$x(o.properties,p)||(o.properties=p),Jy(p)}),ng(),$0(),wl(20,"po-radio-group",14),pw("ngModelChange",function(p){return Qy(m),$x(o.size,p)||(o.size=p),Jy(p)}),ng(),$0(),wl(21,"div",2)(22,"po-button",15),ut("p-click",function(){return o.restore()}),ng()()();}if(a&2){let m=_x(4);Pp(),YE("p-actions",o.actions)("p-disabled",o.properties.includes("disabled"))("p-label",o.label)("p-size",o.size),Pp(4),hw("ngModel",o.action.label),G0(),Pp(),hw("ngModel",o.action.action),G0(),Pp(),hw("ngModel",o.action.url),G0(),Pp(),hw("ngModel",o.action.type),YE("p-options",o.typeOptions),G0(),Pp(),hw("ngModel",o.action.icon),YE("p-options",o.iconOptions),G0(),Pp(),hw("ngModel",o.action.parent),YE("p-options",o.parentList),G0(),Pp(),hw("ngModel",o.action),YE("p-options",o.actionOptions),G0(),Pp(2),YE("p-disabled",m.form.invalid),Pp(5),hw("ngModel",o.label),G0(),Pp(),hw("ngModel",o.properties),YE("p-options",o.propertiesOptions),G0(),Pp(),hw("ngModel",o.size),YE("p-options",o.sizeOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe,di,qo,ia,Yo,ga,ya],encapsulation:2,changeDetection:1})}return i})();var Le=i=>({"docs-sample-code-tabs":i}),fe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dropdown Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dropdown-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Le,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Se],encapsulation:2})}return i})();function Oe(i,ve){if(i&1&&(wl(0,"div",0),Ul(1,"po-avatar",2),wl(2,"div",3)(3,"span",4),Ux(4),ng(),wl(5,"span",5),Ux(6),ng(),wl(7,"span",5),Ux(8),ng()()(),wl(9,"div",0),Ul(10,"po-dropdown",6),ng()),i&2){let r=gx();Pp(),YE("p-src",r.userAvatar),Pp(3),cg(" ",r.currentFriend.name," "),Pp(2),cg(" ",r.currentFriend.mutualFriends," mutual friends "),Pp(2),cg(" Resides in ",r.currentFriend.reside," "),Pp(2),YE("p-actions",r.answers);}}function Ie(i,ve){i&1&&(wl(0,"div",0)(1,"span",7),Ux(2,"Congratulations TOTVS, no more requests!"),ng()());}var he=(()=>{class i{poNotification=f(Bp);currentFriend;userAvatar="https://lorempixel.com/144/144/";answers=[{label:"Confirm",action:this.notification.bind(this,"added","success")},{label:"Ignore",action:this.notification.bind(this,"ignored","warning")},{label:"Block",action:this.notification.bind(this,"blocked","information")}];newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-label","Add as friend?",1,"po-lg-8","po-offset-md-4","po-offset-lg-4","po-offset-xl-4",3,"p-actions"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"po-widget",1),QA(2,Oe,11,5)(3,Ie,3,0,"div",0),ng()()),a&2&&(Pp(2),JA(o.currentFriend?2:3));},dependencies:[Qn,qo,IR],encapsulation:2,changeDetection:1})}return i})();var Ve=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dropdown - Social Network"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dropdown-social-network"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ve,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,he],encapsulation:2})}return i})();var we=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-doc"]],standalone:false,decls:631,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/getting-started"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDropdownAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoDropdownModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-dropdown."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoDropdownComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-dropdown"),ng(),Ux(17," pode ser utilizado como um agrupador de a\xE7\xF5es e / ou op\xE7\xF5es."),ng(),wl(18,"blockquote")(19,"p"),Ux(20,"Caso n\xE3o haja configura\xE7\xE3o de rotas em sua aplica\xE7\xE3o, se faz necess\xE1rio importar o "),wl(21,"code"),Ux(22,"RouterModule"),ng(),Ux(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),ng()(),wl(24,"pre")(25,"code"),Ux(26,`import { RouterModule } from '@angular/router';

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
`),ng()(),wl(27,"blockquote")(28,"p"),Ux(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),wl(30,"a",6),Ux(31,"/Configurando as rotas do po-menu"),ng(),Ux(32,"."),ng()(),wl(33,"h4"),Ux(34,"Tokens customiz\xE1veis"),ng(),wl(35,"p"),Ux(36,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(37,"blockquote")(38,"p"),Ux(39,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(40,"a",7),Ux(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(42,"."),ng()(),wl(43,"table")(44,"thead")(45,"tr")(46,"th"),Ux(47,"Propriedade"),ng(),wl(48,"th"),Ux(49,"Descri\xE7\xE3o"),ng(),wl(50,"th"),Ux(51,"Valor Padr\xE3o"),ng()()(),wl(52,"tbody")(53,"tr")(54,"td")(55,"strong"),Ux(56,"Default Values"),ng()(),Ul(57,"td")(58,"td"),ng(),wl(59,"tr")(60,"td")(61,"code"),Ux(62,"--font-family"),ng()(),wl(63,"td"),Ux(64,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(65,"td")(66,"code"),Ux(67,"var(--font-family-theme)"),ng()()(),wl(68,"tr")(69,"td")(70,"code"),Ux(71,"--font-size"),ng()(),wl(72,"td"),Ux(73,"Tamanho da fonte"),ng(),wl(74,"td")(75,"code"),Ux(76,"var(--font-size-default)"),ng()()(),wl(77,"tr")(78,"td")(79,"code"),Ux(80,"--font-weight"),ng()(),wl(81,"td"),Ux(82,"Peso da fonte"),ng(),wl(83,"td")(84,"code"),Ux(85,"var(--font-weight-bold)"),ng()()(),wl(86,"tr")(87,"td")(88,"code"),Ux(89,"--line-height"),ng()(),wl(90,"td"),Ux(91,"Tamanho da label"),ng(),wl(92,"td")(93,"code"),Ux(94,"var(--line-height-none)"),ng()()(),wl(95,"tr")(96,"td")(97,"code"),Ux(98,"--color"),ng()(),wl(99,"td"),Ux(100,"Cor principal do dropdown"),ng(),wl(101,"td")(102,"code"),Ux(103,"var(--color-action-default)"),ng()()(),wl(104,"tr")(105,"td")(106,"code"),Ux(107,"--border-radius"),ng()(),wl(108,"td"),Ux(109,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(110,"td")(111,"code"),Ux(112,"var(--border-radius-md)"),ng()()(),wl(113,"tr")(114,"td")(115,"code"),Ux(116,"--border-width"),ng()(),wl(117,"td"),Ux(118,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),ng(),wl(119,"td")(120,"code"),Ux(121,"var(--border-width-md)"),ng()()(),wl(122,"tr")(123,"td")(124,"code"),Ux(125,"--padding"),ng()(),wl(126,"td"),Ux(127,"Preenchimento"),ng(),wl(128,"td")(129,"code"),Ux(130,"0 1em"),ng()()(),wl(131,"tr")(132,"td")(133,"strong"),Ux(134,"Hover"),ng()(),Ul(135,"td")(136,"td"),ng(),wl(137,"tr")(138,"td")(139,"code"),Ux(140,"--color-hover"),ng()(),wl(141,"td"),Ux(142,"Cor principal no estado hover"),ng(),wl(143,"td")(144,"code"),Ux(145,"var(--color-brand-01-darkest)"),ng()()(),wl(146,"tr")(147,"td")(148,"code"),Ux(149,"--background-hover"),ng()(),wl(150,"td"),Ux(151,"Cor de background no estado hover"),ng(),wl(152,"td")(153,"code"),Ux(154,"var(--color-brand-01-lighter)"),ng()()(),wl(155,"tr")(156,"td")(157,"strong"),Ux(158,"Focused"),ng()(),Ul(159,"td")(160,"td"),ng(),wl(161,"tr")(162,"td")(163,"code"),Ux(164,"--outline-color-focused"),ng(),Ux(165," \xA0"),ng(),wl(166,"td"),Ux(167,"Cor do outline do estado de focus"),ng(),wl(168,"td")(169,"code"),Ux(170,"var(--color-action-focus)"),ng()()(),wl(171,"tr")(172,"td")(173,"strong"),Ux(174,"Pressed"),ng()(),Ul(175,"td")(176,"td"),ng(),wl(177,"tr")(178,"td")(179,"code"),Ux(180,"--background-pressed"),ng(),Ux(181," \xA0"),ng(),wl(182,"td"),Ux(183,"Cor de background no estado de pressionado\xA0"),ng(),wl(184,"td")(185,"code"),Ux(186,"var(--color-brand-01-light)"),ng()()(),wl(187,"tr")(188,"td")(189,"strong"),Ux(190,"Disabled"),ng()(),Ul(191,"td")(192,"td"),ng(),wl(193,"tr")(194,"td")(195,"code"),Ux(196,"--color-disabled"),ng()(),wl(197,"td"),Ux(198,"Cor principal no estado disabled"),ng(),wl(199,"td")(200,"code"),Ux(201,"var(--color-action-disabled)"),ng()()()()()(),wl(202,"div",8)(203,"h4",9),Ux(204,"Seletor"),ng(),wl(205,"pre",10),Ux(206,`<po-dropdown
    p-actions="PoDropdownAction[]"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    p-size="string" >
</po-dropdown>
`),ng()(),wl(207,"h4",11),Ux(208,"Propriedades"),ng(),wl(209,"table",12)(210,"tr",13)(211,"th",14),Ux(212,"Nome"),ng(),wl(213,"th",14),Ux(214,"Tipo"),ng(),wl(215,"th",14),Ux(216,"Padr\xE3o"),ng(),wl(217,"th",14),Ux(218,"Descri\xE7\xE3o"),ng()(),wl(219,"tr",15)(220,"td",16)(221,"div",17)(222,"span",18),Ux(223," p-actions"),Ul(224,"br"),ng()()(),wl(225,"td",19)(226,"code",20),Ux(227,"PoDropdownAction[]"),ng()(),wl(228,"td",21),Ux(229,"-"),ng(),wl(230,"td",22)(231,"p"),Ux(232,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),ng()()(),wl(233,"tr",15)(234,"td",16)(235,"div",17)(236,"span",18),Ux(237," p-disabled"),Ul(238,"br"),ng()()(),wl(239,"td",19)(240,"code",23),Ux(241,"boolean"),ng()(),wl(242,"td",21)(243,"p")(244,"code"),Ux(245,"false"),ng()()(),wl(246,"td",22)(247,"em")(248,"strong"),Ux(249,"(opcional)"),ng()(),wl(250,"p"),Ux(251,"Desabilita o campo."),ng()()(),wl(252,"tr",15)(253,"td",16)(254,"div",17)(255,"span",18),Ux(256," p-label"),Ul(257,"br"),ng()()(),wl(258,"td",19)(259,"code",24),Ux(260,"string"),ng()(),wl(261,"td",21),Ux(262,"-"),ng(),wl(263,"td",22)(264,"p"),Ux(265,"Adiciona um r\xF3tulo ao "),wl(266,"code"),Ux(267,"dropdown"),ng(),Ux(268,"."),ng()()(),wl(269,"tr",15)(270,"td",16)(271,"div",17)(272,"span",18),Ux(273," p-position"),Ul(274,"br"),ng()()(),wl(275,"td",19)(276,"code",24),Ux(277,"string"),ng()(),wl(278,"td",21)(279,"p")(280,"code"),Ux(281,"bottom-left"),ng()()(),wl(282,"td",22)(283,"em")(284,"strong"),Ux(285,"(opcional)"),ng()(),wl(286,"p"),Ux(287,"Define a posi\xE7\xE3o preferencial de abertura do popup do dropdown em rela\xE7\xE3o ao bot\xE3o."),ng(),wl(288,"p"),Ux(289,"Posi\xE7\xF5es v\xE1lidas:"),ng(),wl(290,"ul")(291,"li")(292,"code"),Ux(293,"right"),ng(),Ux(294,": No lado direito."),ng(),wl(295,"li")(296,"code"),Ux(297,"right-bottom"),ng(),Ux(298,": No lado direito inferior."),ng(),wl(299,"li")(300,"code"),Ux(301,"right-top"),ng(),Ux(302,": No lado direito superior."),ng(),wl(303,"li")(304,"code"),Ux(305,"bottom"),ng(),Ux(306,": Abaixo."),ng(),wl(307,"li")(308,"code"),Ux(309,"bottom-left"),ng(),Ux(310,": Abaixo e \xE0 esquerda (padr\xE3o)."),ng(),wl(311,"li")(312,"code"),Ux(313,"bottom-right"),ng(),Ux(314,": Abaixo e \xE0 direita."),ng(),wl(315,"li")(316,"code"),Ux(317,"left"),ng(),Ux(318,": No lado esquerdo."),ng(),wl(319,"li")(320,"code"),Ux(321,"left-top"),ng(),Ux(322,": No lado esquerdo superior."),ng(),wl(323,"li")(324,"code"),Ux(325,"left-bottom"),ng(),Ux(326,": No lado esquerdo inferior."),ng(),wl(327,"li")(328,"code"),Ux(329,"top"),ng(),Ux(330,": Acima."),ng(),wl(331,"li")(332,"code"),Ux(333,"top-right"),ng(),Ux(334,": Acima e \xE0 direita."),ng(),wl(335,"li")(336,"code"),Ux(337,"top-left"),ng(),Ux(338,": Acima e \xE0 esquerda."),ng()(),wl(339,"blockquote")(340,"p"),Ux(341,"O popup ser\xE1 rotacionado automaticamente caso n\xE3o caiba na posi\xE7\xE3o definida."),ng()()()(),wl(342,"tr",15)(343,"td",16)(344,"div",17)(345,"span",18),Ux(346," p-size"),Ul(347,"br"),ng()()(),wl(348,"td",19)(349,"code",24),Ux(350,"string"),ng()(),wl(351,"td",21)(352,"p")(353,"code"),Ux(354,"medium"),ng()()(),wl(355,"td",22)(356,"em")(357,"strong"),Ux(358,"(opcional)"),ng()(),wl(359,"p"),Ux(360,"Define o tamanho do componente:"),ng(),wl(361,"ul")(362,"li")(363,"code"),Ux(364,"small"),ng(),Ux(365,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(366,"li")(367,"code"),Ux(368,"medium"),ng(),Ux(369,": altura do button como 44px."),ng()(),wl(370,"blockquote")(371,"p"),Ux(372,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(373,"code"),Ux(374,"medium"),ng(),Ux(375,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(376,"a",25),Ux(377,"po-theme"),ng(),Ux(378,"."),ng()()()()(),wl(379,"h3"),Ux(380,"Interfaces"),ng(),wl(381,"h4",26)(382,"code",5),Ux(383,"PoDropdownAction"),ng()(),wl(384,"div",2)(385,"p"),Ux(386,"Interface para as a\xE7\xF5es do componente "),wl(387,"code"),Ux(388,"po-dropdown"),ng(),Ux(389,"."),ng()(),wl(390,"h4",11),Ux(391,"Propriedades"),ng(),wl(392,"table",12)(393,"tr",13)(394,"th",14),Ux(395,"Nome"),ng(),wl(396,"th",14),Ux(397,"Tipo"),ng(),wl(398,"th",14),Ux(399,"Descri\xE7\xE3o"),ng()(),wl(400,"tr",15)(401,"td",16)(402,"div",17)(403,"span",18),Ux(404," action"),Ul(405,"br"),ng()()(),wl(406,"td",19)(407,"code",27),Ux(408,"Function"),ng()(),wl(409,"td",22)(410,"em")(411,"strong"),Ux(412,"(opcional)"),ng()(),wl(413,"p"),Ux(414,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),ng(),wl(415,"p"),Ux(416,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(417,"code"),Ux(418,"subItems"),ng(),Ux(419,"."),ng(),wl(420,"blockquote")(421,"p"),Ux(422,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),wl(423,"em"),Ux(424,"bind"),ng(),Ux(425,`:
`),wl(426,"code"),Ux(427,"action: this.myFunction.bind(this)"),ng()()()()(),wl(428,"tr",15)(429,"td",16)(430,"div",17)(431,"span",18),Ux(432," disabled"),Ul(433,"br"),ng()()(),wl(434,"td",19)(435,"code",23),Ux(436,"boolean "),ng(),wl(437,"code",27),Ux(438," Function"),ng()(),wl(439,"td",22)(440,"em")(441,"strong"),Ux(442,"(opcional)"),ng()(),wl(443,"p"),Ux(444,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()(),wl(445,"tr",15)(446,"td",16)(447,"div",17)(448,"span",18),Ux(449," icon"),Ul(450,"br"),ng()()(),wl(451,"td",19)(452,"code",24),Ux(453,"string "),ng(),wl(454,"code",28),Ux(455," TemplateRef<void>"),ng()(),wl(456,"td",22)(457,"em")(458,"strong"),Ux(459,"(opcional)"),ng()(),wl(460,"p"),Ux(461,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(462,"p"),Ux(463,"Aceita \xEDcones da "),wl(464,"a",29),Ux(465,"Biblioteca de \xEDcones"),ng(),Ux(466,`, fontes externas (ex: Font Awesome)
ou um `),wl(467,"code"),Ux(468,"TemplateRef"),ng(),Ux(469," para \xEDcones customizados."),ng(),wl(470,"pre")(471,"code"),Ux(472,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ng()()()(),wl(473,"tr",15)(474,"td",16)(475,"div",17)(476,"span",18),Ux(477," label"),Ul(478,"br"),ng()()(),wl(479,"td",19)(480,"code",24),Ux(481,"string"),ng()(),wl(482,"td",22)(483,"p"),Ux(484,"R\xF3tulo da a\xE7\xE3o."),ng(),wl(485,"p"),Ux(486,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(487,"code"),Ux(488,"subItems"),ng(),Ux(489,"."),ng()()(),wl(490,"tr",15)(491,"td",16)(492,"div",17)(493,"span",18),Ux(494," selected"),Ul(495,"br"),ng()()(),wl(496,"td",19)(497,"code",23),Ux(498,"boolean"),ng()(),wl(499,"td",22)(500,"em")(501,"strong"),Ux(502,"(opcional)"),ng()(),wl(503,"p"),Ux(504,"Define se a a\xE7\xE3o est\xE1 selecionada."),ng()()(),wl(505,"tr",15)(506,"td",16)(507,"div",17)(508,"span",18),Ux(509," separator"),Ul(510,"br"),ng()()(),wl(511,"td",19)(512,"code",23),Ux(513,"boolean"),ng()(),wl(514,"td",22)(515,"em")(516,"strong"),Ux(517,"(opcional)"),ng()(),wl(518,"p"),Ux(519,"Atribui uma linha separadora acima do item."),ng()()(),wl(520,"tr",15)(521,"td",16)(522,"div",17)(523,"span",18),Ux(524," subItems"),Ul(525,"br"),ng()()(),wl(526,"td",19)(527,"code",30),Ux(528,"Array<PoPopupAction>"),ng()(),wl(529,"td",22)(530,"em")(531,"strong"),Ux(532,"(opcional)"),ng()(),wl(533,"p"),Ux(534,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),ng(),wl(535,"p"),Ux(536,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ng(),wl(537,"blockquote")(538,"p"),Ux(539,"As propriedades "),wl(540,"code"),Ux(541,"disabled"),ng(),Ux(542,", "),wl(543,"code"),Ux(544,"type"),ng(),Ux(545," e "),wl(546,"code"),Ux(547,"visible"),ng(),Ux(548," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),ng()(),wl(549,"blockquote")(550,"p"),Ux(551,"Quando "),wl(552,"code"),Ux(553,"url"),ng(),Ux(554," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),ng()(),wl(555,"blockquote")(556,"p"),Ux(557,"Em subn\xEDveis aninhados, o "),wl(558,"code"),Ux(559,"icon"),ng(),Ux(560," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),ng()()()(),wl(561,"tr",15)(562,"td",16)(563,"div",17)(564,"span",18),Ux(565," type"),Ul(566,"br"),ng()()(),wl(567,"td",19)(568,"code",24),Ux(569,"string"),ng()(),wl(570,"td",22)(571,"em")(572,"strong"),Ux(573,"(opcional)"),ng()(),wl(574,"p"),Ux(575,"Define a cor do item."),ng(),wl(576,"p"),Ux(577,"Valores v\xE1lidos:"),ng(),wl(578,"ul")(579,"li")(580,"code"),Ux(581,"default"),ng()(),wl(582,"li")(583,"code"),Ux(584,"danger"),ng()()()()(),wl(585,"tr",15)(586,"td",16)(587,"div",17)(588,"span",18),Ux(589," url"),Ul(590,"br"),ng()()(),wl(591,"td",19)(592,"code",24),Ux(593,"string"),ng()(),wl(594,"td",22)(595,"em")(596,"strong"),Ux(597,"(opcional)"),ng()(),wl(598,"p"),Ux(599,"URL para redirecionamento. Aceita rotas internas e links externos."),ng(),wl(600,"p"),Ux(601,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),wl(602,"code"),Ux(603,"url"),ng(),Ux(604," \xE9 informada em um agrupador, o clique "),wl(605,"strong"),Ux(606,"n\xE3o abrir\xE1 os subitens"),ng(),Ux(607,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ng(),wl(608,"blockquote")(609,"p"),Ux(610,"Quando informada, tem prioridade sobre a propriedade "),wl(611,"code"),Ux(612,"action"),ng(),Ux(613,"."),ng()()()(),wl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),Ux(618," visible"),Ul(619,"br"),ng()()(),wl(620,"td",19)(621,"code",23),Ux(622,"boolean "),ng(),wl(623,"code",27),Ux(624," Function"),ng()(),wl(625,"td",22)(626,"em")(627,"strong"),Ux(628,"(opcional)"),ng()(),wl(629,"p"),Ux(630,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()()()());},dependencies:[fP],encapsulation:2})}return i})();var Ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dropdown",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-dropdown-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-dropdown-basic-view")(6,"sample-po-dropdown-subitems-view")(7,"sample-po-dropdown-labs-view")(8,"sample-po-dropdown-social-network-view"),ng()()()),a&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,ue,ge,fe,Ee,we],encapsulation:2})}return i})();var We=[{path:"",component:Ce}],xe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[vL.forChild(We),vL]})}return i})();var Nt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[u5,xe]})}return i})();export{Nt as DocPoDropdownModule};