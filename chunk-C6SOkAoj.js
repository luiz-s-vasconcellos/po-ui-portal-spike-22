import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,c as r$1,dM as yNe,M as Wl,T as tw,bs as dN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aJ as Ghe,bH as E3,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,a3 as pNe,ab as lt,d8 as Vme,d9 as gNe,b7 as A3,ba as bNe,av as ql,aw as lo,ax as uo,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var ye=()=>({label:"Adicionar",value:1.1}),ue=a=>[a],xe=a=>({label:"Gerenciador de usu\xE1rios",value:1,subItems:a}),be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-basic"]],standalone:false,decls:1,vars:8,consts:[[3,"p-items"]],template:function(o,i){o&1&&Wl(0,"po-tree-view",0),o&2&&tw("p-items",dN(6,ue,dN(4,xe,dN(2,ue,uN(1,ye)))));},dependencies:[yNe],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tree View Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-tree-view
  [p-items]="[{ label: 'Gerenciador de usu\xE1rios', value: 1, subItems: [{ label: 'Adicionar', value: 1.1 }] }]"
>
</po-tree-view>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tree-view-basic"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return a})();var he=(()=>{class a{componentsSize="medium";event;items;itemProperties;parent;parentList;selectable;treeViewItem;maxLevel=4;singleSelect=false;componentsSizeOptions=[{value:"small",label:"Small"},{value:"medium",label:"Medium"}];itemPropertiesOptions=[{value:"selected",label:"Selected"},{value:"expanded",label:"Expanded"},{value:"disable-selection",label:"Disable Selection"}];ngOnInit(){this.restore();}add(r){r.selected=this.itemProperties.includes("selected"),r.expanded=this.itemProperties.includes("expanded"),r.isSelectable=!this.itemProperties.includes("disable-selection");let o=r$1({},r);if(!this.parent)this.items=[...this.items,o];else {let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o];}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items);}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`;}restore(){this.componentsSize="medium",this.event=void 0,this.items=[],this.parent=void 0,this.parentList=[],this.itemProperties=[],this.selectable=void 0,this.treeViewItem={},this.maxLevel=4;}getTreeViewItemNode(r,o){let i;if(r){for(let m of r)if(m.value===o){i=m;break}else i||(i=this.getTreeViewItemNode(m.subItems,o));return i}}updateParentList(r,o=0,i=[],m){return r.forEach(c=>{let{label:p,value:Ve}=c;i.push({label:`${"-".repeat(o)} ${p}`,value:Ve}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=m?o:0;}),i}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-labs"]],standalone:false,decls:24,vars:18,consts:[["treeViewItemForm","ngForm"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-components-size","p-items","p-selectable","p-max-level","p-single-select"],["p-label","Events"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Po Tree View Config"],["name","level","p-label","Max Level",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","selectable","p-label","Selectable",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","singleSelect","p-label","Single Select",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-5",3,"ngModelChange","ngModel","p-options"],["p-label","Po Tree View Item"],["name","parent","p-label","Parent Item","p-placeholder","Add tree view item",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","value","p-label","Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","itemProperties","p-columns","3","p-label","Item Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"o-md-4","po-lg-2",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"]],template:function(o,i){if(o&1){let m=Ex();Sl(0,"po-tree-view",1),ht("p-collapsed",function(p){return i.changeEvent("p-collapsed",p)})("p-expanded",function(p){return i.changeEvent("p-expanded",p)})("p-selected",function(p){return i.changeEvent("p-selected",p)})("p-unselected",function(p){return i.changeEvent("p-unselected",p)}),sg(),Wl(1,"po-divider",2),Sl(2,"div",3),Wl(3,"po-info",4),sg(),Wl(4,"po-divider",5),Sl(5,"div",3)(6,"po-input",6),Ew("ngModelChange",function(p){return Xy(m),tN(i.maxLevel,p)||(i.maxLevel=p),Qy(p)}),sg(),JA(),Sl(7,"po-switch",7),Ew("ngModelChange",function(p){return Xy(m),tN(i.selectable,p)||(i.selectable=p),Qy(p)}),sg(),JA(),Sl(8,"po-switch",8),Ew("ngModelChange",function(p){return Xy(m),tN(i.singleSelect,p)||(i.singleSelect=p),Qy(p)}),sg(),JA(),Sl(9,"po-radio-group",9),Ew("ngModelChange",function(p){return Xy(m),tN(i.componentsSize,p)||(i.componentsSize=p),Qy(p)}),sg(),JA(),sg(),Wl(10,"po-divider",10),Sl(11,"form",null,0)(13,"div",3)(14,"po-select",11),Ew("ngModelChange",function(p){return Xy(m),tN(i.parent,p)||(i.parent=p),Qy(p)}),sg(),JA(),Sl(15,"po-input",12),Ew("ngModelChange",function(p){return Xy(m),tN(i.treeViewItem.label,p)||(i.treeViewItem.label=p),Qy(p)}),sg(),JA(),Sl(16,"po-input",13),Ew("ngModelChange",function(p){return Xy(m),tN(i.treeViewItem.value,p)||(i.treeViewItem.value=p),Qy(p)}),sg(),JA(),sg(),Sl(17,"div",3)(18,"po-checkbox-group",14),Ew("ngModelChange",function(p){return Xy(m),tN(i.itemProperties,p)||(i.itemProperties=p),Qy(p)}),sg(),JA(),sg(),Sl(19,"div",3)(20,"po-button",15),ht("p-click",function(){Xy(m);let p=xx(12);return i.add(i.treeViewItem),p.reset(),Qy(i.itemProperties=[])}),sg()()(),Wl(21,"po-divider"),Sl(22,"div",3)(23,"po-button",16),ht("p-click",function(){return i.restore()}),sg()();}if(o&2){let m=xx(12);tw("p-components-size",i.componentsSize)("p-items",i.items)("p-selectable",i.selectable)("p-max-level",i.maxLevel)("p-single-select",i.singleSelect),Vp(3),tw("p-value",i.event),Vp(3),Dw("ngModel",i.maxLevel),t0(),Vp(),Dw("ngModel",i.selectable),t0(),Vp(),Dw("ngModel",i.singleSelect),t0(),Vp(),Dw("ngModel",i.componentsSize),tw("p-options",i.componentsSizeOptions),t0(),Vp(5),Dw("ngModel",i.parent),tw("p-options",i.parentList),t0(),Vp(),Dw("ngModel",i.treeViewItem.label),t0(),Vp(),Dw("ngModel",i.treeViewItem.value),t0(),Vp(2),Dw("ngModel",i.itemProperties),tw("p-options",i.itemPropertiesOptions),t0(),Vp(2),tw("p-disabled",m.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,Ghe,E3,Qhe,yNe],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tree View Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-tree-view
  [p-components-size]="componentsSize"
  [p-items]="items"
  [p-selectable]="selectable"
  (p-collapsed)="changeEvent('p-collapsed', $event)"
  (p-expanded)="changeEvent('p-expanded', $event)"
  (p-selected)="changeEvent('p-selected', $event)"
  (p-unselected)="changeEvent('p-unselected', $event)"
  [p-max-level]="maxLevel"
  [p-single-select]="singleSelect"
>
</po-tree-view>

<po-divider p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider p-label="Po Tree View Config"></po-divider>

<div class="po-row">
  <po-input class="po-md-6 po-lg-3" name="level" [(ngModel)]="maxLevel" p-label="Max Level"> </po-input>
  <po-switch class="po-md-6 po-lg-2" name="selectable" [(ngModel)]="selectable" p-label="Selectable"> </po-switch>
  <po-switch class="po-md-6 po-lg-2" name="singleSelect" [(ngModel)]="singleSelect" p-label="Single Select">
  </po-switch>

  <po-radio-group
    class="po-lg-5"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>
</div>

<po-divider p-label="Po Tree View Item"></po-divider>

<form #treeViewItemForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-4"
      name="parent"
      [(ngModel)]="parent"
      p-label="Parent Item"
      p-placeholder="Add tree view item"
      [p-options]="parentList"
    >
    </po-select>

    <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="treeViewItem.label" p-label="Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="value" [(ngModel)]="treeViewItem.value" p-label="Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-6"
      name="itemProperties"
      [(ngModel)]="itemProperties"
      p-columns="3"
      p-label="Item Properties"
      [p-options]="itemPropertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="o-md-4 po-lg-2"
      p-label="Add"
      [p-disabled]="treeViewItemForm.invalid"
      (p-click)="add(treeViewItem); treeViewItemForm.reset(); this.itemProperties = []"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-button class="po-md-6 po-lg-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-labs',
  templateUrl: 'sample-po-tree-view-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewLabsComponent implements OnInit {
  componentsSize: string = 'medium';
  event: string;
  items: Array<PoTreeViewItem>;
  itemProperties: Array<string>;
  parent: string;
  parentList: Array<PoSelectOption>;
  selectable: boolean;
  treeViewItem: PoTreeViewItem;
  maxLevel: number = 4;
  singleSelect: boolean = false;

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' }
  ];

  readonly itemPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'selected', label: 'Selected' },
    { value: 'expanded', label: 'Expanded' },
    { value: 'disable-selection', label: 'Disable Selection' }
  ];

  ngOnInit() {
    this.restore();
  }

  add(treeViewItem: PoTreeViewItem) {
    treeViewItem.selected = this.itemProperties.includes('selected');
    treeViewItem.expanded = this.itemProperties.includes('expanded');
    treeViewItem.isSelectable = !this.itemProperties.includes('disable-selection');

    const treeViewItemClone = { ...treeViewItem };

    if (!this.parent) {
      this.items = [...this.items, treeViewItemClone];
    } else {
      const treeViewItemNode = this.getTreeViewItemNode(this.items, this.parent);

      if (!treeViewItemNode.subItems) {
        treeViewItemNode.subItems = [];
      }

      treeViewItemNode.subItems = [...treeViewItemNode.subItems, treeViewItemClone];
    }

    this.items = [].concat(this.items);
    this.parentList = this.updateParentList(this.items);
  }

  changeEvent(event: string, treeViewItem: PoTreeViewItem) {
    this.event = \`\${event}: \${JSON.stringify(treeViewItem)}\`;
  }

  restore() {
    this.componentsSize = 'medium';
    this.event = undefined;
    this.items = [];
    this.parent = undefined;
    this.parentList = [];
    this.itemProperties = [];
    this.selectable = undefined;
    this.treeViewItem = <any>{};
    this.maxLevel = 4;
  }

  private getTreeViewItemNode(items: Array<PoTreeViewItem>, value: string) {
    let treeViewItemNode: PoTreeViewItem;

    if (!items) {
      return;
    }

    for (const item of items) {
      if (item.value === value) {
        treeViewItemNode = item;
        break;
      } else if (!treeViewItemNode) {
        treeViewItemNode = this.getTreeViewItemNode(item.subItems, value);
      }
    }

    return treeViewItemNode;
  }

  private updateParentList(
    items: Array<PoTreeViewItem>,
    level = 0,
    parentList = [],
    parentItem?: PoTreeViewItem
  ): Array<PoSelectOption> {
    items.forEach(item => {
      const { label, value } = item;

      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value });

      if (item.subItems) {
        this.updateParentList(item.subItems, ++level, parentList, item);
        --level;
      }

      level = !parentItem ? 0 : level;
    });

    return parentList;
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tree-view-labs"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Me,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,he],encapsulation:2})}return a})();var ge=(()=>{class a{items=[{label:"my_project",value:1,expanded:true,subItems:[{label:"angular.json",value:121},{label:"browserslist",value:122,subItems:[{label:"e2e",value:1223,subItems:[{label:"protractor.conf.js",value:12231},{label:"src",value:12232},{label:"tsconfig.json",value:12233}]}]},{label:"karma.conf.js",value:123},{label:"node_modules",value:124},{label:"package.json",value:125},{label:"package-lock.json",value:126},{label:"README.md",value:127},{label:"src",value:128,subItems:[{label:"app",value:1281},{label:"assets",value:1282},{label:"environments",value:1283},{label:"favicon.ico",value:1284},{label:"index.html",value:1285},{label:"main.ts",value:1286},{label:"polyfills.ts",value:1287},{label:"styles.css",value:1288},{label:"test.ts",value:1289}]},{label:"tsconfig.app.json",value:129},{label:"tsconfig.json",value:130},{label:"tsconfig.spec.json",value:131},{label:"eslint.json",value:132}]}];static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-folder-structure"]],standalone:false,decls:4,vars:1,consts:[["p-title","Angular folder structure"],[1,"po-mb-4","po-ml-1","po-text-color-neutral-dark-40"],[1,"po-lg-4","po-md-6",3,"p-items"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",0)(1,"p",1),Jx(2," This is the basic structure created using the Angular cli: "),sg(),Wl(3,"po-tree-view",2),sg()),o&2&&(Vp(3),tw("p-items",i.items));},dependencies:[pNe,yNe],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-folder-structure-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tree View - Folder Structure"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-folder-structure',
  templateUrl: 'sample-po-tree-view-folder-structure.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewFolderStructureComponent {
  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'my_project',
      value: 1,
      expanded: true,
      subItems: [
        { label: 'angular.json', value: 121 },
        {
          label: 'browserslist',
          value: 122,
          subItems: [
            {
              label: 'e2e',
              value: 1223,
              subItems: [
                { label: 'protractor.conf.js', value: 12231 },
                { label: 'src', value: 12232 },
                { label: 'tsconfig.json', value: 12233 }
              ]
            }
          ]
        },
        { label: 'karma.conf.js', value: 123 },
        { label: 'node_modules', value: 124 },
        { label: 'package.json', value: 125 },
        { label: 'package-lock.json', value: 126 },
        { label: 'README.md', value: 127 },
        {
          label: 'src',
          value: 128,
          subItems: [
            { label: 'app', value: 1281 },
            { label: 'assets', value: 1282 },
            { label: 'environments', value: 1283 },
            { label: 'favicon.ico', value: 1284 },
            { label: 'index.html', value: 1285 },
            { label: 'main.ts', value: 1286 },
            { label: 'polyfills.ts', value: 1287 },
            { label: 'styles.css', value: 1288 },
            { label: 'test.ts', value: 1289 }
          ]
        },
        { label: 'tsconfig.app.json', value: 129 },
        { label: 'tsconfig.json', value: 130 },
        { label: 'tsconfig.spec.json', value: 131 },
        { label: 'eslint.json', value: 132 }
      ]
    }
  ];
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tree-view-folder-structure"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return a})();var Ae=["stepper"],fe=(()=>{class a{stepper;columnsItemsSelected=[{property:"item"}];confirmed=false;itemsListSelected=[];items=[{label:"Condiments",value:"condiments",subItems:[{label:"Extra virgin Olive",value:"extraVirginOlive"},{label:"Mayonnaise",value:"Mayonnaise"},{label:"Tomato ketchup",value:"tomatoKetchup"},{label:"Soda",value:"soda"}]},{label:"Drinks",value:"drinks",subItems:[{label:"Orange juice",value:"orangeJuice"},{label:"Grape juice",value:"grapeJuice"},{label:"Beer",value:"beer"},{label:"Wine",value:"wine"},{label:"Soda",value:"soda"}]},{label:"Grains",value:122,subItems:[{label:"Black bean",value:"blackBean"},{label:"Chickpeas",value:"chickpeas"},{label:"Lentil",value:"lentil"},{label:"Pea",value:"pea"}]},{label:"Personal hygiene",value:"personalHygiene",subItems:[{label:"Body wash",value:"bodyWash"},{label:"Deodorant",value:"deodorant"},{label:"Shampoo",value:"deodorant"},{label:"Conditioner",value:"conditioner"},{label:"Sunscreen lotion",value:"sunscreenLotion"}]},{label:"Frozen foods",value:"frozenFoods",subItems:[{label:"Hamburguer",value:"hamburguer"},{label:"Lasagna",value:"lasagna"},{label:"Sandwiches",value:"sandwiches"}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label});}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label});}checkOut(){this.confirmed=true,this.stepper.next();}isConfirmed(){return !!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item));}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-supermarket"]],viewQuery:function(o,i){if(o&1&&ql(Ae,7),o&2){let m;lo(m=uo())&&(i.stepper=m.first);}},standalone:false,decls:18,vars:6,consts:[["stepper",""],["p-title","Welcome to the PO Supermarket"],[1,"po-offset-md-3","po-offset-lg-2","po-offset-xl-2"],[1,"po-row"],["p-step-icons","",1,"po-md-9","po-lg-8","po-mb-1"],["p-label","Step 1"],[1,"po-font-subtitle"],["p-selectable","",3,"p-selected","p-unselected","p-items"],["p-label","Step 2",3,"p-can-active-next-step"],["p-primary-label","Confirm","p-title","Selected items",3,"p-primary-action","p-disabled"],["p-striped","",3,"p-columns","p-items","p-hide-table-search"],["p-label","Step 3"],[1,"po-row","po-font-display"],["p-icon","po-icon an an-check"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",1)(1,"div",2)(2,"div",3)(3,"po-stepper",4,0)(5,"po-step",5)(6,"p",6),Jx(7,"Please, select your items:"),sg(),Sl(8,"po-tree-view",7),ht("p-selected",function(c){return i.addItem(c)})("p-unselected",function(c){return i.removeItem(c)}),sg()(),Sl(9,"po-step",8)(10,"po-widget",9),ht("p-primary-action",function(){return i.checkOut()}),Wl(11,"po-table",10),sg()(),Sl(12,"po-step",11)(13,"po-widget")(14,"div",12)(15,"p"),Jx(16,"Order dispatched"),sg(),Wl(17,"po-icon",13),sg()()()()()()()),o&2&&(Vp(8),tw("p-items",i.items),Vp(),tw("p-can-active-next-step",i.isConfirmed.bind(i)),Vp(),tw("p-disabled",i.itemsListSelected.length<1),Vp(),tw("p-columns",i.columnsItemsSelected)("p-items",i.itemsListSelected)("p-hide-table-search",false));},dependencies:[lt,pNe,Vme,gNe,A3,yNe,bNe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-supermarket-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tree View - Supermarket"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Welcome to the PO Supermarket">
  <div class="po-offset-md-3 po-offset-lg-2 po-offset-xl-2">
    <div class="po-row">
      <po-stepper #stepper p-step-icons class="po-md-9 po-lg-8 po-mb-1">
        <po-step p-label="Step 1">
          <p class="po-font-subtitle">Please, select your items:</p>

          <po-tree-view
            p-selectable
            [p-items]="items"
            (p-selected)="addItem($event)"
            (p-unselected)="removeItem($event)"
          >
          </po-tree-view>
        </po-step>

        <po-step p-label="Step 2" [p-can-active-next-step]="isConfirmed.bind(this)">
          <po-widget
            p-primary-label="Confirm"
            p-title="Selected items"
            [p-disabled]="itemsListSelected.length < 1"
            (p-primary-action)="checkOut()"
          >
            <po-table
              p-striped
              [p-columns]="columnsItemsSelected"
              [p-items]="itemsListSelected"
              [p-hide-table-search]="false"
            >
            </po-table>
          </po-widget>
        </po-step>

        <po-step p-label="Step 3">
          <po-widget>
            <div class="po-row po-font-display">
              <p>Order dispatched</p>
              <po-icon p-icon="po-icon an an-check"></po-icon>
            </div>
          </po-widget>
        </po-step>
      </po-stepper>
    </div>
  </div>
</po-page-default>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoStepperComponent, PoTableColumn, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-supermarket',
  templateUrl: 'sample-po-tree-view-supermarket.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewSupermarketComponent {
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;

  columnsItemsSelected: Array<PoTableColumn> = [{ property: 'item' }];
  confirmed: boolean = false;
  itemsListSelected: Array<any> = [];

  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'Condiments',
      value: 'condiments',
      subItems: [
        { label: 'Extra virgin Olive', value: 'extraVirginOlive' },
        { label: 'Mayonnaise', value: 'Mayonnaise' },
        { label: 'Tomato ketchup', value: 'tomatoKetchup' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Drinks',
      value: 'drinks',
      subItems: [
        { label: 'Orange juice', value: 'orangeJuice' },
        { label: 'Grape juice', value: 'grapeJuice' },
        { label: 'Beer', value: 'beer' },
        { label: 'Wine', value: 'wine' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Grains',
      value: 122,
      subItems: [
        { label: 'Black bean', value: 'blackBean' },
        { label: 'Chickpeas', value: 'chickpeas' },
        { label: 'Lentil', value: 'lentil' },
        { label: 'Pea', value: 'pea' }
      ]
    },
    {
      label: 'Personal hygiene',
      value: 'personalHygiene',
      subItems: [
        { label: 'Body wash', value: 'bodyWash' },
        { label: 'Deodorant', value: 'deodorant' },
        { label: 'Shampoo', value: 'deodorant' },
        { label: 'Conditioner', value: 'conditioner' },
        { label: 'Sunscreen lotion', value: 'sunscreenLotion' }
      ]
    },
    {
      label: 'Frozen foods',
      value: 'frozenFoods',
      subItems: [
        { label: 'Hamburguer', value: 'hamburguer' },
        { label: 'Lasagna', value: 'lasagna' },
        { label: 'Sandwiches', value: 'sandwiches' }
      ]
    }
  ];

  addItem(seletectedItem) {
    if (seletectedItem.subItems) {
      seletectedItem.subItems.forEach(itemSelected => {
        if (!this.itemsListSelected.some(item => item.item === itemSelected.label)) {
          this.itemsListSelected.push({ item: itemSelected.label });
        }
      });
    } else {
      if (!this.itemsListSelected.some(item => item.item === seletectedItem.label)) {
        this.itemsListSelected.push({ item: seletectedItem.label });
      }
    }
  }

  checkOut() {
    this.confirmed = true;
    this.stepper.next();
  }

  isConfirmed() {
    return !!this.confirmed;
  }

  removeItem(unseletectedItem) {
    if (unseletectedItem.subItems) {
      const removedValues = unseletectedItem.subItems.map(item => item.label);
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => !removedValues.includes(itemSelected.item)
      );
    } else {
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => unseletectedItem.label !== itemSelected.item
      );
    }
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tree-view-supermarket"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,fe],encapsulation:2})}return a})();var Ce=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-doc"]],standalone:false,decls:358,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoTreeViewItem>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","null"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoTreeViewModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-tree-view"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoTreeViewComponent"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a visualiza\xE7\xE3o das informa\xE7\xF5es de maneira
hier\xE1rquica, desta forma sendo poss\xEDvel utilizar at\xE9 4 n\xEDveis.`),sg(),Sl(18,"p"),Jx(19,"Nele \xE9 poss\xEDvel navegar entre os itens atrav\xE9s da tecla "),Sl(20,"em"),Jx(21,"tab"),sg(),Jx(22,`, permitindo expandir ou colapsar o item em foco
por meio das teclas `),Sl(23,"em"),Jx(24,"enter"),sg(),Jx(25," e "),Sl(26,"em"),Jx(27,"space"),sg(),Jx(28,"."),sg(),Sl(29,"p"),Jx(30,"Al\xE9m da navega\xE7\xE3o, o componente possibilita tamb\xE9m a sele\xE7\xE3o dos itens do primeiro ao \xFAltimo n\xEDvel, tanto de forma parcial como completa."),sg(),Sl(31,"p"),Jx(32,"O componente tamb\xE9m possui eventos disparados ao marcar/desmarcar e expandir/colapsar os itens. "),sg()(),Sl(33,"div",6)(34,"h4",7),Jx(35,"Seletor"),sg(),Sl(36,"pre",8),Jx(37,`<po-tree-view
    (p-collapsed)="EventEmitter"
    p-components-size="string"
    (p-expanded)="EventEmitter"
    p-items="Array<PoTreeViewItem>"
    p-max-level="number"
    p-selectable="boolean"
    (p-selected)="EventEmitter"
    p-single-select="boolean"
    (p-unselected)="EventEmitter" >
</po-tree-view>
`),sg()(),Sl(38,"h4",9),Jx(39,"Propriedades"),sg(),Sl(40,"table",10)(41,"tr",11)(42,"th",12),Jx(43,"Nome"),sg(),Sl(44,"th",12),Jx(45,"Tipo"),sg(),Sl(46,"th",12),Jx(47,"Padr\xE3o"),sg(),Sl(48,"th",12),Jx(49,"Descri\xE7\xE3o"),sg()(),Sl(50,"tr",13)(51,"td",14)(52,"div",15)(53,"span",16),Jx(54," (p-collapsed)"),Wl(55,"br"),sg()()(),Sl(56,"td",17)(57,"code",18),Jx(58,"EventEmitter"),sg()(),Sl(59,"td",19),Jx(60,"-"),sg(),Sl(61,"td",20)(62,"em")(63,"strong"),Jx(64,"(opcional)"),sg()(),Sl(65,"p"),Jx(66,"A\xE7\xE3o que ser\xE1 disparada ao colapsar um item."),sg(),Sl(67,"blockquote")(68,"p"),Jx(69,"Como par\xE2metro o componente envia o item colapsado."),sg()()()(),Sl(70,"tr",13)(71,"td",14)(72,"div",21)(73,"span",22),Jx(74," p-components-size"),Wl(75,"br"),sg()()(),Sl(76,"td",17)(77,"code",23),Jx(78,"string"),sg()(),Sl(79,"td",19)(80,"p")(81,"code"),Jx(82,"medium"),sg()()(),Sl(83,"td",20)(84,"em")(85,"strong"),Jx(86,"(opcional)"),sg()(),Sl(87,"p"),Jx(88,"Define o tamanho dos componentes de formul\xE1rio:"),sg(),Sl(89,"ul")(90,"li")(91,"code"),Jx(92,"small"),sg(),Jx(93,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(94,"li")(95,"code"),Jx(96,"medium"),sg(),Jx(97,": aplica a medida medium de cada componente."),sg()(),Sl(98,"blockquote")(99,"p"),Jx(100,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(101,"code"),Jx(102,"medium"),sg(),Jx(103,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(104,"a",24),Jx(105,"po-theme"),sg(),Jx(106,"."),sg()()()(),Sl(107,"tr",13)(108,"td",14)(109,"div",15)(110,"span",16),Jx(111," (p-expanded)"),Wl(112,"br"),sg()()(),Sl(113,"td",17)(114,"code",18),Jx(115,"EventEmitter"),sg()(),Sl(116,"td",19),Jx(117,"-"),sg(),Sl(118,"td",20)(119,"em")(120,"strong"),Jx(121,"(opcional)"),sg()(),Sl(122,"p"),Jx(123,"A\xE7\xE3o que ser\xE1 disparada ao expandir um item."),sg(),Sl(124,"blockquote")(125,"p"),Jx(126,"Como par\xE2metro o componente envia o item expandido."),sg()()()(),Sl(127,"tr",13)(128,"td",14)(129,"div",21)(130,"span",22),Jx(131," p-items"),Wl(132,"br"),sg()()(),Sl(133,"td",17)(134,"code",25),Jx(135,"Array<PoTreeViewItem>"),sg()(),Sl(136,"td",19),Jx(137,"-"),sg(),Sl(138,"td",20)(139,"p"),Jx(140,"Lista de itens do tipo "),Sl(141,"code"),Jx(142,"PoTreeViewItem"),sg(),Jx(143," que ser\xE1 renderizada pelo componente."),sg()()(),Sl(144,"tr",13)(145,"td",14)(146,"div",21)(147,"span",22),Jx(148," p-max-level"),Wl(149,"br"),sg()()(),Sl(150,"td",17)(151,"code",26),Jx(152,"number"),sg()(),Sl(153,"td",19)(154,"p"),Jx(155,"4"),sg()(),Sl(156,"td",20)(157,"em")(158,"strong"),Jx(159,"(opcional)"),sg()(),Sl(160,"p"),Jx(161,"Define o m\xE1ximo de n\xEDveis para o tree-view."),sg(),Sl(162,"blockquote")(163,"p"),Jx(164,"O valor padr\xE3o \xE9 4"),sg()()()(),Sl(165,"tr",13)(166,"td",14)(167,"div",21)(168,"span",22),Jx(169," p-selectable"),Wl(170,"br"),sg()()(),Sl(171,"td",17)(172,"code",27),Jx(173,"boolean"),sg()(),Sl(174,"td",19)(175,"p"),Jx(176,"false"),sg()(),Sl(177,"td",20)(178,"em")(179,"strong"),Jx(180,"(opcional)"),sg()(),Sl(181,"p"),Jx(182,"Habilita uma caixa de sele\xE7\xE3o para selecionar e/ou desmarcar um item da lista."),sg()()(),Sl(183,"tr",13)(184,"td",14)(185,"div",15)(186,"span",16),Jx(187," (p-selected)"),Wl(188,"br"),sg()()(),Sl(189,"td",17)(190,"code",18),Jx(191,"EventEmitter"),sg()(),Sl(192,"td",19),Jx(193,"-"),sg(),Sl(194,"td",20)(195,"em")(196,"strong"),Jx(197,"(opcional)"),sg()(),Sl(198,"p"),Jx(199,"A\xE7\xE3o que ser\xE1 disparada ao selecionar um item."),sg(),Sl(200,"blockquote")(201,"p"),Jx(202,"Como par\xE2metro o componente envia o item selecionado."),sg()()()(),Sl(203,"tr",13)(204,"td",14)(205,"div",21)(206,"span",22),Jx(207," p-single-select"),Wl(208,"br"),sg()()(),Sl(209,"td",17)(210,"code",27),Jx(211,"boolean"),sg()(),Sl(212,"td",19)(213,"p"),Jx(214,"false"),sg()(),Sl(215,"td",20)(216,"em")(217,"strong"),Jx(218,"(opcional)"),sg()(),Sl(219,"p"),Jx(220,"Habilita a sele\xE7\xE3o para item \xFAnico atr\xE1ves de po-radio."),sg()()(),Sl(221,"tr",13)(222,"td",14)(223,"div",15)(224,"span",16),Jx(225," (p-unselected)"),Wl(226,"br"),sg()()(),Sl(227,"td",17)(228,"code",18),Jx(229,"EventEmitter"),sg()(),Sl(230,"td",19),Jx(231,"-"),sg(),Sl(232,"td",20)(233,"em")(234,"strong"),Jx(235,"(opcional)"),sg()(),Sl(236,"p"),Jx(237,"A\xE7\xE3o que ser\xE1 disparada ao desfazer a sele\xE7\xE3o de um item."),sg(),Sl(238,"blockquote")(239,"p"),Jx(240,"Como par\xE2metro o componente envia o item que foi desmarcado."),sg()()()()(),Sl(241,"h3"),Jx(242,"Interfaces"),sg(),Sl(243,"h4",28)(244,"code",5),Jx(245,"PoTreeViewItem"),sg()(),Sl(246,"div",2)(247,"p"),Jx(248,"Interface para defini\xE7\xE3o dos itens do componente "),Sl(249,"code"),Jx(250,"po-tree-view"),sg(),Jx(251,"."),sg()(),Sl(252,"h4",9),Jx(253,"Propriedades"),sg(),Sl(254,"table",10)(255,"tr",11)(256,"th",12),Jx(257,"Nome"),sg(),Sl(258,"th",12),Jx(259,"Tipo"),sg(),Sl(260,"th",12),Jx(261,"Descri\xE7\xE3o"),sg()(),Sl(262,"tr",13)(263,"td",14)(264,"div",21)(265,"span",22),Jx(266," expanded"),Wl(267,"br"),sg()()(),Sl(268,"td",17)(269,"code",27),Jx(270,"boolean"),sg()(),Sl(271,"td",20)(272,"em")(273,"strong"),Jx(274,"(opcional)"),sg()(),Sl(275,"p"),Jx(276,"Expande o item."),sg()()(),Sl(277,"tr",13)(278,"td",14)(279,"div",21)(280,"span",22),Jx(281," isSelectable"),Wl(282,"br"),sg()()(),Sl(283,"td",17)(284,"code",27),Jx(285,"boolean "),sg(),Sl(286,"code",29),Jx(287," null"),sg()(),Sl(288,"td",20)(289,"em")(290,"strong"),Jx(291,"(opcional)"),sg()(),Sl(292,"p"),Jx(293,"Permite ativar/desativar a sele\xE7\xE3o do item"),sg()()(),Sl(294,"tr",13)(295,"td",14)(296,"div",21)(297,"span",22),Jx(298," label"),Wl(299,"br"),sg()()(),Sl(300,"td",17)(301,"code",23),Jx(302,"string"),sg()(),Sl(303,"td",20)(304,"p"),Jx(305,`Desabilita a selec\xE3o do item.
Texto de exibi\xE7\xE3o do item.`),sg()()(),Sl(306,"tr",13)(307,"td",14)(308,"div",21)(309,"span",22),Jx(310," selected"),Wl(311,"br"),sg()()(),Sl(312,"td",17)(313,"code",27),Jx(314,"boolean "),sg(),Sl(315,"code",29),Jx(316," null"),sg()(),Sl(317,"td",20)(318,"em")(319,"strong"),Jx(320,"(opcional)"),sg()(),Sl(321,"p"),Jx(322,"Marca o item como selecionado."),sg(),Sl(323,"blockquote")(324,"p"),Jx(325,"Caso o item que conter "),Sl(326,"code"),Jx(327,"subItems"),sg(),Jx(328," for selecionado, os seus itens filhos ser\xE3o tamb\xE9m selecionados."),sg()()()(),Sl(329,"tr",13)(330,"td",14)(331,"div",21)(332,"span",22),Jx(333," subItems"),Wl(334,"br"),sg()()(),Sl(335,"td",17)(336,"code",25),Jx(337,"Array<PoTreeViewItem>"),sg()(),Sl(338,"td",20)(339,"em")(340,"strong"),Jx(341,"(opcional)"),sg()(),Sl(342,"p"),Jx(343,"Lista de itens do pr\xF3ximo n\xEDvel, e assim consecutivamente at\xE9 que se atinja o quarto n\xEDvel."),sg()()(),Sl(344,"tr",13)(345,"td",14)(346,"div",21)(347,"span",22),Jx(348," value"),Wl(349,"br"),sg()()(),Sl(350,"td",17)(351,"code",23),Jx(352,"string "),sg(),Sl(353,"code",26),Jx(354," number"),sg()(),Sl(355,"td",20)(356,"p"),Jx(357,"Valor do item que poder\xE1 ser utilizado como refer\xEAncia para sua identifica\xE7\xE3o."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tree View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-tree-view-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-tree-view-basic-view")(6,"sample-po-tree-view-labs-view")(7,"sample-po-tree-view-folder-structure-view")(8,"sample-po-tree-view-supermarket-view"),sg()()()),o&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ve,Se,we,Ee,Ce],encapsulation:2})}return a})();var We=[{path:"",component:Te}],Pe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[pL.forChild(We),pL]})}return a})();var gt=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ar,Pe]})}return a})();export{gt as DocPoTreeViewModule};