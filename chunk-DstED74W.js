import{t as r}from"./chunk-zystk1pz.js";import{$i as pt,Br as Qn,Ci as fo,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ht as eFe,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Mt as Zze,Nn as x4,Qn as C9,Sa as zO,Sn as sae,Ur as RN,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bn as roe,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,gn as poe,i as _a,in as kte,ji as ho,k as D4,ki as he$1,kn as v4,ni as Xc,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,st as Ooe,ua as ug,wr as Kc,zi as kL,zt as bt}from"./main-EZZF3RMT.js";var ye=()=>({label:`Add`,value:1.1});var be=a=>[a];var Ie=a=>({label:`User manager`,value:1,subItems:a});var Se=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-basic`]],standalone:!1,decls:1,vars:8,consts:[[3,`p-items`]],template:function(o,i){o&1&&Kc(0,`po-tree-view`,0),o&2&&cE(`p-items`,AN(6,be,AN(4,Ie,AN(2,be,RN(1,ye)))))},dependencies:[eFe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tree View Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-tree-view
  [p-items]="[
    {
      label: 'User manager',
      value: 1,
      subItems: [{ label: 'Add', value: 1.1 }]
    }
  ]"
>
</po-tree-view>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tree-view-basic`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ke,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Se],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{componentsSize=`medium`;disabled=!1;event;items;itemProperties;maxLevel=4;noBorder=!1;parent;parentList;selectable=!1;singleSelect=!1;treeViewItem;componentsSizeOptions=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`}];itemPropertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`expanded`,label:`Expanded`},{value:`selected`,label:`Selected`},{value:`showIcon`,label:`Show Icon`}];ngOnInit(){this.restore()}addTreeViewItem(r){this.add(this.treeViewItem),r.reset(),this.itemProperties=[]}add(r$1){r$1.disabled=this.itemProperties.includes(`disabled`),r$1.expanded=this.itemProperties.includes(`expanded`),r$1.selected=this.itemProperties.includes(`selected`),r$1.showIcon=this.itemProperties.includes(`showIcon`);let o=r({},r$1);if(!this.parent)this.items=[...this.items,o];else{let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o]}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items)}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`}restore(){this.componentsSize=`medium`,this.disabled=!1,this.event=void 0,this.items=[],this.itemProperties=[],this.maxLevel=4,this.noBorder=!1,this.parent=void 0,this.parentList=[],this.selectable=!1,this.singleSelect=!1,this.treeViewItem={}}getTreeViewItemNode(r,o){let i;if(r){for(let p of r)if(p.value===o){i=p;break}else i||(i=this.getTreeViewItemNode(p.subItems,o));return i}}updateParentList(r,o=0,i=[],p){return r.forEach(c=>{let{label:m,value:Ve}=c;i.push({label:`${`-`.repeat(o)} ${m}`,value:Ve}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=p?o:0}),i}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-labs`]],standalone:!1,decls:26,vars:22,consts:[[`treeViewItemForm`,`ngForm`],[3,`p-activated`,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-components-size`,`p-disabled`,`p-items`,`p-max-level`,`p-no-border`,`p-selectable`,`p-single-select`],[`p-label`,`Events`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Po Tree View Config`],[`name`,`level`,`p-label`,`Max Level`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`selectable`,`p-label`,`Selectable`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`singleSelect`,`p-label`,`Single Select`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`noBorder`,`p-label`,`No Border`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Po Tree View Item`],[`name`,`parent`,`p-label`,`Parent Item`,`p-placeholder`,`Add tree view item`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`itemProperties`,`p-columns`,`4`,`p-label`,`Item Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`]],template:function(o,i){if(o&1){let p=Bx();Ac(0,`po-tree-view`,1),pt(`p-activated`,function(m){return i.changeEvent(`p-activated`,m)})(`p-collapsed`,function(m){return i.changeEvent(`p-collapsed`,m)})(`p-expanded`,function(m){return i.changeEvent(`p-expanded`,m)})(`p-selected`,function(m){return i.changeEvent(`p-selected`,m)})(`p-unselected`,function(m){return i.changeEvent(`p-unselected`,m)}),ug(),Kc(1,`po-divider`,2),Ac(2,`div`,3),Kc(3,`po-info`,4),ug(),Kc(4,`po-divider`,5),Ac(5,`div`,3)(6,`po-number`,6),RE(`ngModelChange`,function(m){return Jv(p),DN(i.maxLevel,m)||(i.maxLevel=m),e_(m)}),ug(),p0(),Ac(7,`po-switch`,7),RE(`ngModelChange`,function(m){return Jv(p),DN(i.selectable,m)||(i.selectable=m),e_(m)}),ug(),p0(),Ac(8,`po-switch`,8),RE(`ngModelChange`,function(m){return Jv(p),DN(i.singleSelect,m)||(i.singleSelect=m),e_(m)}),ug(),p0(),Ac(9,`po-switch`,9),RE(`ngModelChange`,function(m){return Jv(p),DN(i.disabled,m)||(i.disabled=m),e_(m)}),ug(),p0(),Ac(10,`po-switch`,10),RE(`ngModelChange`,function(m){return Jv(p),DN(i.noBorder,m)||(i.noBorder=m),e_(m)}),ug(),p0(),Ac(11,`po-radio-group`,11),RE(`ngModelChange`,function(m){return Jv(p),DN(i.componentsSize,m)||(i.componentsSize=m),e_(m)}),ug(),p0(),ug(),Kc(12,`po-divider`,12),Ac(13,`form`,null,0)(15,`div`,3)(16,`po-select`,13),RE(`ngModelChange`,function(m){return Jv(p),DN(i.parent,m)||(i.parent=m),e_(m)}),ug(),p0(),Ac(17,`po-input`,14),RE(`ngModelChange`,function(m){return Jv(p),DN(i.treeViewItem.label,m)||(i.treeViewItem.label=m),e_(m)}),ug(),p0(),Ac(18,`po-input`,15),RE(`ngModelChange`,function(m){return Jv(p),DN(i.treeViewItem.value,m)||(i.treeViewItem.value=m),e_(m)}),ug(),p0(),ug(),Ac(19,`div`,3)(20,`po-checkbox-group`,16),RE(`ngModelChange`,function(m){return Jv(p),DN(i.itemProperties,m)||(i.itemProperties=m),e_(m)}),ug(),p0(),ug(),Ac(21,`div`,3)(22,`po-button`,17),pt(`p-click`,function(){Jv(p);let m=Zx(14);return e_(i.addTreeViewItem(m))}),ug()()(),Kc(23,`po-divider`),Ac(24,`div`,3)(25,`po-button`,18),pt(`p-click`,function(){return i.restore()}),ug()()}if(o&2){let p=Zx(14);cE(`p-components-size`,i.componentsSize)(`p-disabled`,i.disabled)(`p-items`,i.items)(`p-max-level`,i.maxLevel)(`p-no-border`,i.noBorder)(`p-selectable`,i.selectable)(`p-single-select`,i.singleSelect),Hp(3),cE(`p-value`,i.event),Hp(3),TE(`ngModel`,i.maxLevel),m0(),Hp(),TE(`ngModel`,i.selectable),m0(),Hp(),TE(`ngModel`,i.singleSelect),m0(),Hp(),TE(`ngModel`,i.disabled),m0(),Hp(),TE(`ngModel`,i.noBorder),m0(),Hp(),TE(`ngModel`,i.componentsSize),cE(`p-options`,i.componentsSizeOptions),m0(),Hp(5),TE(`ngModel`,i.parent),cE(`p-options`,i.parentList),m0(),Hp(),TE(`ngModel`,i.treeViewItem.label),m0(),Hp(),TE(`ngModel`,i.treeViewItem.value),m0(),Hp(2),TE(`ngModel`,i.itemProperties),cE(`p-options`,i.itemPropertiesOptions),m0(),Hp(2),cE(`p-disabled`,p.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,roe,kte,poe,v4,hoe,eFe],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tree View Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-tree-view
  [p-components-size]="componentsSize"
  [p-disabled]="disabled"
  [p-items]="items"
  [p-max-level]="maxLevel"
  [p-no-border]="noBorder"
  [p-selectable]="selectable"
  [p-single-select]="singleSelect"
  (p-activated)="changeEvent('p-activated', $event)"
  (p-collapsed)="changeEvent('p-collapsed', $event)"
  (p-expanded)="changeEvent('p-expanded', $event)"
  (p-selected)="changeEvent('p-selected', $event)"
  (p-unselected)="changeEvent('p-unselected', $event)"
>
</po-tree-view>

<po-divider p-label="Events"></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider p-label="Po Tree View Config"></po-divider>

<div class="po-row">
  <po-number class="po-md-6 po-lg-3" name="level" [(ngModel)]="maxLevel" p-label="Max Level"> </po-number>
  <po-switch class="po-md-6 po-lg-2" name="selectable" [(ngModel)]="selectable" p-label="Selectable"> </po-switch>
  <po-switch class="po-md-6 po-lg-2" name="singleSelect" [(ngModel)]="singleSelect" p-label="Single Select">
  </po-switch>
  <po-switch class="po-md-6 po-lg-2" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>
  <po-switch class="po-md-6 po-lg-2" name="noBorder" [(ngModel)]="noBorder" p-label="No Border"> </po-switch>

  <po-radio-group
    class="po-lg-3"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
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
      class="po-md-12"
      name="itemProperties"
      [(ngModel)]="itemProperties"
      p-columns="4"
      p-label="Item Properties"
      [p-options]="itemPropertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-lg-2"
      p-label="Add"
      [p-disabled]="treeViewItemForm.invalid"
      (p-click)="addTreeViewItem(treeViewItemForm)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-button class="po-md-6 po-lg-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-labs',
  templateUrl: 'sample-po-tree-view-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewLabsComponent implements OnInit {
  componentsSize: string = 'medium';
  disabled: boolean = false;
  event: string;
  items: Array<PoTreeViewItem>;
  itemProperties: Array<string>;
  maxLevel: number = 4;
  noBorder: boolean = false;
  parent: string;
  parentList: Array<PoSelectOption>;
  selectable: boolean = false;
  singleSelect: boolean = false;
  treeViewItem: PoTreeViewItem;

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' }
  ];

  readonly itemPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'expanded', label: 'Expanded' },
    { value: 'selected', label: 'Selected' },
    { value: 'showIcon', label: 'Show Icon' }
  ];

  ngOnInit() {
    this.restore();
  }

  addTreeViewItem(treeViewItemForm: NgForm) {
    this.add(this.treeViewItem);
    treeViewItemForm.reset();
    this.itemProperties = [];
  }

  add(treeViewItem: PoTreeViewItem) {
    treeViewItem.disabled = this.itemProperties.includes('disabled');
    treeViewItem.expanded = this.itemProperties.includes('expanded');
    treeViewItem.selected = this.itemProperties.includes('selected');
    treeViewItem.showIcon = this.itemProperties.includes('showIcon');

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
    this.disabled = false;
    this.event = undefined;
    this.items = [];
    this.itemProperties = [];
    this.maxLevel = 4;
    this.noBorder = false;
    this.parent = undefined;
    this.parentList = [];
    this.selectable = false;
    this.singleSelect = false;
    this.treeViewItem = <any>{};
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tree-view-labs`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ee],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{items=[{label:`my_project`,value:1,expanded:!0,subItems:[{label:`angular.json`,value:121},{label:`browserslist`,value:122,subItems:[{label:`e2e`,value:1223,subItems:[{label:`protractor.conf.js`,value:12231},{label:`src`,value:12232},{label:`tsconfig.json`,value:12233}]}]},{label:`karma.conf.js`,value:123},{label:`node_modules`,value:124},{label:`package.json`,value:125},{label:`package-lock.json`,value:126},{label:`README.md`,value:127},{label:`src`,value:128,subItems:[{label:`app`,value:1281},{label:`assets`,value:1282},{label:`environments`,value:1283},{label:`favicon.ico`,value:1284},{label:`index.html`,value:1285},{label:`main.ts`,value:1286},{label:`polyfills.ts`,value:1287},{label:`styles.css`,value:1288},{label:`test.ts`,value:1289}]},{label:`tsconfig.app.json`,value:129},{label:`tsconfig.json`,value:130},{label:`tsconfig.spec.json`,value:131},{label:`eslint.json`,value:132}]}];static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-folder-structure`]],standalone:!1,decls:4,vars:1,consts:[[`p-title`,`Angular folder structure`],[1,`po-mb-4`,`po-ml-1`,`po-text-color-neutral-dark-40`],[1,`po-lg-4`,`po-md-6`,3,`p-items`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,0)(1,`p`,1),vN(2,` This is the basic structure created using the Angular cli: `),ug(),Kc(3,`po-tree-view`,2),ug()),o&2&&(Hp(3),cE(`p-items`,i.items))},dependencies:[$ze,eFe],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-folder-structure-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tree View - Folder Structure`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tree-view-folder-structure`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ae,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ge],encapsulation:2,changeDetection:1})}return a})();var qe=[`stepper`];var fe=(()=>{class a{stepper;columnsItemsSelected=[{property:`item`}];confirmed=!1;itemsListSelected=[];items=[{label:`Condiments`,value:`condiments`,subItems:[{label:`Extra virgin Olive`,value:`extraVirginOlive`},{label:`Mayonnaise`,value:`Mayonnaise`},{label:`Tomato ketchup`,value:`tomatoKetchup`},{label:`Soda`,value:`soda`}]},{label:`Drinks`,value:`drinks`,subItems:[{label:`Orange juice`,value:`orangeJuice`},{label:`Grape juice`,value:`grapeJuice`},{label:`Beer`,value:`beer`},{label:`Wine`,value:`wine`},{label:`Soda`,value:`soda`}]},{label:`Grains`,value:122,subItems:[{label:`Black bean`,value:`blackBean`},{label:`Chickpeas`,value:`chickpeas`},{label:`Lentil`,value:`lentil`},{label:`Pea`,value:`pea`}]},{label:`Personal hygiene`,value:`personalHygiene`,subItems:[{label:`Body wash`,value:`bodyWash`},{label:`Deodorant`,value:`deodorant`},{label:`Shampoo`,value:`deodorant`},{label:`Conditioner`,value:`conditioner`},{label:`Sunscreen lotion`,value:`sunscreenLotion`}]},{label:`Frozen foods`,value:`frozenFoods`,subItems:[{label:`Hamburguer`,value:`hamburguer`},{label:`Lasagna`,value:`lasagna`},{label:`Sandwiches`,value:`sandwiches`}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label})}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label})}checkOut(){this.confirmed=!0,this.stepper.next()}isConfirmed(){return!!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item))}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-supermarket`]],viewQuery:function(o,i){if(o&1&&Xc(qe,7),o&2){let p;fo(p=ho())&&(i.stepper=p.first)}},standalone:!1,decls:18,vars:6,consts:[[`stepper`,``],[`p-title`,`Welcome to the PO Supermarket`],[1,`po-offset-md-3`,`po-offset-lg-2`,`po-offset-xl-2`],[1,`po-row`],[`p-step-icons`,``,1,`po-md-9`,`po-lg-8`,`po-mb-1`],[`p-label`,`Step 1`],[1,`po-font-subtitle`],[`p-selectable`,``,3,`p-selected`,`p-unselected`,`p-items`],[`p-label`,`Step 2`,3,`p-can-active-next-step`],[`p-primary-label`,`Confirm`,`p-title`,`Selected items`,3,`p-primary-action`,`p-disabled`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-label`,`Step 3`],[1,`po-row`,`po-font-display`],[`p-icon`,`po-icon an an-check`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,1)(1,`div`,2)(2,`div`,3)(3,`po-stepper`,4,0)(5,`po-step`,5)(6,`p`,6),vN(7,`Please, select your items:`),ug(),Ac(8,`po-tree-view`,7),pt(`p-selected`,function(c){return i.addItem(c)})(`p-unselected`,function(c){return i.removeItem(c)}),ug()(),Ac(9,`po-step`,8)(10,`po-widget`,9),pt(`p-primary-action`,function(){return i.checkOut()}),Kc(11,`po-table`,10),ug()(),Ac(12,`po-step`,11)(13,`po-widget`)(14,`div`,12)(15,`p`),vN(16,`Order dispatched`),ug(),Kc(17,`po-icon`,13),ug()()()()()()()),o&2&&(Hp(8),cE(`p-items`,i.items),Hp(),cE(`p-can-active-next-step`,i.isConfirmed.bind(i)),Hp(),cE(`p-disabled`,i.itemsListSelected.length<1),Hp(),cE(`p-columns`,i.columnsItemsSelected)(`p-items`,i.itemsListSelected)(`p-hide-table-search`,!1))},dependencies:[bt,$ze,sae,Zze,x4,eFe,Ooe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-supermarket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tree View - Supermarket`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Welcome to the PO Supermarket">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tree-view-supermarket`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,fe],encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-doc`]],standalone:!1,decls:775,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTreeViewItem>`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`null`]],template:function(o,i){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoTreeViewModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-tree-view`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoTreeViewComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a exibi\xE7\xE3o de informa\xE7\xF5es de maneira
hier\xE1rquica com suporte a m\xFAltiplos n\xEDveis (configur\xE1vel via `),Ac(18,`code`),vN(19,`p-max-level`),ug(),vN(20,`).`),ug(),Ac(21,`p`),vN(22,`O componente permite:`),ug(),Ac(23,`ul`)(24,`li`),vN(25,`Navegação completa por teclado seguindo o padrão WAI-ARIA TreeView;`),ug(),Ac(26,`li`),vN(27,`Expansão e recolhimento de itens agrupadores;`),ug(),Ac(28,`li`),vN(29,`Seleção múltipla (checkbox) ou única (radio) dos itens;`),ug(),Ac(30,`li`),vN(31,`Exibição de ícones automáticos para agrupadores e itens finais;`),ug(),Ac(32,`li`),vN(33,`Estado desabilitado global ou individual por item;`),ug(),Ac(34,`li`),vN(35,`Execução de itens finais via clique ou teclado.`),ug()(),Ac(36,`h4`),vN(37,`Navegação por teclado`),ug(),Ac(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),vN(42,`Tecla`),ug(),Ac(43,`th`),vN(44,`Descrição`),ug()()(),Ac(45,`tbody`)(46,`tr`)(47,`td`)(48,`strong`),vN(49,`Tab`),ug()(),Ac(50,`td`),vN(51,`Entra no componente posicionando o foco no primeiro nó ativo. Ao pressionar novamente, sai do componente.`),ug()(),Ac(52,`tr`)(53,`td`)(54,`strong`),vN(55,`ArrowDown`),ug()(),Ac(56,`td`),vN(57,`Move o foco para o próximo nó visível.`),ug()(),Ac(58,`tr`)(59,`td`)(60,`strong`),vN(61,`ArrowUp`),ug()(),Ac(62,`td`),vN(63,`Move o foco para o nó visível anterior.`),ug()(),Ac(64,`tr`)(65,`td`)(66,`strong`),vN(67,`ArrowRight`),ug()(),Ac(68,`td`),vN(69,`Se colapsado, expande o nó. Se expandido, move o foco para o nó filho.`),ug()(),Ac(70,`tr`)(71,`td`)(72,`strong`),vN(73,`ArrowLeft`),ug()(),Ac(74,`td`),vN(75,`Se expandido, recolhe o nó. Se filho, move o foco para o nó pai.`),ug()(),Ac(76,`tr`)(77,`td`)(78,`strong`),vN(79,`Home`),ug()(),Ac(80,`td`),vN(81,`Move o foco para o primeiro nó visível.`),ug()(),Ac(82,`tr`)(83,`td`)(84,`strong`),vN(85,`End`),ug()(),Ac(86,`td`),vN(87,`Move o foco para o último nó visível.`),ug()(),Ac(88,`tr`)(89,`td`)(90,`strong`),vN(91,`Enter / Space`),ug()(),Ac(92,`td`),vN(93,`Com `),Ac(94,`code`),vN(95,`p-selectable`),ug(),vN(96,`: alterna a seleção do item. Sem `),Ac(97,`code`),vN(98,`p-selectable`),ug(),vN(99,`: executa o item final.`),ug()(),Ac(100,`tr`)(101,`td`)(102,`strong`),vN(103,`Caractere`),ug()(),Ac(104,`td`),vN(105,`Move o foco para o próximo nó cujo label inicia com o caractere pressionado (busca cíclica).`),ug()()()(),Ac(106,`h4`),vN(107,`Tokens customizáveis`),ug(),Ac(108,`p`),vN(109,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(110,`blockquote`)(111,`p`),vN(112,`Para maiores informações, acesse o guia `),Ac(113,`a`,6),vN(114,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(115,`.`),ug()(),Ac(116,`table`)(117,`thead`)(118,`tr`)(119,`th`),vN(120,`Propriedade`),ug(),Ac(121,`th`),vN(122,`Descrição`),ug(),Ac(123,`th`),vN(124,`Valor Padrão`),ug()()(),Ac(125,`tbody`)(126,`tr`)(127,`td`)(128,`strong`),vN(129,`Default`),ug()(),Kc(130,`td`)(131,`td`),ug(),Ac(132,`tr`)(133,`td`)(134,`code`),vN(135,`--background-color`),ug()(),Ac(136,`td`),vN(137,`Cor de background do item`),ug(),Ac(138,`td`)(139,`code`),vN(140,`var(--color-neutral-light-00)`),ug()()(),Ac(141,`tr`)(142,`td`)(143,`code`),vN(144,`--divider-color`),ug()(),Ac(145,`td`),vN(146,`Cor do divider dos agrupadores de nível 0`),ug(),Ac(147,`td`)(148,`code`),vN(149,`var(--color-neutral-mid-40)`),ug()()(),Ac(150,`tr`)(151,`td`)(152,`code`),vN(153,`--font-family`),ug()(),Ac(154,`td`),vN(155,`Família tipográfica`),ug(),Ac(156,`td`)(157,`code`),vN(158,`var(--font-family-theme)`),ug()()(),Ac(159,`tr`)(160,`td`)(161,`code`),vN(162,`--font-size`),ug()(),Ac(163,`td`),vN(164,`Tamanho da fonte`),ug(),Ac(165,`td`)(166,`code`),vN(167,`var(--font-size-default)`),ug()()(),Ac(168,`tr`)(169,`td`)(170,`code`),vN(171,`--line-height`),ug()(),Ac(172,`td`),vN(173,`Altura da linha`),ug(),Ac(174,`td`)(175,`code`),vN(176,`var(--line-height-md)`),ug()()(),Ac(177,`tr`)(178,`td`)(179,`code`),vN(180,`--color`),ug()(),Ac(181,`td`),vN(182,`Cor padrão do item`),ug(),Ac(183,`td`)(184,`code`),vN(185,`var(--color-action-default)`),ug()()(),Ac(186,`tr`)(187,`td`)(188,`strong`),vN(189,`Hover`),ug()(),Kc(190,`td`)(191,`td`),ug(),Ac(192,`tr`)(193,`td`)(194,`code`),vN(195,`--color-hover`),ug()(),Ac(196,`td`),vN(197,`Cor do item em hover`),ug(),Ac(198,`td`)(199,`code`),vN(200,`var(--color-action-hover)`),ug()()(),Ac(201,`tr`)(202,`td`)(203,`strong`),vN(204,`Pressed`),ug()(),Kc(205,`td`)(206,`td`),ug(),Ac(207,`tr`)(208,`td`)(209,`code`),vN(210,`--color-pressed`),ug()(),Ac(211,`td`),vN(212,`Cor do item em pressed`),ug(),Ac(213,`td`)(214,`code`),vN(215,`var(--color-action-pressed)`),ug()()(),Ac(216,`tr`)(217,`td`)(218,`strong`),vN(219,`Disabled`),ug()(),Kc(220,`td`)(221,`td`),ug(),Ac(222,`tr`)(223,`td`)(224,`code`),vN(225,`--color-disabled`),ug()(),Ac(226,`td`),vN(227,`Cor do item desabilitado`),ug(),Ac(228,`td`)(229,`code`),vN(230,`var(--color-action-disabled)`),ug()()(),Ac(231,`tr`)(232,`td`)(233,`strong`),vN(234,`Selected`),ug()(),Kc(235,`td`)(236,`td`),ug(),Ac(237,`tr`)(238,`td`)(239,`code`),vN(240,`--title-color`),ug()(),Ac(241,`td`),vN(242,`Cor do label quando selecionado`),ug(),Ac(243,`td`)(244,`code`),vN(245,`var(--color-action-focus)`),ug()()()()()(),Ac(246,`div`,7)(247,`h4`,8),vN(248,`Seletor`),ug(),Ac(249,`pre`,9),vN(250,`<po-tree-view
    (p-activated)="EventEmitter"
    (p-collapsed)="EventEmitter"
    p-components-size="string"
    p-disabled="boolean"
    (p-expanded)="EventEmitter"
    p-items="Array<PoTreeViewItem>"
    p-max-level="number"
    p-no-border="boolean"
    p-selectable="boolean"
    (p-selected)="EventEmitter"
    p-single-select="boolean"
    (p-unselected)="EventEmitter" >
</po-tree-view>
`),ug()(),Ac(251,`h4`,10),vN(252,`Propriedades`),ug(),Ac(253,`table`,11)(254,`tr`,12)(255,`th`,13),vN(256,`Nome`),ug(),Ac(257,`th`,13),vN(258,`Tipo`),ug(),Ac(259,`th`,13),vN(260,`Padrão`),ug(),Ac(261,`th`,13),vN(262,`Descrição`),ug()(),Ac(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),vN(267,` (p-activated)`),Kc(268,`br`),ug()()(),Ac(269,`td`,18)(270,`code`,19),vN(271,`EventEmitter`),ug()(),Ac(272,`td`,20),vN(273,`-`),ug(),Ac(274,`td`,21)(275,`em`)(276,`strong`),vN(277,`(opcional)`),ug()(),Ac(278,`p`),vN(279,`Ação que será disparada ao executar um item final (sem `),Ac(280,`code`),vN(281,`subItems`),ug(),vN(282,`).`),ug(),Ac(283,`blockquote`)(284,`p`),vN(285,`Como parâmetro o componente envia o item executado.`),ug()()()(),Ac(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),vN(290,` (p-collapsed)`),Kc(291,`br`),ug()()(),Ac(292,`td`,18)(293,`code`,19),vN(294,`EventEmitter`),ug()(),Ac(295,`td`,20),vN(296,`-`),ug(),Ac(297,`td`,21)(298,`em`)(299,`strong`),vN(300,`(opcional)`),ug()(),Ac(301,`p`),vN(302,`Ação que será disparada ao colapsar um item.`),ug(),Ac(303,`blockquote`)(304,`p`),vN(305,`Como parâmetro o componente envia o item colapsado.`),ug()()()(),Ac(306,`tr`,14)(307,`td`,15)(308,`div`,22)(309,`span`,23),vN(310,` p-components-size`),Kc(311,`br`),ug()()(),Ac(312,`td`,18)(313,`code`,24),vN(314,`string`),ug()(),Ac(315,`td`,20)(316,`p`)(317,`code`),vN(318,`medium`),ug()()(),Ac(319,`td`,21)(320,`em`)(321,`strong`),vN(322,`(opcional)`),ug()(),Ac(323,`p`),vN(324,`Define o tamanho dos componentes de formulário:`),ug(),Ac(325,`ul`)(326,`li`)(327,`code`),vN(328,`small`),ug(),vN(329,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(330,`li`)(331,`code`),vN(332,`medium`),ug(),vN(333,`: aplica a medida medium de cada componente.`),ug()(),Ac(334,`blockquote`)(335,`p`),vN(336,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(337,`code`),vN(338,`medium`),ug(),vN(339,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(340,`a`,25),vN(341,`po-theme`),ug(),vN(342,`.`),ug()()()(),Ac(343,`tr`,14)(344,`td`,15)(345,`div`,22)(346,`span`,23),vN(347,` p-disabled`),Kc(348,`br`),ug()()(),Ac(349,`td`,18)(350,`code`,26),vN(351,`boolean`),ug()(),Ac(352,`td`,20)(353,`p`)(354,`code`),vN(355,`false`),ug()()(),Ac(356,`td`,21)(357,`em`)(358,`strong`),vN(359,`(opcional)`),ug()(),Ac(360,`p`),vN(361,`Desabilita o componente inteiro.`),ug(),Ac(362,`p`),vN(363,`Quando `),Ac(364,`code`),vN(365,`true`),ug(),vN(366,`, todos os itens do tree-view ser\xE3o exibidos no estado desabilitado,
independentemente do valor individual da propriedade `),Ac(367,`code`),vN(368,`disabled`),ug(),vN(369,` de cada item.`),ug(),Ac(370,`blockquote`)(371,`p`),vN(372,`O botão de expansão/recolhimento (arrow) permanece interativo mesmo quando o componente está desabilitado.`),ug()()()(),Ac(373,`tr`,14)(374,`td`,15)(375,`div`,16)(376,`span`,17),vN(377,` (p-expanded)`),Kc(378,`br`),ug()()(),Ac(379,`td`,18)(380,`code`,19),vN(381,`EventEmitter`),ug()(),Ac(382,`td`,20),vN(383,`-`),ug(),Ac(384,`td`,21)(385,`em`)(386,`strong`),vN(387,`(opcional)`),ug()(),Ac(388,`p`),vN(389,`Ação que será disparada ao expandir um item.`),ug(),Ac(390,`blockquote`)(391,`p`),vN(392,`Como parâmetro o componente envia o item expandido.`),ug()()()(),Ac(393,`tr`,14)(394,`td`,15)(395,`div`,22)(396,`span`,23),vN(397,` p-items`),Kc(398,`br`),ug()()(),Ac(399,`td`,18)(400,`code`,27),vN(401,`Array<PoTreeViewItem>`),ug()(),Ac(402,`td`,20),vN(403,`-`),ug(),Ac(404,`td`,21)(405,`p`),vN(406,`Lista de itens do tipo `),Ac(407,`code`),vN(408,`PoTreeViewItem`),ug(),vN(409,` que será renderizada pelo componente.`),ug(),Ac(410,`blockquote`)(411,`p`),vN(412,`Consulte a documentação de `),Ac(413,`code`),vN(414,`PoTreeViewItem`),ug(),vN(415,` para detalhes sobre as propriedades disponíveis em cada item.`),ug()()()(),Ac(416,`tr`,14)(417,`td`,15)(418,`div`,22)(419,`span`,23),vN(420,` p-max-level`),Kc(421,`br`),ug()()(),Ac(422,`td`,18)(423,`code`,28),vN(424,`number`),ug()(),Ac(425,`td`,20)(426,`p`),vN(427,`4`),ug()(),Ac(428,`td`,21)(429,`em`)(430,`strong`),vN(431,`(opcional)`),ug()(),Ac(432,`p`),vN(433,`Define o máximo de níveis para o tree-view.`),ug(),Ac(434,`blockquote`)(435,`p`),vN(436,`O valor padrão é 4`),ug()()()(),Ac(437,`tr`,14)(438,`td`,15)(439,`div`,22)(440,`span`,23),vN(441,` p-no-border`),Kc(442,`br`),ug()()(),Ac(443,`td`,18)(444,`code`,26),vN(445,`boolean`),ug()(),Ac(446,`td`,20)(447,`p`),vN(448,`false`),ug()(),Ac(449,`td`,21)(450,`em`)(451,`strong`),vN(452,`(opcional)`),ug()(),Ac(453,`p`),vN(454,`Remove a borda do container do componente.`),ug()()(),Ac(455,`tr`,14)(456,`td`,15)(457,`div`,22)(458,`span`,23),vN(459,` p-selectable`),Kc(460,`br`),ug()()(),Ac(461,`td`,18)(462,`code`,26),vN(463,`boolean`),ug()(),Ac(464,`td`,20)(465,`p`),vN(466,`false`),ug()(),Ac(467,`td`,21)(468,`em`)(469,`strong`),vN(470,`(opcional)`),ug()(),Ac(471,`p`),vN(472,`Habilita uma caixa de seleção para selecionar e/ou desmarcar um item da lista.`),ug(),Ac(473,`blockquote`)(474,`p`),vN(475,`Quando habilitado, a propriedade `),Ac(476,`code`),vN(477,`showIcon`),ug(),vN(478,` dos itens não será aplicada.`),ug()()()(),Ac(479,`tr`,14)(480,`td`,15)(481,`div`,16)(482,`span`,17),vN(483,` (p-selected)`),Kc(484,`br`),ug()()(),Ac(485,`td`,18)(486,`code`,19),vN(487,`EventEmitter`),ug()(),Ac(488,`td`,20),vN(489,`-`),ug(),Ac(490,`td`,21)(491,`em`)(492,`strong`),vN(493,`(opcional)`),ug()(),Ac(494,`p`),vN(495,`Ação que será disparada ao selecionar um item.`),ug(),Ac(496,`blockquote`)(497,`p`),vN(498,`Como parâmetro o componente envia o item selecionado.`),ug()()()(),Ac(499,`tr`,14)(500,`td`,15)(501,`div`,22)(502,`span`,23),vN(503,` p-single-select`),Kc(504,`br`),ug()()(),Ac(505,`td`,18)(506,`code`,26),vN(507,`boolean`),ug()(),Ac(508,`td`,20)(509,`p`),vN(510,`false`),ug()(),Ac(511,`td`,21)(512,`em`)(513,`strong`),vN(514,`(opcional)`),ug()(),Ac(515,`p`),vN(516,`Habilita a seleção para item único atráves de po-radio.`),ug()()(),Ac(517,`tr`,14)(518,`td`,15)(519,`div`,16)(520,`span`,17),vN(521,` (p-unselected)`),Kc(522,`br`),ug()()(),Ac(523,`td`,18)(524,`code`,19),vN(525,`EventEmitter`),ug()(),Ac(526,`td`,20),vN(527,`-`),ug(),Ac(528,`td`,21)(529,`em`)(530,`strong`),vN(531,`(opcional)`),ug()(),Ac(532,`p`),vN(533,`Ação que será disparada ao desfazer a seleção de um item.`),ug(),Ac(534,`blockquote`)(535,`p`),vN(536,`Como parâmetro o componente envia o item que foi desmarcado.`),ug()()()()(),Ac(537,`h3`),vN(538,`Interfaces`),ug(),Ac(539,`h4`,29)(540,`code`,5),vN(541,`PoTreeViewItem`),ug()(),Ac(542,`div`,2)(543,`p`),vN(544,`Interface para definição dos itens do componente `),Ac(545,`code`),vN(546,`po-tree-view`),ug(),vN(547,`.`),ug()(),Ac(548,`h4`,10),vN(549,`Propriedades`),ug(),Ac(550,`table`,11)(551,`tr`,12)(552,`th`,13),vN(553,`Nome`),ug(),Ac(554,`th`,13),vN(555,`Tipo`),ug(),Ac(556,`th`,13),vN(557,`Descrição`),ug()(),Ac(558,`tr`,14)(559,`td`,15)(560,`div`,22)(561,`span`,23),vN(562,` disabled`),Kc(563,`br`),ug()()(),Ac(564,`td`,18)(565,`code`,26),vN(566,`boolean`),ug()(),Ac(567,`td`,21)(568,`em`)(569,`strong`),vN(570,`(opcional)`),ug()(),Ac(571,`p`),vN(572,`Desabilita a interação com o item.`),ug(),Ac(573,`p`),vN(574,`O estado \xE9 aplicado somente ao item em que a propriedade est\xE1 configurada
e n\xE3o \xE9 propagado para seus `),Ac(575,`code`),vN(576,`subItems`),ug(),vN(577,`.`),ug(),Ac(578,`blockquote`)(579,`p`),vN(580,`Itens disabled que não possuem `),Ac(581,`code`),vN(582,`subItems`),ug(),vN(583,` s\xE3o ignorados na navega\xE7\xE3o por teclado.
Itens disabled que possuem `),Ac(584,`code`),vN(585,`subItems`),ug(),vN(586,` continuam participando da navegação, permitindo expandir/recolher.`),ug()()()(),Ac(587,`tr`,14)(588,`td`,15)(589,`div`,22)(590,`span`,23),vN(591,` expanded`),Kc(592,`br`),ug()()(),Ac(593,`td`,18)(594,`code`,26),vN(595,`boolean`),ug()(),Ac(596,`td`,21)(597,`em`)(598,`strong`),vN(599,`(opcional)`),ug()(),Ac(600,`p`),vN(601,`Expande o item, exibindo seus `),Ac(602,`code`),vN(603,`subItems`),ug(),vN(604,`.`),ug(),Ac(605,`p`),vN(606,`Quando `),Ac(607,`code`),vN(608,`true`),ug(),vN(609,`, o item será renderizado no estado expandido.`),ug(),Ac(610,`blockquote`)(611,`p`),vN(612,`Sem efeito em itens que não possuem `),Ac(613,`code`),vN(614,`subItems`),ug(),vN(615,`.`),ug()()()(),Ac(616,`tr`,14)(617,`td`,15)(618,`div`,22)(619,`span`,23),vN(620,` isSelectable`),Kc(621,`br`),ug()()(),Ac(622,`td`,18)(623,`code`,26),vN(624,`boolean `),ug(),Ac(625,`code`,30),vN(626,` null`),ug()(),Ac(627,`td`,21)(628,`em`)(629,`strong`),vN(630,`(opcional)`),ug()(),Ac(631,`p`),vN(632,`Permite ativar ou desativar a seleção do item.`),ug(),Ac(633,`p`),vN(634,`Quando `),Ac(635,`code`),vN(636,`false`),ug(),vN(637,`, o item não poderá ser selecionado pelo usuário.`),ug()()(),Ac(638,`tr`,14)(639,`td`,15)(640,`div`,22)(641,`span`,23),vN(642,` label`),Kc(643,`br`),ug()()(),Ac(644,`td`,18)(645,`code`,24),vN(646,`string`),ug()(),Ac(647,`td`,21)(648,`p`),vN(649,`Texto de exibição do item.`),ug(),Ac(650,`p`),vN(651,`O valor é utilizado como `),Ac(652,`code`),vN(653,`aria-label`),ug(),vN(654,` do nó e como referência na navegação por caractere do teclado.`),ug()()(),Ac(655,`tr`,14)(656,`td`,15)(657,`div`,22)(658,`span`,23),vN(659,` selected`),Kc(660,`br`),ug()()(),Ac(661,`td`,18)(662,`code`,26),vN(663,`boolean `),ug(),Ac(664,`code`,30),vN(665,` null`),ug()(),Ac(666,`td`,21)(667,`em`)(668,`strong`),vN(669,`(opcional)`),ug()(),Ac(670,`p`),vN(671,`Marca o item como selecionado.`),ug(),Ac(672,`blockquote`)(673,`p`),vN(674,`Caso o item que possuir `),Ac(675,`code`),vN(676,`subItems`),ug(),vN(677,` for selecionado, os seus itens filhos serão também selecionados.`),ug()(),Ac(678,`p`),vN(679,`Quando utilizado com `),Ac(680,`code`),vN(681,`p-single-select`),ug(),vN(682,`, apenas um item pode estar selecionado por vez.
Ao selecionar outro item, o anteriormente selecionado perde o estado.`),ug()()(),Ac(683,`tr`,14)(684,`td`,15)(685,`div`,22)(686,`span`,23),vN(687,` showIcon`),Kc(688,`br`),ug()()(),Ac(689,`td`,18)(690,`code`,26),vN(691,`boolean`),ug()(),Ac(692,`td`,21)(693,`em`)(694,`strong`),vN(695,`(opcional)`),ug()(),Ac(696,`p`),vN(697,`Habilita a exibição de ícone no item.`),ug(),Ac(698,`p`),vN(699,`Quando `),Ac(700,`code`),vN(701,`true`),ug(),vN(702,`, exibe automaticamente:`),ug(),Ac(703,`ul`)(704,`li`)(705,`code`),vN(706,`an-folder-simple`),ug(),vN(707,` para itens agrupadores (que possuem `),Ac(708,`code`),vN(709,`subItems`),ug(),vN(710,`).`),ug(),Ac(711,`li`)(712,`code`),vN(713,`an-file`),ug(),vN(714,` para itens finais (sem `),Ac(715,`code`),vN(716,`subItems`),ug(),vN(717,`).`),ug()(),Ac(718,`blockquote`)(719,`p`),vN(720,`Não funciona em conjunto com `),Ac(721,`code`),vN(722,`p-selectable`),ug(),vN(723,`.
Quando `),Ac(724,`code`),vN(725,`p-selectable`),ug(),vN(726,` e `),Ac(727,`code`),vN(728,`showIcon`),ug(),vN(729,` estiverem configurados como `),Ac(730,`code`),vN(731,`true`),ug(),vN(732,`,
`),Ac(733,`code`),vN(734,`p-selectable`),ug(),vN(735,` terá precedência.`),ug()()()(),Ac(736,`tr`,14)(737,`td`,15)(738,`div`,22)(739,`span`,23),vN(740,` subItems`),Kc(741,`br`),ug()()(),Ac(742,`td`,18)(743,`code`,27),vN(744,`Array<PoTreeViewItem>`),ug()(),Ac(745,`td`,21)(746,`em`)(747,`strong`),vN(748,`(opcional)`),ug()(),Ac(749,`p`),vN(750,`Lista de itens do próximo nível, permitindo a construção hierárquica da árvore.`),ug(),Ac(751,`p`),vN(752,`A estrutura pode ser aninhada recursivamente até o limite definido pela propriedade `),Ac(753,`code`),vN(754,`p-max-level`),ug(),vN(755,` do componente.`),ug()()(),Ac(756,`tr`,14)(757,`td`,15)(758,`div`,22)(759,`span`,23),vN(760,` value`),Kc(761,`br`),ug()()(),Ac(762,`td`,18)(763,`code`,24),vN(764,`string `),ug(),Ac(765,`code`,28),vN(766,` number`),ug()(),Ac(767,`td`,21)(768,`p`),vN(769,`Valor do item utilizado como referência para sua identificação.`),ug(),Ac(770,`p`),vN(771,`Em modo `),Ac(772,`code`),vN(773,`p-single-select`),ug(),vN(774,`, este valor é utilizado para determinar qual item está atualmente selecionado.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var He=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Tree View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-tree-view-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-tree-view-basic-view`)(6,`sample-po-tree-view-labs-view`)(7,`sample-po-tree-view-folder-structure-view`)(8,`sample-po-tree-view-supermarket-view`),ug()()()),o&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,ve,he,we,xe,Ce],encapsulation:2,changeDetection:1})}return a})()}];var Pe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[kL.forChild(He),kL]})}return a})();var gt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[Ta,Pe]})}return a})();export{gt as DocPoTreeViewModule};