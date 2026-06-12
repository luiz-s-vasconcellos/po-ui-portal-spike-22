import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,r as r$1,dR as LNe,R as Hl,Z as ZE,bw as oN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aJ as nme,bL as H3,cd as sme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,a3 as SNe,ab as lt,dd as Qme,de as ENe,b6 as U3,b9 as ONe,av as zl,aw as uo,ax as fo,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var xe=()=>({label:"Adicionar",value:1.1}),ue=a=>[a],ye=a=>({label:"Gerenciador de usu\xE1rios",value:1,subItems:a}),be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-basic"]],standalone:false,decls:1,vars:8,consts:[[3,"p-items"]],template:function(o,i){o&1&&Hl(0,"po-tree-view",0),o&2&&ZE("p-items",oN(6,ue,oN(4,ye,oN(2,ue,iN(1,xe)))));},dependencies:[LNe],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tree View Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-tree-view
  [p-items]="[{ label: 'Gerenciador de usu\xE1rios', value: 1, subItems: [{ label: 'Adicionar', value: 1.1 }] }]"
>
</po-tree-view>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tree-view-basic"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,be],encapsulation:2})}return a})();var Se=(()=>{class a{componentsSize="medium";event;items;itemProperties;parent;parentList;selectable;treeViewItem;maxLevel=4;singleSelect=false;componentsSizeOptions=[{value:"small",label:"Small"},{value:"medium",label:"Medium"}];itemPropertiesOptions=[{value:"selected",label:"Selected"},{value:"expanded",label:"Expanded"},{value:"disable-selection",label:"Disable Selection"}];ngOnInit(){this.restore();}add(r){r.selected=this.itemProperties.includes("selected"),r.expanded=this.itemProperties.includes("expanded"),r.isSelectable=!this.itemProperties.includes("disable-selection");let o=r$1({},r);if(!this.parent)this.items=[...this.items,o];else {let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o];}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items);}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`;}restore(){this.componentsSize="medium",this.event=void 0,this.items=[],this.parent=void 0,this.parentList=[],this.itemProperties=[],this.selectable=void 0,this.treeViewItem={},this.maxLevel=4;}getTreeViewItemNode(r,o){let i;if(r){for(let m of r)if(m.value===o){i=m;break}else i||(i=this.getTreeViewItemNode(m.subItems,o));return i}}updateParentList(r,o=0,i=[],m){return r.forEach(c=>{let{label:p,value:Ve}=c;i.push({label:`${"-".repeat(o)} ${p}`,value:Ve}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=m?o:0;}),i}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-labs"]],standalone:false,decls:24,vars:18,consts:[["treeViewItemForm","ngForm"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-components-size","p-items","p-selectable","p-max-level","p-single-select"],["p-label","Events"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Po Tree View Config"],["name","level","p-label","Max Level",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","selectable","p-label","Selectable",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","singleSelect","p-label","Single Select",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-5",3,"ngModelChange","ngModel","p-options"],["p-label","Po Tree View Item"],["name","parent","p-label","Parent Item","p-placeholder","Add tree view item",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","value","p-label","Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","itemProperties","p-columns","3","p-label","Item Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"o-md-4","po-lg-2",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"]],template:function(o,i){if(o&1){let m=gx();Cl(0,"po-tree-view",1),dt("p-collapsed",function(p){return i.changeEvent("p-collapsed",p)})("p-expanded",function(p){return i.changeEvent("p-expanded",p)})("p-selected",function(p){return i.changeEvent("p-selected",p)})("p-unselected",function(p){return i.changeEvent("p-unselected",p)}),og(),Hl(1,"po-divider",2),Cl(2,"div",3),Hl(3,"po-info",4),og(),Hl(4,"po-divider",5),Cl(5,"div",3)(6,"po-input",6),gw("ngModelChange",function(p){return Jy(m),Zx(i.maxLevel,p)||(i.maxLevel=p),e_(p)}),og(),Z0(),Cl(7,"po-switch",7),gw("ngModelChange",function(p){return Jy(m),Zx(i.selectable,p)||(i.selectable=p),e_(p)}),og(),Z0(),Cl(8,"po-switch",8),gw("ngModelChange",function(p){return Jy(m),Zx(i.singleSelect,p)||(i.singleSelect=p),e_(p)}),og(),Z0(),Cl(9,"po-radio-group",9),gw("ngModelChange",function(p){return Jy(m),Zx(i.componentsSize,p)||(i.componentsSize=p),e_(p)}),og(),Z0(),og(),Hl(10,"po-divider",10),Cl(11,"form",null,0)(13,"div",3)(14,"po-select",11),gw("ngModelChange",function(p){return Jy(m),Zx(i.parent,p)||(i.parent=p),e_(p)}),og(),Z0(),Cl(15,"po-input",12),gw("ngModelChange",function(p){return Jy(m),Zx(i.treeViewItem.label,p)||(i.treeViewItem.label=p),e_(p)}),og(),Z0(),Cl(16,"po-input",13),gw("ngModelChange",function(p){return Jy(m),Zx(i.treeViewItem.value,p)||(i.treeViewItem.value=p),e_(p)}),og(),Z0(),og(),Cl(17,"div",3)(18,"po-checkbox-group",14),gw("ngModelChange",function(p){return Jy(m),Zx(i.itemProperties,p)||(i.itemProperties=p),e_(p)}),og(),Z0(),og(),Cl(19,"div",3)(20,"po-button",15),dt("p-click",function(){Jy(m);let p=Sx(12);return i.add(i.treeViewItem),p.reset(),e_(i.itemProperties=[])}),og()()(),Hl(21,"po-divider"),Cl(22,"div",3)(23,"po-button",16),dt("p-click",function(){return i.restore()}),og()();}if(o&2){let m=Sx(12);ZE("p-components-size",i.componentsSize)("p-items",i.items)("p-selectable",i.selectable)("p-max-level",i.maxLevel)("p-single-select",i.singleSelect),Lp(3),ZE("p-value",i.event),Lp(3),pw("ngModel",i.maxLevel),X0(),Lp(),pw("ngModel",i.selectable),X0(),Lp(),pw("ngModel",i.singleSelect),X0(),Lp(),pw("ngModel",i.componentsSize),ZE("p-options",i.componentsSizeOptions),X0(),Lp(5),pw("ngModel",i.parent),ZE("p-options",i.parentList),X0(),Lp(),pw("ngModel",i.treeViewItem.label),X0(),Lp(),pw("ngModel",i.treeViewItem.value),X0(),Lp(2),pw("ngModel",i.itemProperties),ZE("p-options",i.itemPropertiesOptions),X0(),Lp(2),ZE("p-disabled",m.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,nme,H3,sme,LNe],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tree View Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-tree-view
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tree-view-labs"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Me,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return a})();var ge=(()=>{class a{items=[{label:"my_project",value:1,expanded:true,subItems:[{label:"angular.json",value:121},{label:"browserslist",value:122,subItems:[{label:"e2e",value:1223,subItems:[{label:"protractor.conf.js",value:12231},{label:"src",value:12232},{label:"tsconfig.json",value:12233}]}]},{label:"karma.conf.js",value:123},{label:"node_modules",value:124},{label:"package.json",value:125},{label:"package-lock.json",value:126},{label:"README.md",value:127},{label:"src",value:128,subItems:[{label:"app",value:1281},{label:"assets",value:1282},{label:"environments",value:1283},{label:"favicon.ico",value:1284},{label:"index.html",value:1285},{label:"main.ts",value:1286},{label:"polyfills.ts",value:1287},{label:"styles.css",value:1288},{label:"test.ts",value:1289}]},{label:"tsconfig.app.json",value:129},{label:"tsconfig.json",value:130},{label:"tsconfig.spec.json",value:131},{label:"eslint.json",value:132}]}];static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-folder-structure"]],standalone:false,decls:4,vars:1,consts:[["p-title","Angular folder structure"],[1,"po-mb-4","po-ml-1","po-text-color-neutral-dark-40"],[1,"po-lg-4","po-md-6",3,"p-items"]],template:function(o,i){o&1&&(Cl(0,"po-page-default",0)(1,"p",1),qx(2," This is the basic structure created using the Angular cli: "),og(),Hl(3,"po-tree-view",2),og()),o&2&&(Lp(3),ZE("p-items",i.items));},dependencies:[SNe,LNe],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-folder-structure-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tree View - Folder Structure"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tree-view-folder-structure"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return a})();var Oe=["stepper"],fe=(()=>{class a{stepper;columnsItemsSelected=[{property:"item"}];confirmed=false;itemsListSelected=[];items=[{label:"Condiments",value:"condiments",subItems:[{label:"Extra virgin Olive",value:"extraVirginOlive"},{label:"Mayonnaise",value:"Mayonnaise"},{label:"Tomato ketchup",value:"tomatoKetchup"},{label:"Soda",value:"soda"}]},{label:"Drinks",value:"drinks",subItems:[{label:"Orange juice",value:"orangeJuice"},{label:"Grape juice",value:"grapeJuice"},{label:"Beer",value:"beer"},{label:"Wine",value:"wine"},{label:"Soda",value:"soda"}]},{label:"Grains",value:122,subItems:[{label:"Black bean",value:"blackBean"},{label:"Chickpeas",value:"chickpeas"},{label:"Lentil",value:"lentil"},{label:"Pea",value:"pea"}]},{label:"Personal hygiene",value:"personalHygiene",subItems:[{label:"Body wash",value:"bodyWash"},{label:"Deodorant",value:"deodorant"},{label:"Shampoo",value:"deodorant"},{label:"Conditioner",value:"conditioner"},{label:"Sunscreen lotion",value:"sunscreenLotion"}]},{label:"Frozen foods",value:"frozenFoods",subItems:[{label:"Hamburguer",value:"hamburguer"},{label:"Lasagna",value:"lasagna"},{label:"Sandwiches",value:"sandwiches"}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label});}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label});}checkOut(){this.confirmed=true,this.stepper.next();}isConfirmed(){return !!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item));}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-supermarket"]],viewQuery:function(o,i){if(o&1&&zl(Oe,7),o&2){let m;uo(m=fo())&&(i.stepper=m.first);}},standalone:false,decls:18,vars:6,consts:[["stepper",""],["p-title","Welcome to the PO Supermarket"],[1,"po-offset-md-3","po-offset-lg-2","po-offset-xl-2"],[1,"po-row"],["p-step-icons","",1,"po-md-9","po-lg-8","po-mb-1"],["p-label","Step 1"],[1,"po-font-subtitle"],["p-selectable","",3,"p-selected","p-unselected","p-items"],["p-label","Step 2",3,"p-can-active-next-step"],["p-primary-label","Confirm","p-title","Selected items",3,"p-primary-action","p-disabled"],["p-striped","",3,"p-columns","p-items","p-hide-table-search"],["p-label","Step 3"],[1,"po-row","po-font-display"],["p-icon","po-icon an an-check"]],template:function(o,i){o&1&&(Cl(0,"po-page-default",1)(1,"div",2)(2,"div",3)(3,"po-stepper",4,0)(5,"po-step",5)(6,"p",6),qx(7,"Please, select your items:"),og(),Cl(8,"po-tree-view",7),dt("p-selected",function(c){return i.addItem(c)})("p-unselected",function(c){return i.removeItem(c)}),og()(),Cl(9,"po-step",8)(10,"po-widget",9),dt("p-primary-action",function(){return i.checkOut()}),Hl(11,"po-table",10),og()(),Cl(12,"po-step",11)(13,"po-widget")(14,"div",12)(15,"p"),qx(16,"Order dispatched"),og(),Hl(17,"po-icon",13),og()()()()()()()),o&2&&(Lp(8),ZE("p-items",i.items),Lp(),ZE("p-can-active-next-step",i.isConfirmed.bind(i)),Lp(),ZE("p-disabled",i.itemsListSelected.length<1),Lp(),ZE("p-columns",i.columnsItemsSelected)("p-items",i.itemsListSelected)("p-hide-table-search",false));},dependencies:[lt,SNe,Qme,ENe,U3,LNe,ONe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-supermarket-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tree View - Supermarket"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Welcome to the PO Supermarket">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tree-view-supermarket"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,fe],encapsulation:2})}return a})();var Ce=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-doc"]],standalone:false,decls:377,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoTreeViewItem>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","null"]],template:function(o,i){o&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoTreeViewModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-tree-view"),og(),qx(9,"."),og(),Cl(10,"blockquote")(11,"p"),qx(12,"Para o correto funcionamento do componente "),Cl(13,"code"),qx(14,"po-tree-view"),og(),qx(15,", deve ser importado o m\xF3dulo "),Cl(16,"code"),qx(17,"BrowserAnimationsModule"),og(),qx(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),og()(),Cl(19,"p"),qx(20,"M\xF3dulo da aplica\xE7\xE3o:"),og(),Cl(21,"pre")(22,"code"),qx(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),og()(),Cl(24,"p"),qx(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),og(),Cl(26,"pre")(27,"code"),qx(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),og()()(),Cl(29,"h3",3),qx(30,"Componente"),og(),Cl(31,"h4",4)(32,"code",5),qx(33,"PoTreeViewComponent"),og()(),Cl(34,"div",2)(35,"p"),qx(36,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a visualiza\xE7\xE3o das informa\xE7\xF5es de maneira
hier\xE1rquica, desta forma sendo poss\xEDvel utilizar at\xE9 4 n\xEDveis.`),og(),Cl(37,"p"),qx(38,"Nele \xE9 poss\xEDvel navegar entre os itens atrav\xE9s da tecla "),Cl(39,"em"),qx(40,"tab"),og(),qx(41,`, permitindo expandir ou colapsar o item em foco
por meio das teclas `),Cl(42,"em"),qx(43,"enter"),og(),qx(44," e "),Cl(45,"em"),qx(46,"space"),og(),qx(47,"."),og(),Cl(48,"p"),qx(49,"Al\xE9m da navega\xE7\xE3o, o componente possibilita tamb\xE9m a sele\xE7\xE3o dos itens do primeiro ao \xFAltimo n\xEDvel, tanto de forma parcial como completa."),og(),Cl(50,"p"),qx(51,"O componente tamb\xE9m possui eventos disparados ao marcar/desmarcar e expandir/colapsar os itens. "),og()(),Cl(52,"div",6)(53,"h4",7),qx(54,"Seletor"),og(),Cl(55,"pre",8),qx(56,`<po-tree-view
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
`),og()(),Cl(57,"h4",9),qx(58,"Propriedades"),og(),Cl(59,"table",10)(60,"tr",11)(61,"th",12),qx(62,"Nome"),og(),Cl(63,"th",12),qx(64,"Tipo"),og(),Cl(65,"th",12),qx(66,"Padr\xE3o"),og(),Cl(67,"th",12),qx(68,"Descri\xE7\xE3o"),og()(),Cl(69,"tr",13)(70,"td",14)(71,"div",15)(72,"span",16),qx(73," (p-collapsed)"),Hl(74,"br"),og()()(),Cl(75,"td",17)(76,"code",18),qx(77,"EventEmitter"),og()(),Cl(78,"td",19),qx(79,"-"),og(),Cl(80,"td",20)(81,"em")(82,"strong"),qx(83,"(opcional)"),og()(),Cl(84,"p"),qx(85,"A\xE7\xE3o que ser\xE1 disparada ao colapsar um item."),og(),Cl(86,"blockquote")(87,"p"),qx(88,"Como par\xE2metro o componente envia o item colapsado."),og()()()(),Cl(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),qx(93," p-components-size"),Hl(94,"br"),og()()(),Cl(95,"td",17)(96,"code",23),qx(97,"string"),og()(),Cl(98,"td",19)(99,"p")(100,"code"),qx(101,"medium"),og()()(),Cl(102,"td",20)(103,"em")(104,"strong"),qx(105,"(opcional)"),og()(),Cl(106,"p"),qx(107,"Define o tamanho dos componentes de formul\xE1rio:"),og(),Cl(108,"ul")(109,"li")(110,"code"),qx(111,"small"),og(),qx(112,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(113,"li")(114,"code"),qx(115,"medium"),og(),qx(116,": aplica a medida medium de cada componente."),og()(),Cl(117,"blockquote")(118,"p"),qx(119,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(120,"code"),qx(121,"medium"),og(),qx(122,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(123,"a",24),qx(124,"po-theme"),og(),qx(125,"."),og()()()(),Cl(126,"tr",13)(127,"td",14)(128,"div",15)(129,"span",16),qx(130," (p-expanded)"),Hl(131,"br"),og()()(),Cl(132,"td",17)(133,"code",18),qx(134,"EventEmitter"),og()(),Cl(135,"td",19),qx(136,"-"),og(),Cl(137,"td",20)(138,"em")(139,"strong"),qx(140,"(opcional)"),og()(),Cl(141,"p"),qx(142,"A\xE7\xE3o que ser\xE1 disparada ao expandir um item."),og(),Cl(143,"blockquote")(144,"p"),qx(145,"Como par\xE2metro o componente envia o item expandido."),og()()()(),Cl(146,"tr",13)(147,"td",14)(148,"div",21)(149,"span",22),qx(150," p-items"),Hl(151,"br"),og()()(),Cl(152,"td",17)(153,"code",25),qx(154,"Array<PoTreeViewItem>"),og()(),Cl(155,"td",19),qx(156,"-"),og(),Cl(157,"td",20)(158,"p"),qx(159,"Lista de itens do tipo "),Cl(160,"code"),qx(161,"PoTreeViewItem"),og(),qx(162," que ser\xE1 renderizada pelo componente."),og()()(),Cl(163,"tr",13)(164,"td",14)(165,"div",21)(166,"span",22),qx(167," p-max-level"),Hl(168,"br"),og()()(),Cl(169,"td",17)(170,"code",26),qx(171,"number"),og()(),Cl(172,"td",19)(173,"p"),qx(174,"4"),og()(),Cl(175,"td",20)(176,"em")(177,"strong"),qx(178,"(opcional)"),og()(),Cl(179,"p"),qx(180,"Define o m\xE1ximo de n\xEDveis para o tree-view."),og(),Cl(181,"blockquote")(182,"p"),qx(183,"O valor padr\xE3o \xE9 4"),og()()()(),Cl(184,"tr",13)(185,"td",14)(186,"div",21)(187,"span",22),qx(188," p-selectable"),Hl(189,"br"),og()()(),Cl(190,"td",17)(191,"code",27),qx(192,"boolean"),og()(),Cl(193,"td",19)(194,"p"),qx(195,"false"),og()(),Cl(196,"td",20)(197,"em")(198,"strong"),qx(199,"(opcional)"),og()(),Cl(200,"p"),qx(201,"Habilita uma caixa de sele\xE7\xE3o para selecionar e/ou desmarcar um item da lista."),og()()(),Cl(202,"tr",13)(203,"td",14)(204,"div",15)(205,"span",16),qx(206," (p-selected)"),Hl(207,"br"),og()()(),Cl(208,"td",17)(209,"code",18),qx(210,"EventEmitter"),og()(),Cl(211,"td",19),qx(212,"-"),og(),Cl(213,"td",20)(214,"em")(215,"strong"),qx(216,"(opcional)"),og()(),Cl(217,"p"),qx(218,"A\xE7\xE3o que ser\xE1 disparada ao selecionar um item."),og(),Cl(219,"blockquote")(220,"p"),qx(221,"Como par\xE2metro o componente envia o item selecionado."),og()()()(),Cl(222,"tr",13)(223,"td",14)(224,"div",21)(225,"span",22),qx(226," p-single-select"),Hl(227,"br"),og()()(),Cl(228,"td",17)(229,"code",27),qx(230,"boolean"),og()(),Cl(231,"td",19)(232,"p"),qx(233,"false"),og()(),Cl(234,"td",20)(235,"em")(236,"strong"),qx(237,"(opcional)"),og()(),Cl(238,"p"),qx(239,"Habilita a sele\xE7\xE3o para item \xFAnico atr\xE1ves de po-radio."),og()()(),Cl(240,"tr",13)(241,"td",14)(242,"div",15)(243,"span",16),qx(244," (p-unselected)"),Hl(245,"br"),og()()(),Cl(246,"td",17)(247,"code",18),qx(248,"EventEmitter"),og()(),Cl(249,"td",19),qx(250,"-"),og(),Cl(251,"td",20)(252,"em")(253,"strong"),qx(254,"(opcional)"),og()(),Cl(255,"p"),qx(256,"A\xE7\xE3o que ser\xE1 disparada ao desfazer a sele\xE7\xE3o de um item."),og(),Cl(257,"blockquote")(258,"p"),qx(259,"Como par\xE2metro o componente envia o item que foi desmarcado."),og()()()()(),Cl(260,"h3"),qx(261,"Interfaces"),og(),Cl(262,"h4",28)(263,"code",5),qx(264,"PoTreeViewItem"),og()(),Cl(265,"div",2)(266,"p"),qx(267,"Interface para defini\xE7\xE3o dos itens do componente "),Cl(268,"code"),qx(269,"po-tree-view"),og(),qx(270,"."),og()(),Cl(271,"h4",9),qx(272,"Propriedades"),og(),Cl(273,"table",10)(274,"tr",11)(275,"th",12),qx(276,"Nome"),og(),Cl(277,"th",12),qx(278,"Tipo"),og(),Cl(279,"th",12),qx(280,"Descri\xE7\xE3o"),og()(),Cl(281,"tr",13)(282,"td",14)(283,"div",21)(284,"span",22),qx(285," expanded"),Hl(286,"br"),og()()(),Cl(287,"td",17)(288,"code",27),qx(289,"boolean"),og()(),Cl(290,"td",20)(291,"em")(292,"strong"),qx(293,"(opcional)"),og()(),Cl(294,"p"),qx(295,"Expande o item."),og()()(),Cl(296,"tr",13)(297,"td",14)(298,"div",21)(299,"span",22),qx(300," isSelectable"),Hl(301,"br"),og()()(),Cl(302,"td",17)(303,"code",27),qx(304,"boolean "),og(),Cl(305,"code",29),qx(306," null"),og()(),Cl(307,"td",20)(308,"em")(309,"strong"),qx(310,"(opcional)"),og()(),Cl(311,"p"),qx(312,"Permite ativar/desativar a sele\xE7\xE3o do item"),og()()(),Cl(313,"tr",13)(314,"td",14)(315,"div",21)(316,"span",22),qx(317," label"),Hl(318,"br"),og()()(),Cl(319,"td",17)(320,"code",23),qx(321,"string"),og()(),Cl(322,"td",20)(323,"p"),qx(324,`Desabilita a selec\xE3o do item.
Texto de exibi\xE7\xE3o do item.`),og()()(),Cl(325,"tr",13)(326,"td",14)(327,"div",21)(328,"span",22),qx(329," selected"),Hl(330,"br"),og()()(),Cl(331,"td",17)(332,"code",27),qx(333,"boolean "),og(),Cl(334,"code",29),qx(335," null"),og()(),Cl(336,"td",20)(337,"em")(338,"strong"),qx(339,"(opcional)"),og()(),Cl(340,"p"),qx(341,"Marca o item como selecionado."),og(),Cl(342,"blockquote")(343,"p"),qx(344,"Caso o item que conter "),Cl(345,"code"),qx(346,"subItems"),og(),qx(347," for selecionado, os seus itens filhos ser\xE3o tamb\xE9m selecionados."),og()()()(),Cl(348,"tr",13)(349,"td",14)(350,"div",21)(351,"span",22),qx(352," subItems"),Hl(353,"br"),og()()(),Cl(354,"td",17)(355,"code",25),qx(356,"Array<PoTreeViewItem>"),og()(),Cl(357,"td",20)(358,"em")(359,"strong"),qx(360,"(opcional)"),og()(),Cl(361,"p"),qx(362,"Lista de itens do pr\xF3ximo n\xEDvel, e assim consecutivamente at\xE9 que se atinja o quarto n\xEDvel."),og()()(),Cl(363,"tr",13)(364,"td",14)(365,"div",21)(366,"span",22),qx(367," value"),Hl(368,"br"),og()()(),Cl(369,"td",17)(370,"code",23),qx(371,"string "),og(),Cl(372,"code",26),qx(373," number"),og()(),Cl(374,"td",20)(375,"p"),qx(376,"Valor do item que poder\xE1 ser utilizado como refer\xEAncia para sua identifica\xE7\xE3o."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tree View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-tree-view-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-tree-view-basic-view")(6,"sample-po-tree-view-labs-view")(7,"sample-po-tree-view-folder-structure-view")(8,"sample-po-tree-view-supermarket-view"),og()()()),o&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ve,he,we,Ee,Ce],encapsulation:2})}return a})();var We=[{path:"",component:Te}],Pe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[bL.forChild(We),bL]})}return a})();var gt=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ca,Pe]})}return a})();export{gt as DocPoTreeViewModule};