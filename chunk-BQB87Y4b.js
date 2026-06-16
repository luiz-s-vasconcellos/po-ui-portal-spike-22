import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,r as r$1,dm as eR,N as Ul,S as YE,bi as Jx,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bB as ga,ai as ya,bd as na,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,a3 as D3,ab as J,cE as Md,cF as DV,aR as ty,aU as IR,as as $l,at as uo,au as fo,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var Ie=()=>({label:"Adicionar",value:1.1}),ve=a=>[a],ke=a=>({label:"Gerenciador de usu\xE1rios",value:1,subItems:a}),Se=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-basic"]],standalone:false,decls:1,vars:8,consts:[[3,"p-items"]],template:function(o,i){o&1&&Ul(0,"po-tree-view",0),o&2&&YE("p-items",Jx(6,ve,Jx(4,ke,Jx(2,ve,Qx(1,Ie)))));},dependencies:[eR],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tree View Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-tree-view
  [p-items]="[{ label: 'Gerenciador de usu\xE1rios', value: 1, subItems: [{ label: 'Adicionar', value: 1.1 }] }]"
>
</po-tree-view>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tree-view-basic"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Me,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Se],encapsulation:2})}return a})();var ge=(()=>{class a{componentsSize="medium";event;items;itemProperties;parent;parentList;selectable;treeViewItem;maxLevel=4;singleSelect=false;componentsSizeOptions=[{value:"small",label:"Small"},{value:"medium",label:"Medium"}];itemPropertiesOptions=[{value:"selected",label:"Selected"},{value:"expanded",label:"Expanded"},{value:"disable-selection",label:"Disable Selection"}];ngOnInit(){this.restore();}add(r){r.selected=this.itemProperties.includes("selected"),r.expanded=this.itemProperties.includes("expanded"),r.isSelectable=!this.itemProperties.includes("disable-selection");let o=r$1({},r);if(!this.parent)this.items=[...this.items,o];else {let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o];}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items);}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`;}restore(){this.componentsSize="medium",this.event=void 0,this.items=[],this.parent=void 0,this.parentList=[],this.itemProperties=[],this.selectable=void 0,this.treeViewItem={},this.maxLevel=4;}getTreeViewItemNode(r,o){let i;if(r){for(let m of r)if(m.value===o){i=m;break}else i||(i=this.getTreeViewItemNode(m.subItems,o));return i}}updateParentList(r,o=0,i=[],m){return r.forEach(c=>{let{label:p,value:_e}=c;i.push({label:`${"-".repeat(o)} ${p}`,value:_e}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=m?o:0;}),i}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-labs"]],standalone:false,decls:24,vars:18,consts:[["treeViewItemForm","ngForm"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-components-size","p-items","p-selectable","p-max-level","p-single-select"],["p-label","Events"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Po Tree View Config"],["name","level","p-label","Max Level",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","selectable","p-label","Selectable",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","singleSelect","p-label","Single Select",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-5",3,"ngModelChange","ngModel","p-options"],["p-label","Po Tree View Item"],["name","parent","p-label","Parent Item","p-placeholder","Add tree view item",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","value","p-label","Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","itemProperties","p-columns","3","p-label","Item Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"o-md-4","po-lg-2",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"]],template:function(o,i){if(o&1){let m=lx();wl(0,"po-tree-view",1),ut("p-collapsed",function(p){return i.changeEvent("p-collapsed",p)})("p-expanded",function(p){return i.changeEvent("p-expanded",p)})("p-selected",function(p){return i.changeEvent("p-selected",p)})("p-unselected",function(p){return i.changeEvent("p-unselected",p)}),ng(),Ul(1,"po-divider",2),wl(2,"div",3),Ul(3,"po-info",4),ng(),Ul(4,"po-divider",5),wl(5,"div",3)(6,"po-input",6),pw("ngModelChange",function(p){return Qy(m),$x(i.maxLevel,p)||(i.maxLevel=p),Jy(p)}),ng(),$0(),wl(7,"po-switch",7),pw("ngModelChange",function(p){return Qy(m),$x(i.selectable,p)||(i.selectable=p),Jy(p)}),ng(),$0(),wl(8,"po-switch",8),pw("ngModelChange",function(p){return Qy(m),$x(i.singleSelect,p)||(i.singleSelect=p),Jy(p)}),ng(),$0(),wl(9,"po-radio-group",9),pw("ngModelChange",function(p){return Qy(m),$x(i.componentsSize,p)||(i.componentsSize=p),Jy(p)}),ng(),$0(),ng(),Ul(10,"po-divider",10),wl(11,"form",null,0)(13,"div",3)(14,"po-select",11),pw("ngModelChange",function(p){return Qy(m),$x(i.parent,p)||(i.parent=p),Jy(p)}),ng(),$0(),wl(15,"po-input",12),pw("ngModelChange",function(p){return Qy(m),$x(i.treeViewItem.label,p)||(i.treeViewItem.label=p),Jy(p)}),ng(),$0(),wl(16,"po-input",13),pw("ngModelChange",function(p){return Qy(m),$x(i.treeViewItem.value,p)||(i.treeViewItem.value=p),Jy(p)}),ng(),$0(),ng(),wl(17,"div",3)(18,"po-checkbox-group",14),pw("ngModelChange",function(p){return Qy(m),$x(i.itemProperties,p)||(i.itemProperties=p),Jy(p)}),ng(),$0(),ng(),wl(19,"div",3)(20,"po-button",15),ut("p-click",function(){Qy(m);let p=_x(12);return i.add(i.treeViewItem),p.reset(),Jy(i.itemProperties=[])}),ng()()(),Ul(21,"po-divider"),wl(22,"div",3)(23,"po-button",16),ut("p-click",function(){return i.restore()}),ng()();}if(o&2){let m=_x(12);YE("p-components-size",i.componentsSize)("p-items",i.items)("p-selectable",i.selectable)("p-max-level",i.maxLevel)("p-single-select",i.singleSelect),Pp(3),YE("p-value",i.event),Pp(3),hw("ngModel",i.maxLevel),G0(),Pp(),hw("ngModel",i.selectable),G0(),Pp(),hw("ngModel",i.singleSelect),G0(),Pp(),hw("ngModel",i.componentsSize),YE("p-options",i.componentsSizeOptions),G0(),Pp(5),hw("ngModel",i.parent),YE("p-options",i.parentList),G0(),Pp(),hw("ngModel",i.treeViewItem.label),G0(),Pp(),hw("ngModel",i.treeViewItem.value),G0(),Pp(2),hw("ngModel",i.itemProperties),YE("p-options",i.itemPropertiesOptions),G0(),Pp(2),YE("p-disabled",m.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ga,ya,na,Vp,eR],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tree View Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-tree-view
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tree-view-labs"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ae,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return a})();var Ee=(()=>{class a{items=[{label:"my_project",value:1,expanded:true,subItems:[{label:"angular.json",value:121},{label:"browserslist",value:122,subItems:[{label:"e2e",value:1223,subItems:[{label:"protractor.conf.js",value:12231},{label:"src",value:12232},{label:"tsconfig.json",value:12233}]}]},{label:"karma.conf.js",value:123},{label:"node_modules",value:124},{label:"package.json",value:125},{label:"package-lock.json",value:126},{label:"README.md",value:127},{label:"src",value:128,subItems:[{label:"app",value:1281},{label:"assets",value:1282},{label:"environments",value:1283},{label:"favicon.ico",value:1284},{label:"index.html",value:1285},{label:"main.ts",value:1286},{label:"polyfills.ts",value:1287},{label:"styles.css",value:1288},{label:"test.ts",value:1289}]},{label:"tsconfig.app.json",value:129},{label:"tsconfig.json",value:130},{label:"tsconfig.spec.json",value:131},{label:"eslint.json",value:132}]}];static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-folder-structure"]],standalone:false,decls:4,vars:1,consts:[["p-title","Angular folder structure"],[1,"po-mb-4","po-ml-1","po-text-color-neutral-dark-40"],[1,"po-lg-4","po-md-6",3,"p-items"]],template:function(o,i){o&1&&(wl(0,"po-page-default",0)(1,"p",1),Ux(2," This is the basic structure created using the Angular cli: "),ng(),Ul(3,"po-tree-view",2),ng()),o&2&&(Pp(3),YE("p-items",i.items));},dependencies:[D3,eR],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-folder-structure-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tree View - Folder Structure"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tree-view-folder-structure"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ze,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return a})();var je=["stepper"],Te=(()=>{class a{stepper;columnsItemsSelected=[{property:"item"}];confirmed=false;itemsListSelected=[];items=[{label:"Condiments",value:"condiments",subItems:[{label:"Extra virgin Olive",value:"extraVirginOlive"},{label:"Mayonnaise",value:"Mayonnaise"},{label:"Tomato ketchup",value:"tomatoKetchup"},{label:"Soda",value:"soda"}]},{label:"Drinks",value:"drinks",subItems:[{label:"Orange juice",value:"orangeJuice"},{label:"Grape juice",value:"grapeJuice"},{label:"Beer",value:"beer"},{label:"Wine",value:"wine"},{label:"Soda",value:"soda"}]},{label:"Grains",value:122,subItems:[{label:"Black bean",value:"blackBean"},{label:"Chickpeas",value:"chickpeas"},{label:"Lentil",value:"lentil"},{label:"Pea",value:"pea"}]},{label:"Personal hygiene",value:"personalHygiene",subItems:[{label:"Body wash",value:"bodyWash"},{label:"Deodorant",value:"deodorant"},{label:"Shampoo",value:"deodorant"},{label:"Conditioner",value:"conditioner"},{label:"Sunscreen lotion",value:"sunscreenLotion"}]},{label:"Frozen foods",value:"frozenFoods",subItems:[{label:"Hamburguer",value:"hamburguer"},{label:"Lasagna",value:"lasagna"},{label:"Sandwiches",value:"sandwiches"}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label});}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label});}checkOut(){this.confirmed=true,this.stepper.next();}isConfirmed(){return !!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item));}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-supermarket"]],viewQuery:function(o,i){if(o&1&&$l(je,7),o&2){let m;uo(m=fo())&&(i.stepper=m.first);}},standalone:false,decls:18,vars:6,consts:[["stepper",""],["p-title","Welcome to the PO Supermarket"],[1,"po-offset-md-3","po-offset-lg-2","po-offset-xl-2"],[1,"po-row"],["p-step-icons","",1,"po-md-9","po-lg-8","po-mb-1"],["p-label","Step 1"],[1,"po-font-subtitle"],["p-selectable","",3,"p-selected","p-unselected","p-items"],["p-label","Step 2",3,"p-can-active-next-step"],["p-primary-label","Confirm","p-title","Selected items",3,"p-primary-action","p-disabled"],["p-striped","",3,"p-columns","p-items","p-hide-table-search"],["p-label","Step 3"],[1,"po-row","po-font-display"],["p-icon","po-icon an an-check"]],template:function(o,i){o&1&&(wl(0,"po-page-default",1)(1,"div",2)(2,"div",3)(3,"po-stepper",4,0)(5,"po-step",5)(6,"p",6),Ux(7,"Please, select your items:"),ng(),wl(8,"po-tree-view",7),ut("p-selected",function(c){return i.addItem(c)})("p-unselected",function(c){return i.removeItem(c)}),ng()(),wl(9,"po-step",8)(10,"po-widget",9),ut("p-primary-action",function(){return i.checkOut()}),Ul(11,"po-table",10),ng()(),wl(12,"po-step",11)(13,"po-widget")(14,"div",12)(15,"p"),Ux(16,"Order dispatched"),ng(),Ul(17,"po-icon",13),ng()()()()()()()),o&2&&(Pp(8),YE("p-items",i.items),Pp(),YE("p-can-active-next-step",i.isConfirmed.bind(i)),Pp(),YE("p-disabled",i.itemsListSelected.length<1),Pp(),YE("p-columns",i.columnsItemsSelected)("p-items",i.itemsListSelected)("p-hide-table-search",false));},dependencies:[J,D3,Md,DV,ty,eR,IR],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-supermarket-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tree View - Supermarket"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Welcome to the PO Supermarket">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tree-view-supermarket"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,We,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Te],encapsulation:2})}return a})();var Ve=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-doc"]],standalone:false,decls:377,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoTreeViewItem>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","null"]],template:function(o,i){o&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoTreeViewModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-tree-view"),ng(),Ux(9,"."),ng(),wl(10,"blockquote")(11,"p"),Ux(12,"Para o correto funcionamento do componente "),wl(13,"code"),Ux(14,"po-tree-view"),ng(),Ux(15,", deve ser importado o m\xF3dulo "),wl(16,"code"),Ux(17,"BrowserAnimationsModule"),ng(),Ux(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),ng()(),wl(19,"p"),Ux(20,"M\xF3dulo da aplica\xE7\xE3o:"),ng(),wl(21,"pre")(22,"code"),Ux(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),ng()(),wl(24,"p"),Ux(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),ng(),wl(26,"pre")(27,"code"),Ux(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),ng()()(),wl(29,"h3",3),Ux(30,"Componente"),ng(),wl(31,"h4",4)(32,"code",5),Ux(33,"PoTreeViewComponent"),ng()(),wl(34,"div",2)(35,"p"),Ux(36,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a visualiza\xE7\xE3o das informa\xE7\xF5es de maneira
hier\xE1rquica, desta forma sendo poss\xEDvel utilizar at\xE9 4 n\xEDveis.`),ng(),wl(37,"p"),Ux(38,"Nele \xE9 poss\xEDvel navegar entre os itens atrav\xE9s da tecla "),wl(39,"em"),Ux(40,"tab"),ng(),Ux(41,`, permitindo expandir ou colapsar o item em foco
por meio das teclas `),wl(42,"em"),Ux(43,"enter"),ng(),Ux(44," e "),wl(45,"em"),Ux(46,"space"),ng(),Ux(47,"."),ng(),wl(48,"p"),Ux(49,"Al\xE9m da navega\xE7\xE3o, o componente possibilita tamb\xE9m a sele\xE7\xE3o dos itens do primeiro ao \xFAltimo n\xEDvel, tanto de forma parcial como completa."),ng(),wl(50,"p"),Ux(51,"O componente tamb\xE9m possui eventos disparados ao marcar/desmarcar e expandir/colapsar os itens. "),ng()(),wl(52,"div",6)(53,"h4",7),Ux(54,"Seletor"),ng(),wl(55,"pre",8),Ux(56,`<po-tree-view
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
`),ng()(),wl(57,"h4",9),Ux(58,"Propriedades"),ng(),wl(59,"table",10)(60,"tr",11)(61,"th",12),Ux(62,"Nome"),ng(),wl(63,"th",12),Ux(64,"Tipo"),ng(),wl(65,"th",12),Ux(66,"Padr\xE3o"),ng(),wl(67,"th",12),Ux(68,"Descri\xE7\xE3o"),ng()(),wl(69,"tr",13)(70,"td",14)(71,"div",15)(72,"span",16),Ux(73," (p-collapsed)"),Ul(74,"br"),ng()()(),wl(75,"td",17)(76,"code",18),Ux(77,"EventEmitter"),ng()(),wl(78,"td",19),Ux(79,"-"),ng(),wl(80,"td",20)(81,"em")(82,"strong"),Ux(83,"(opcional)"),ng()(),wl(84,"p"),Ux(85,"A\xE7\xE3o que ser\xE1 disparada ao colapsar um item."),ng(),wl(86,"blockquote")(87,"p"),Ux(88,"Como par\xE2metro o componente envia o item colapsado."),ng()()()(),wl(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),Ux(93," p-components-size"),Ul(94,"br"),ng()()(),wl(95,"td",17)(96,"code",23),Ux(97,"string"),ng()(),wl(98,"td",19)(99,"p")(100,"code"),Ux(101,"medium"),ng()()(),wl(102,"td",20)(103,"em")(104,"strong"),Ux(105,"(opcional)"),ng()(),wl(106,"p"),Ux(107,"Define o tamanho dos componentes de formul\xE1rio:"),ng(),wl(108,"ul")(109,"li")(110,"code"),Ux(111,"small"),ng(),Ux(112,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(113,"li")(114,"code"),Ux(115,"medium"),ng(),Ux(116,": aplica a medida medium de cada componente."),ng()(),wl(117,"blockquote")(118,"p"),Ux(119,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(120,"code"),Ux(121,"medium"),ng(),Ux(122,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(123,"a",24),Ux(124,"po-theme"),ng(),Ux(125,"."),ng()()()(),wl(126,"tr",13)(127,"td",14)(128,"div",15)(129,"span",16),Ux(130," (p-expanded)"),Ul(131,"br"),ng()()(),wl(132,"td",17)(133,"code",18),Ux(134,"EventEmitter"),ng()(),wl(135,"td",19),Ux(136,"-"),ng(),wl(137,"td",20)(138,"em")(139,"strong"),Ux(140,"(opcional)"),ng()(),wl(141,"p"),Ux(142,"A\xE7\xE3o que ser\xE1 disparada ao expandir um item."),ng(),wl(143,"blockquote")(144,"p"),Ux(145,"Como par\xE2metro o componente envia o item expandido."),ng()()()(),wl(146,"tr",13)(147,"td",14)(148,"div",21)(149,"span",22),Ux(150," p-items"),Ul(151,"br"),ng()()(),wl(152,"td",17)(153,"code",25),Ux(154,"Array<PoTreeViewItem>"),ng()(),wl(155,"td",19),Ux(156,"-"),ng(),wl(157,"td",20)(158,"p"),Ux(159,"Lista de itens do tipo "),wl(160,"code"),Ux(161,"PoTreeViewItem"),ng(),Ux(162," que ser\xE1 renderizada pelo componente."),ng()()(),wl(163,"tr",13)(164,"td",14)(165,"div",21)(166,"span",22),Ux(167," p-max-level"),Ul(168,"br"),ng()()(),wl(169,"td",17)(170,"code",26),Ux(171,"number"),ng()(),wl(172,"td",19)(173,"p"),Ux(174,"4"),ng()(),wl(175,"td",20)(176,"em")(177,"strong"),Ux(178,"(opcional)"),ng()(),wl(179,"p"),Ux(180,"Define o m\xE1ximo de n\xEDveis para o tree-view."),ng(),wl(181,"blockquote")(182,"p"),Ux(183,"O valor padr\xE3o \xE9 4"),ng()()()(),wl(184,"tr",13)(185,"td",14)(186,"div",21)(187,"span",22),Ux(188," p-selectable"),Ul(189,"br"),ng()()(),wl(190,"td",17)(191,"code",27),Ux(192,"boolean"),ng()(),wl(193,"td",19)(194,"p"),Ux(195,"false"),ng()(),wl(196,"td",20)(197,"em")(198,"strong"),Ux(199,"(opcional)"),ng()(),wl(200,"p"),Ux(201,"Habilita uma caixa de sele\xE7\xE3o para selecionar e/ou desmarcar um item da lista."),ng()()(),wl(202,"tr",13)(203,"td",14)(204,"div",15)(205,"span",16),Ux(206," (p-selected)"),Ul(207,"br"),ng()()(),wl(208,"td",17)(209,"code",18),Ux(210,"EventEmitter"),ng()(),wl(211,"td",19),Ux(212,"-"),ng(),wl(213,"td",20)(214,"em")(215,"strong"),Ux(216,"(opcional)"),ng()(),wl(217,"p"),Ux(218,"A\xE7\xE3o que ser\xE1 disparada ao selecionar um item."),ng(),wl(219,"blockquote")(220,"p"),Ux(221,"Como par\xE2metro o componente envia o item selecionado."),ng()()()(),wl(222,"tr",13)(223,"td",14)(224,"div",21)(225,"span",22),Ux(226," p-single-select"),Ul(227,"br"),ng()()(),wl(228,"td",17)(229,"code",27),Ux(230,"boolean"),ng()(),wl(231,"td",19)(232,"p"),Ux(233,"false"),ng()(),wl(234,"td",20)(235,"em")(236,"strong"),Ux(237,"(opcional)"),ng()(),wl(238,"p"),Ux(239,"Habilita a sele\xE7\xE3o para item \xFAnico atr\xE1ves de po-radio."),ng()()(),wl(240,"tr",13)(241,"td",14)(242,"div",15)(243,"span",16),Ux(244," (p-unselected)"),Ul(245,"br"),ng()()(),wl(246,"td",17)(247,"code",18),Ux(248,"EventEmitter"),ng()(),wl(249,"td",19),Ux(250,"-"),ng(),wl(251,"td",20)(252,"em")(253,"strong"),Ux(254,"(opcional)"),ng()(),wl(255,"p"),Ux(256,"A\xE7\xE3o que ser\xE1 disparada ao desfazer a sele\xE7\xE3o de um item."),ng(),wl(257,"blockquote")(258,"p"),Ux(259,"Como par\xE2metro o componente envia o item que foi desmarcado."),ng()()()()(),wl(260,"h3"),Ux(261,"Interfaces"),ng(),wl(262,"h4",28)(263,"code",5),Ux(264,"PoTreeViewItem"),ng()(),wl(265,"div",2)(266,"p"),Ux(267,"Interface para defini\xE7\xE3o dos itens do componente "),wl(268,"code"),Ux(269,"po-tree-view"),ng(),Ux(270,"."),ng()(),wl(271,"h4",9),Ux(272,"Propriedades"),ng(),wl(273,"table",10)(274,"tr",11)(275,"th",12),Ux(276,"Nome"),ng(),wl(277,"th",12),Ux(278,"Tipo"),ng(),wl(279,"th",12),Ux(280,"Descri\xE7\xE3o"),ng()(),wl(281,"tr",13)(282,"td",14)(283,"div",21)(284,"span",22),Ux(285," expanded"),Ul(286,"br"),ng()()(),wl(287,"td",17)(288,"code",27),Ux(289,"boolean"),ng()(),wl(290,"td",20)(291,"em")(292,"strong"),Ux(293,"(opcional)"),ng()(),wl(294,"p"),Ux(295,"Expande o item."),ng()()(),wl(296,"tr",13)(297,"td",14)(298,"div",21)(299,"span",22),Ux(300," isSelectable"),Ul(301,"br"),ng()()(),wl(302,"td",17)(303,"code",27),Ux(304,"boolean "),ng(),wl(305,"code",29),Ux(306," null"),ng()(),wl(307,"td",20)(308,"em")(309,"strong"),Ux(310,"(opcional)"),ng()(),wl(311,"p"),Ux(312,"Permite ativar/desativar a sele\xE7\xE3o do item"),ng()()(),wl(313,"tr",13)(314,"td",14)(315,"div",21)(316,"span",22),Ux(317," label"),Ul(318,"br"),ng()()(),wl(319,"td",17)(320,"code",23),Ux(321,"string"),ng()(),wl(322,"td",20)(323,"p"),Ux(324,`Desabilita a selec\xE3o do item.
Texto de exibi\xE7\xE3o do item.`),ng()()(),wl(325,"tr",13)(326,"td",14)(327,"div",21)(328,"span",22),Ux(329," selected"),Ul(330,"br"),ng()()(),wl(331,"td",17)(332,"code",27),Ux(333,"boolean "),ng(),wl(334,"code",29),Ux(335," null"),ng()(),wl(336,"td",20)(337,"em")(338,"strong"),Ux(339,"(opcional)"),ng()(),wl(340,"p"),Ux(341,"Marca o item como selecionado."),ng(),wl(342,"blockquote")(343,"p"),Ux(344,"Caso o item que conter "),wl(345,"code"),Ux(346,"subItems"),ng(),Ux(347," for selecionado, os seus itens filhos ser\xE3o tamb\xE9m selecionados."),ng()()()(),wl(348,"tr",13)(349,"td",14)(350,"div",21)(351,"span",22),Ux(352," subItems"),Ul(353,"br"),ng()()(),wl(354,"td",17)(355,"code",25),Ux(356,"Array<PoTreeViewItem>"),ng()(),wl(357,"td",20)(358,"em")(359,"strong"),Ux(360,"(opcional)"),ng()(),wl(361,"p"),Ux(362,"Lista de itens do pr\xF3ximo n\xEDvel, e assim consecutivamente at\xE9 que se atinja o quarto n\xEDvel."),ng()()(),wl(363,"tr",13)(364,"td",14)(365,"div",21)(366,"span",22),Ux(367," value"),Ul(368,"br"),ng()()(),wl(369,"td",17)(370,"code",23),Ux(371,"string "),ng(),wl(372,"code",26),Ux(373," number"),ng()(),wl(374,"td",20)(375,"p"),Ux(376,"Valor do item que poder\xE1 ser utilizado como refer\xEAncia para sua identifica\xE7\xE3o."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tree View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-tree-view-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-tree-view-basic-view")(6,"sample-po-tree-view-labs-view")(7,"sample-po-tree-view-folder-structure-view")(8,"sample-po-tree-view-supermarket-view"),ng()()()),o&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,he,fe,Ce,Pe,Ve],encapsulation:2})}return a})();var Ge=[{path:"",component:xe}],ye=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Ge),vL]})}return a})();var Bt=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[u5,ye]})}return a})();export{Bt as DocPoTreeViewModule};