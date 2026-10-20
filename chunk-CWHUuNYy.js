import{t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Br as Sx,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Jt as dae,Kn as Ag,Mn as w5,Pi as mt,Ri as nu,Rt as _oe,Si as iu,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,Zt as eFe,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,et as Noe,fn as nFe,gt as Tt,i as _a,ir as EF,ji as mO,mi as gO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ye=()=>({label:`Add`,value:1.1});var be=a=>[a];var Ie=a=>({label:`User manager`,value:1,subItems:a});var Se=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tree-view-basic`]],standalone:!1,decls:1,vars:8,consts:[[3,`p-items`]],template:function(o,i){o&1&&nu(0,`po-tree-view`,0),o&2&&jE(`p-items`,mO(6,be,mO(4,Ie,mO(2,be,gO(1,ye)))))},dependencies:[nFe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tree-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Tree View Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-tree-view
  [p-items]="[
    {
      label: 'User manager',
      value: 1,
      subItems: [{ label: 'Add', value: 1.1 }]
    }
  ]"
>
</po-tree-view>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tree-view-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ke,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{componentsSize=`medium`;disabled=!1;event;items;itemProperties;maxLevel=4;noBorder=!1;parent;parentList;selectable=!1;singleSelect=!1;treeViewItem;componentsSizeOptions=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`}];itemPropertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`expanded`,label:`Expanded`},{value:`selected`,label:`Selected`},{value:`showIcon`,label:`Show Icon`}];ngOnInit(){this.restore()}addTreeViewItem(r){this.add(this.treeViewItem),r.reset(),this.itemProperties=[]}add(r$1){r$1.disabled=this.itemProperties.includes(`disabled`),r$1.expanded=this.itemProperties.includes(`expanded`),r$1.selected=this.itemProperties.includes(`selected`),r$1.showIcon=this.itemProperties.includes(`showIcon`);let o=r({},r$1);if(!this.parent)this.items=[...this.items,o];else{let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o]}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items)}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`}restore(){this.componentsSize=`medium`,this.disabled=!1,this.event=void 0,this.items=[],this.itemProperties=[],this.maxLevel=4,this.noBorder=!1,this.parent=void 0,this.parentList=[],this.selectable=!1,this.singleSelect=!1,this.treeViewItem={}}getTreeViewItemNode(r,o){let i;if(r){for(let p of r)if(p.value===o){i=p;break}else i||(i=this.getTreeViewItemNode(p.subItems,o));return i}}updateParentList(r,o=0,i=[],p){return r.forEach(c=>{let{label:m,value:Ve}=c;i.push({label:`${`-`.repeat(o)} ${m}`,value:Ve}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=p?o:0}),i}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tree-view-labs`]],standalone:!1,decls:26,vars:22,consts:[[`treeViewItemForm`,`ngForm`],[3,`p-activated`,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-components-size`,`p-disabled`,`p-items`,`p-max-level`,`p-no-border`,`p-selectable`,`p-single-select`],[`p-label`,`Events`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Po Tree View Config`],[`name`,`level`,`p-label`,`Max Level`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`selectable`,`p-label`,`Selectable`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`singleSelect`,`p-label`,`Single Select`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`noBorder`,`p-label`,`No Border`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Po Tree View Item`],[`name`,`parent`,`p-label`,`Parent Item`,`p-placeholder`,`Add tree view item`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`itemProperties`,`p-columns`,`4`,`p-label`,`Item Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`]],template:function(o,i){if(o&1){let p=Sx();jc(0,`po-tree-view`,1),mt(`p-activated`,function(m){return i.changeEvent(`p-activated`,m)})(`p-collapsed`,function(m){return i.changeEvent(`p-collapsed`,m)})(`p-expanded`,function(m){return i.changeEvent(`p-expanded`,m)})(`p-selected`,function(m){return i.changeEvent(`p-selected`,m)})(`p-unselected`,function(m){return i.changeEvent(`p-unselected`,m)}),wg(),nu(1,`po-divider`,2),jc(2,`div`,3),nu(3,`po-info`,4),wg(),nu(4,`po-divider`,5),jc(5,`div`,3)(6,`po-number`,6),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.maxLevel,m)||(i.maxLevel=m),v_(m)}),wg(),jc(7,`po-switch`,7),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.selectable,m)||(i.selectable=m),v_(m)}),wg(),jc(8,`po-switch`,8),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.singleSelect,m)||(i.singleSelect=m),v_(m)}),wg(),jc(9,`po-switch`,9),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.disabled,m)||(i.disabled=m),v_(m)}),wg(),jc(10,`po-switch`,10),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.noBorder,m)||(i.noBorder=m),v_(m)}),wg(),jc(11,`po-radio-group`,11),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.componentsSize,m)||(i.componentsSize=m),v_(m)}),wg()(),nu(12,`po-divider`,12),jc(13,`form`,null,0)(15,`div`,3)(16,`po-select`,13),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.parent,m)||(i.parent=m),v_(m)}),wg(),jc(17,`po-input`,14),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.treeViewItem.label,m)||(i.treeViewItem.label=m),v_(m)}),wg(),jc(18,`po-input`,15),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.treeViewItem.value,m)||(i.treeViewItem.value=m),v_(m)}),wg()(),jc(19,`div`,3)(20,`po-checkbox-group`,16),JN(),ob(`ngModelChange`,function(m){return y_(p),sO(i.itemProperties,m)||(i.itemProperties=m),v_(m)}),wg()(),jc(21,`div`,3)(22,`po-button`,17),mt(`p-click`,function(){y_(p);let m=Fx(14);return v_(i.addTreeViewItem(m))}),wg()()(),nu(23,`po-divider`),jc(24,`div`,3)(25,`po-button`,18),mt(`p-click`,function(){return i.restore()}),wg()()}if(o&2){let p=Fx(14);jE(`p-components-size`,i.componentsSize)(`p-disabled`,i.disabled)(`p-items`,i.items)(`p-max-level`,i.maxLevel)(`p-no-border`,i.noBorder)(`p-selectable`,i.selectable)(`p-single-select`,i.singleSelect),rg(3),jE(`p-value`,i.event),rg(3),ib(`ngModel`,i.maxLevel),t0(),rg(),ib(`ngModel`,i.selectable),t0(),rg(),ib(`ngModel`,i.singleSelect),t0(),rg(),ib(`ngModel`,i.disabled),t0(),rg(),ib(`ngModel`,i.noBorder),t0(),rg(),ib(`ngModel`,i.componentsSize),jE(`p-options`,i.componentsSizeOptions),t0(),rg(5),ib(`ngModel`,i.parent),jE(`p-options`,i.parentList),t0(),rg(),ib(`ngModel`,i.treeViewItem.label),t0(),rg(),ib(`ngModel`,i.treeViewItem.value),t0(),rg(2),ib(`ngModel`,i.itemProperties),jE(`p-options`,i.itemPropertiesOptions),t0(),rg(2),jE(`p-disabled`,p.invalid)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,doe,Ote,moe,w5,_oe,nFe],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tree-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Tree View Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-tree-view
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tree-view-labs`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ee],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{items=[{label:`my_project`,value:1,expanded:!0,subItems:[{label:`angular.json`,value:121},{label:`browserslist`,value:122,subItems:[{label:`e2e`,value:1223,subItems:[{label:`protractor.conf.js`,value:12231},{label:`src`,value:12232},{label:`tsconfig.json`,value:12233}]}]},{label:`karma.conf.js`,value:123},{label:`node_modules`,value:124},{label:`package.json`,value:125},{label:`package-lock.json`,value:126},{label:`README.md`,value:127},{label:`src`,value:128,subItems:[{label:`app`,value:1281},{label:`assets`,value:1282},{label:`environments`,value:1283},{label:`favicon.ico`,value:1284},{label:`index.html`,value:1285},{label:`main.ts`,value:1286},{label:`polyfills.ts`,value:1287},{label:`styles.css`,value:1288},{label:`test.ts`,value:1289}]},{label:`tsconfig.app.json`,value:129},{label:`tsconfig.json`,value:130},{label:`tsconfig.spec.json`,value:131},{label:`eslint.json`,value:132}]}];static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tree-view-folder-structure`]],standalone:!1,decls:4,vars:1,consts:[[`p-title`,`Angular folder structure`],[1,`po-mb-4`,`po-ml-1`,`po-text-color-neutral-dark-40`],[1,`po-lg-4`,`po-md-6`,3,`p-items`]],template:function(o,i){o&1&&(jc(0,`po-page-default`,0)(1,`p`,1),iO(2,` This is the basic structure created using the Angular cli: `),wg(),nu(3,`po-tree-view`,2),wg()),o&2&&(rg(3),jE(`p-items`,i.items))},dependencies:[Kze,nFe],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tree-view-folder-structure-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Tree View - Folder Structure`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tree-view-folder-structure`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ae,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ge],encapsulation:2,changeDetection:1})}return a})();var qe=[`stepper`];var fe=(()=>{class a{stepper;columnsItemsSelected=[{property:`item`}];confirmed=!1;itemsListSelected=[];items=[{label:`Condiments`,value:`condiments`,subItems:[{label:`Extra virgin Olive`,value:`extraVirginOlive`},{label:`Mayonnaise`,value:`Mayonnaise`},{label:`Tomato ketchup`,value:`tomatoKetchup`},{label:`Soda`,value:`soda`}]},{label:`Drinks`,value:`drinks`,subItems:[{label:`Orange juice`,value:`orangeJuice`},{label:`Grape juice`,value:`grapeJuice`},{label:`Beer`,value:`beer`},{label:`Wine`,value:`wine`},{label:`Soda`,value:`soda`}]},{label:`Grains`,value:122,subItems:[{label:`Black bean`,value:`blackBean`},{label:`Chickpeas`,value:`chickpeas`},{label:`Lentil`,value:`lentil`},{label:`Pea`,value:`pea`}]},{label:`Personal hygiene`,value:`personalHygiene`,subItems:[{label:`Body wash`,value:`bodyWash`},{label:`Deodorant`,value:`deodorant`},{label:`Shampoo`,value:`deodorant`},{label:`Conditioner`,value:`conditioner`},{label:`Sunscreen lotion`,value:`sunscreenLotion`}]},{label:`Frozen foods`,value:`frozenFoods`,subItems:[{label:`Hamburguer`,value:`hamburguer`},{label:`Lasagna`,value:`lasagna`},{label:`Sandwiches`,value:`sandwiches`}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label})}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label})}checkOut(){this.confirmed=!0,this.stepper.next()}isConfirmed(){return!!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item))}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tree-view-supermarket`]],viewQuery:function(o,i){if(o&1&&iu(qe,7),o&2){let p;vo(p=_o())&&(i.stepper=p.first)}},standalone:!1,decls:18,vars:6,consts:[[`stepper`,``],[`p-title`,`Welcome to the PO Supermarket`],[1,`po-offset-md-3`,`po-offset-lg-2`,`po-offset-xl-2`],[1,`po-row`],[`p-step-icons`,``,1,`po-md-9`,`po-lg-8`,`po-mb-1`],[`p-label`,`Step 1`],[1,`po-font-subtitle`],[`p-selectable`,``,3,`p-selected`,`p-unselected`,`p-items`],[`p-label`,`Step 2`,3,`p-can-active-next-step`],[`p-primary-label`,`Confirm`,`p-title`,`Selected items`,3,`p-primary-action`,`p-disabled`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-label`,`Step 3`],[1,`po-row`,`po-font-display`],[`p-icon`,`po-icon an an-check`]],template:function(o,i){o&1&&(jc(0,`po-page-default`,1)(1,`div`,2)(2,`div`,3)(3,`po-stepper`,4,0)(5,`po-step`,5)(6,`p`,6),iO(7,`Please, select your items:`),wg(),jc(8,`po-tree-view`,7),mt(`p-selected`,function(c){return i.addItem(c)})(`p-unselected`,function(c){return i.removeItem(c)}),wg()(),jc(9,`po-step`,8)(10,`po-widget`,9),mt(`p-primary-action`,function(){return i.checkOut()}),nu(11,`po-table`,10),wg()(),jc(12,`po-step`,11)(13,`po-widget`)(14,`div`,12)(15,`p`),iO(16,`Order dispatched`),wg(),nu(17,`po-icon`,13),wg()()()()()()()),o&2&&(rg(8),jE(`p-items`,i.items),rg(),jE(`p-can-active-next-step`,i.isConfirmed.bind(i)),rg(),jE(`p-disabled`,i.itemsListSelected.length<1),rg(),jE(`p-columns`,i.columnsItemsSelected)(`p-items`,i.itemsListSelected)(`p-hide-table-search`,!1))},dependencies:[Tt,Kze,dae,eFe,I5,nFe,Noe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tree-view-supermarket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Tree View - Supermarket`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Welcome to the PO Supermarket">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tree-view-supermarket`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ne,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,fe],encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tree-view-doc`]],standalone:!1,decls:775,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTreeViewItem>`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`null`]],template:function(o,i){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoTreeViewModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente `),jc(7,`code`),iO(8,`po-tree-view`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoTreeViewComponent`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a exibi\xE7\xE3o de informa\xE7\xF5es de maneira
hier\xE1rquica com suporte a m\xFAltiplos n\xEDveis (configur\xE1vel via `),jc(18,`code`),iO(19,`p-max-level`),wg(),iO(20,`).`),wg(),jc(21,`p`),iO(22,`O componente permite:`),wg(),jc(23,`ul`)(24,`li`),iO(25,`Navegação completa por teclado seguindo o padrão WAI-ARIA TreeView;`),wg(),jc(26,`li`),iO(27,`Expansão e recolhimento de itens agrupadores;`),wg(),jc(28,`li`),iO(29,`Seleção múltipla (checkbox) ou única (radio) dos itens;`),wg(),jc(30,`li`),iO(31,`Exibição de ícones automáticos para agrupadores e itens finais;`),wg(),jc(32,`li`),iO(33,`Estado desabilitado global ou individual por item;`),wg(),jc(34,`li`),iO(35,`Execução de itens finais via clique ou teclado.`),wg()(),jc(36,`h4`),iO(37,`Navegação por teclado`),wg(),jc(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),iO(42,`Tecla`),wg(),jc(43,`th`),iO(44,`Descrição`),wg()()(),jc(45,`tbody`)(46,`tr`)(47,`td`)(48,`strong`),iO(49,`Tab`),wg()(),jc(50,`td`),iO(51,`Entra no componente posicionando o foco no primeiro nó ativo. Ao pressionar novamente, sai do componente.`),wg()(),jc(52,`tr`)(53,`td`)(54,`strong`),iO(55,`ArrowDown`),wg()(),jc(56,`td`),iO(57,`Move o foco para o próximo nó visível.`),wg()(),jc(58,`tr`)(59,`td`)(60,`strong`),iO(61,`ArrowUp`),wg()(),jc(62,`td`),iO(63,`Move o foco para o nó visível anterior.`),wg()(),jc(64,`tr`)(65,`td`)(66,`strong`),iO(67,`ArrowRight`),wg()(),jc(68,`td`),iO(69,`Se colapsado, expande o nó. Se expandido, move o foco para o nó filho.`),wg()(),jc(70,`tr`)(71,`td`)(72,`strong`),iO(73,`ArrowLeft`),wg()(),jc(74,`td`),iO(75,`Se expandido, recolhe o nó. Se filho, move o foco para o nó pai.`),wg()(),jc(76,`tr`)(77,`td`)(78,`strong`),iO(79,`Home`),wg()(),jc(80,`td`),iO(81,`Move o foco para o primeiro nó visível.`),wg()(),jc(82,`tr`)(83,`td`)(84,`strong`),iO(85,`End`),wg()(),jc(86,`td`),iO(87,`Move o foco para o último nó visível.`),wg()(),jc(88,`tr`)(89,`td`)(90,`strong`),iO(91,`Enter / Space`),wg()(),jc(92,`td`),iO(93,`Com `),jc(94,`code`),iO(95,`p-selectable`),wg(),iO(96,`: alterna a seleção do item. Sem `),jc(97,`code`),iO(98,`p-selectable`),wg(),iO(99,`: executa o item final.`),wg()(),jc(100,`tr`)(101,`td`)(102,`strong`),iO(103,`Caractere`),wg()(),jc(104,`td`),iO(105,`Move o foco para o próximo nó cujo label inicia com o caractere pressionado (busca cíclica).`),wg()()()(),jc(106,`h4`),iO(107,`Tokens customizáveis`),wg(),jc(108,`p`),iO(109,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(110,`blockquote`)(111,`p`),iO(112,`Para maiores informações, acesse o guia `),jc(113,`a`,6),iO(114,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(115,`.`),wg()(),jc(116,`table`)(117,`thead`)(118,`tr`)(119,`th`),iO(120,`Propriedade`),wg(),jc(121,`th`),iO(122,`Descrição`),wg(),jc(123,`th`),iO(124,`Valor Padrão`),wg()()(),jc(125,`tbody`)(126,`tr`)(127,`td`)(128,`strong`),iO(129,`Default`),wg()(),nu(130,`td`)(131,`td`),wg(),jc(132,`tr`)(133,`td`)(134,`code`),iO(135,`--background-color`),wg()(),jc(136,`td`),iO(137,`Cor de background do item`),wg(),jc(138,`td`)(139,`code`),iO(140,`var(--color-neutral-light-00)`),wg()()(),jc(141,`tr`)(142,`td`)(143,`code`),iO(144,`--divider-color`),wg()(),jc(145,`td`),iO(146,`Cor do divider dos agrupadores de nível 0`),wg(),jc(147,`td`)(148,`code`),iO(149,`var(--color-neutral-mid-40)`),wg()()(),jc(150,`tr`)(151,`td`)(152,`code`),iO(153,`--font-family`),wg()(),jc(154,`td`),iO(155,`Família tipográfica`),wg(),jc(156,`td`)(157,`code`),iO(158,`var(--font-family-theme)`),wg()()(),jc(159,`tr`)(160,`td`)(161,`code`),iO(162,`--font-size`),wg()(),jc(163,`td`),iO(164,`Tamanho da fonte`),wg(),jc(165,`td`)(166,`code`),iO(167,`var(--font-size-default)`),wg()()(),jc(168,`tr`)(169,`td`)(170,`code`),iO(171,`--line-height`),wg()(),jc(172,`td`),iO(173,`Altura da linha`),wg(),jc(174,`td`)(175,`code`),iO(176,`var(--line-height-md)`),wg()()(),jc(177,`tr`)(178,`td`)(179,`code`),iO(180,`--color`),wg()(),jc(181,`td`),iO(182,`Cor padrão do item`),wg(),jc(183,`td`)(184,`code`),iO(185,`var(--color-action-default)`),wg()()(),jc(186,`tr`)(187,`td`)(188,`strong`),iO(189,`Hover`),wg()(),nu(190,`td`)(191,`td`),wg(),jc(192,`tr`)(193,`td`)(194,`code`),iO(195,`--color-hover`),wg()(),jc(196,`td`),iO(197,`Cor do item em hover`),wg(),jc(198,`td`)(199,`code`),iO(200,`var(--color-action-hover)`),wg()()(),jc(201,`tr`)(202,`td`)(203,`strong`),iO(204,`Pressed`),wg()(),nu(205,`td`)(206,`td`),wg(),jc(207,`tr`)(208,`td`)(209,`code`),iO(210,`--color-pressed`),wg()(),jc(211,`td`),iO(212,`Cor do item em pressed`),wg(),jc(213,`td`)(214,`code`),iO(215,`var(--color-action-pressed)`),wg()()(),jc(216,`tr`)(217,`td`)(218,`strong`),iO(219,`Disabled`),wg()(),nu(220,`td`)(221,`td`),wg(),jc(222,`tr`)(223,`td`)(224,`code`),iO(225,`--color-disabled`),wg()(),jc(226,`td`),iO(227,`Cor do item desabilitado`),wg(),jc(228,`td`)(229,`code`),iO(230,`var(--color-action-disabled)`),wg()()(),jc(231,`tr`)(232,`td`)(233,`strong`),iO(234,`Selected`),wg()(),nu(235,`td`)(236,`td`),wg(),jc(237,`tr`)(238,`td`)(239,`code`),iO(240,`--title-color`),wg()(),jc(241,`td`),iO(242,`Cor do label quando selecionado`),wg(),jc(243,`td`)(244,`code`),iO(245,`var(--color-action-focus)`),wg()()()()()(),jc(246,`div`,7)(247,`h4`,8),iO(248,`Seletor`),wg(),jc(249,`pre`,9),iO(250,`<po-tree-view
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
`),wg()(),jc(251,`h4`,10),iO(252,`Propriedades`),wg(),jc(253,`table`,11)(254,`tr`,12)(255,`th`,13),iO(256,`Nome`),wg(),jc(257,`th`,13),iO(258,`Tipo`),wg(),jc(259,`th`,13),iO(260,`Padrão`),wg(),jc(261,`th`,13),iO(262,`Descrição`),wg()(),jc(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),iO(267,` (p-activated)`),nu(268,`br`),wg()()(),jc(269,`td`,18)(270,`code`,19),iO(271,`EventEmitter`),wg()(),jc(272,`td`,20),iO(273,`-`),wg(),jc(274,`td`,21)(275,`em`)(276,`strong`),iO(277,`(opcional)`),wg()(),jc(278,`p`),iO(279,`Ação que será disparada ao executar um item final (sem `),jc(280,`code`),iO(281,`subItems`),wg(),iO(282,`).`),wg(),jc(283,`blockquote`)(284,`p`),iO(285,`Como parâmetro o componente envia o item executado.`),wg()()()(),jc(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),iO(290,` (p-collapsed)`),nu(291,`br`),wg()()(),jc(292,`td`,18)(293,`code`,19),iO(294,`EventEmitter`),wg()(),jc(295,`td`,20),iO(296,`-`),wg(),jc(297,`td`,21)(298,`em`)(299,`strong`),iO(300,`(opcional)`),wg()(),jc(301,`p`),iO(302,`Ação que será disparada ao colapsar um item.`),wg(),jc(303,`blockquote`)(304,`p`),iO(305,`Como parâmetro o componente envia o item colapsado.`),wg()()()(),jc(306,`tr`,14)(307,`td`,15)(308,`div`,22)(309,`span`,23),iO(310,` p-components-size`),nu(311,`br`),wg()()(),jc(312,`td`,18)(313,`code`,24),iO(314,`string`),wg()(),jc(315,`td`,20)(316,`p`)(317,`code`),iO(318,`medium`),wg()()(),jc(319,`td`,21)(320,`em`)(321,`strong`),iO(322,`(opcional)`),wg()(),jc(323,`p`),iO(324,`Define o tamanho dos componentes de formulário:`),wg(),jc(325,`ul`)(326,`li`)(327,`code`),iO(328,`small`),wg(),iO(329,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(330,`li`)(331,`code`),iO(332,`medium`),wg(),iO(333,`: aplica a medida medium de cada componente.`),wg()(),jc(334,`blockquote`)(335,`p`),iO(336,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(337,`code`),iO(338,`medium`),wg(),iO(339,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(340,`a`,25),iO(341,`po-theme`),wg(),iO(342,`.`),wg()()()(),jc(343,`tr`,14)(344,`td`,15)(345,`div`,22)(346,`span`,23),iO(347,` p-disabled`),nu(348,`br`),wg()()(),jc(349,`td`,18)(350,`code`,26),iO(351,`boolean`),wg()(),jc(352,`td`,20)(353,`p`)(354,`code`),iO(355,`false`),wg()()(),jc(356,`td`,21)(357,`em`)(358,`strong`),iO(359,`(opcional)`),wg()(),jc(360,`p`),iO(361,`Desabilita o componente inteiro.`),wg(),jc(362,`p`),iO(363,`Quando `),jc(364,`code`),iO(365,`true`),wg(),iO(366,`, todos os itens do tree-view ser\xE3o exibidos no estado desabilitado,
independentemente do valor individual da propriedade `),jc(367,`code`),iO(368,`disabled`),wg(),iO(369,` de cada item.`),wg(),jc(370,`blockquote`)(371,`p`),iO(372,`O botão de expansão/recolhimento (arrow) permanece interativo mesmo quando o componente está desabilitado.`),wg()()()(),jc(373,`tr`,14)(374,`td`,15)(375,`div`,16)(376,`span`,17),iO(377,` (p-expanded)`),nu(378,`br`),wg()()(),jc(379,`td`,18)(380,`code`,19),iO(381,`EventEmitter`),wg()(),jc(382,`td`,20),iO(383,`-`),wg(),jc(384,`td`,21)(385,`em`)(386,`strong`),iO(387,`(opcional)`),wg()(),jc(388,`p`),iO(389,`Ação que será disparada ao expandir um item.`),wg(),jc(390,`blockquote`)(391,`p`),iO(392,`Como parâmetro o componente envia o item expandido.`),wg()()()(),jc(393,`tr`,14)(394,`td`,15)(395,`div`,22)(396,`span`,23),iO(397,` p-items`),nu(398,`br`),wg()()(),jc(399,`td`,18)(400,`code`,27),iO(401,`Array<PoTreeViewItem>`),wg()(),jc(402,`td`,20),iO(403,`-`),wg(),jc(404,`td`,21)(405,`p`),iO(406,`Lista de itens do tipo `),jc(407,`code`),iO(408,`PoTreeViewItem`),wg(),iO(409,` que será renderizada pelo componente.`),wg(),jc(410,`blockquote`)(411,`p`),iO(412,`Consulte a documentação de `),jc(413,`code`),iO(414,`PoTreeViewItem`),wg(),iO(415,` para detalhes sobre as propriedades disponíveis em cada item.`),wg()()()(),jc(416,`tr`,14)(417,`td`,15)(418,`div`,22)(419,`span`,23),iO(420,` p-max-level`),nu(421,`br`),wg()()(),jc(422,`td`,18)(423,`code`,28),iO(424,`number`),wg()(),jc(425,`td`,20)(426,`p`),iO(427,`4`),wg()(),jc(428,`td`,21)(429,`em`)(430,`strong`),iO(431,`(opcional)`),wg()(),jc(432,`p`),iO(433,`Define o máximo de níveis para o tree-view.`),wg(),jc(434,`blockquote`)(435,`p`),iO(436,`O valor padrão é 4`),wg()()()(),jc(437,`tr`,14)(438,`td`,15)(439,`div`,22)(440,`span`,23),iO(441,` p-no-border`),nu(442,`br`),wg()()(),jc(443,`td`,18)(444,`code`,26),iO(445,`boolean`),wg()(),jc(446,`td`,20)(447,`p`),iO(448,`false`),wg()(),jc(449,`td`,21)(450,`em`)(451,`strong`),iO(452,`(opcional)`),wg()(),jc(453,`p`),iO(454,`Remove a borda do container do componente.`),wg()()(),jc(455,`tr`,14)(456,`td`,15)(457,`div`,22)(458,`span`,23),iO(459,` p-selectable`),nu(460,`br`),wg()()(),jc(461,`td`,18)(462,`code`,26),iO(463,`boolean`),wg()(),jc(464,`td`,20)(465,`p`),iO(466,`false`),wg()(),jc(467,`td`,21)(468,`em`)(469,`strong`),iO(470,`(opcional)`),wg()(),jc(471,`p`),iO(472,`Habilita uma caixa de seleção para selecionar e/ou desmarcar um item da lista.`),wg(),jc(473,`blockquote`)(474,`p`),iO(475,`Quando habilitado, a propriedade `),jc(476,`code`),iO(477,`showIcon`),wg(),iO(478,` dos itens não será aplicada.`),wg()()()(),jc(479,`tr`,14)(480,`td`,15)(481,`div`,16)(482,`span`,17),iO(483,` (p-selected)`),nu(484,`br`),wg()()(),jc(485,`td`,18)(486,`code`,19),iO(487,`EventEmitter`),wg()(),jc(488,`td`,20),iO(489,`-`),wg(),jc(490,`td`,21)(491,`em`)(492,`strong`),iO(493,`(opcional)`),wg()(),jc(494,`p`),iO(495,`Ação que será disparada ao selecionar um item.`),wg(),jc(496,`blockquote`)(497,`p`),iO(498,`Como parâmetro o componente envia o item selecionado.`),wg()()()(),jc(499,`tr`,14)(500,`td`,15)(501,`div`,22)(502,`span`,23),iO(503,` p-single-select`),nu(504,`br`),wg()()(),jc(505,`td`,18)(506,`code`,26),iO(507,`boolean`),wg()(),jc(508,`td`,20)(509,`p`),iO(510,`false`),wg()(),jc(511,`td`,21)(512,`em`)(513,`strong`),iO(514,`(opcional)`),wg()(),jc(515,`p`),iO(516,`Habilita a seleção para item único atráves de po-radio.`),wg()()(),jc(517,`tr`,14)(518,`td`,15)(519,`div`,16)(520,`span`,17),iO(521,` (p-unselected)`),nu(522,`br`),wg()()(),jc(523,`td`,18)(524,`code`,19),iO(525,`EventEmitter`),wg()(),jc(526,`td`,20),iO(527,`-`),wg(),jc(528,`td`,21)(529,`em`)(530,`strong`),iO(531,`(opcional)`),wg()(),jc(532,`p`),iO(533,`Ação que será disparada ao desfazer a seleção de um item.`),wg(),jc(534,`blockquote`)(535,`p`),iO(536,`Como parâmetro o componente envia o item que foi desmarcado.`),wg()()()()(),jc(537,`h3`),iO(538,`Interfaces`),wg(),jc(539,`h4`,29)(540,`code`,5),iO(541,`PoTreeViewItem`),wg()(),jc(542,`div`,2)(543,`p`),iO(544,`Interface para definição dos itens do componente `),jc(545,`code`),iO(546,`po-tree-view`),wg(),iO(547,`.`),wg()(),jc(548,`h4`,10),iO(549,`Propriedades`),wg(),jc(550,`table`,11)(551,`tr`,12)(552,`th`,13),iO(553,`Nome`),wg(),jc(554,`th`,13),iO(555,`Tipo`),wg(),jc(556,`th`,13),iO(557,`Descrição`),wg()(),jc(558,`tr`,14)(559,`td`,15)(560,`div`,22)(561,`span`,23),iO(562,` disabled`),nu(563,`br`),wg()()(),jc(564,`td`,18)(565,`code`,26),iO(566,`boolean`),wg()(),jc(567,`td`,21)(568,`em`)(569,`strong`),iO(570,`(opcional)`),wg()(),jc(571,`p`),iO(572,`Desabilita a interação com o item.`),wg(),jc(573,`p`),iO(574,`O estado \xE9 aplicado somente ao item em que a propriedade est\xE1 configurada
e n\xE3o \xE9 propagado para seus `),jc(575,`code`),iO(576,`subItems`),wg(),iO(577,`.`),wg(),jc(578,`blockquote`)(579,`p`),iO(580,`Itens disabled que não possuem `),jc(581,`code`),iO(582,`subItems`),wg(),iO(583,` s\xE3o ignorados na navega\xE7\xE3o por teclado.
Itens disabled que possuem `),jc(584,`code`),iO(585,`subItems`),wg(),iO(586,` continuam participando da navegação, permitindo expandir/recolher.`),wg()()()(),jc(587,`tr`,14)(588,`td`,15)(589,`div`,22)(590,`span`,23),iO(591,` expanded`),nu(592,`br`),wg()()(),jc(593,`td`,18)(594,`code`,26),iO(595,`boolean`),wg()(),jc(596,`td`,21)(597,`em`)(598,`strong`),iO(599,`(opcional)`),wg()(),jc(600,`p`),iO(601,`Expande o item, exibindo seus `),jc(602,`code`),iO(603,`subItems`),wg(),iO(604,`.`),wg(),jc(605,`p`),iO(606,`Quando `),jc(607,`code`),iO(608,`true`),wg(),iO(609,`, o item será renderizado no estado expandido.`),wg(),jc(610,`blockquote`)(611,`p`),iO(612,`Sem efeito em itens que não possuem `),jc(613,`code`),iO(614,`subItems`),wg(),iO(615,`.`),wg()()()(),jc(616,`tr`,14)(617,`td`,15)(618,`div`,22)(619,`span`,23),iO(620,` isSelectable`),nu(621,`br`),wg()()(),jc(622,`td`,18)(623,`code`,26),iO(624,`boolean `),wg(),jc(625,`code`,30),iO(626,` null`),wg()(),jc(627,`td`,21)(628,`em`)(629,`strong`),iO(630,`(opcional)`),wg()(),jc(631,`p`),iO(632,`Permite ativar ou desativar a seleção do item.`),wg(),jc(633,`p`),iO(634,`Quando `),jc(635,`code`),iO(636,`false`),wg(),iO(637,`, o item não poderá ser selecionado pelo usuário.`),wg()()(),jc(638,`tr`,14)(639,`td`,15)(640,`div`,22)(641,`span`,23),iO(642,` label`),nu(643,`br`),wg()()(),jc(644,`td`,18)(645,`code`,24),iO(646,`string`),wg()(),jc(647,`td`,21)(648,`p`),iO(649,`Texto de exibição do item.`),wg(),jc(650,`p`),iO(651,`O valor é utilizado como `),jc(652,`code`),iO(653,`aria-label`),wg(),iO(654,` do nó e como referência na navegação por caractere do teclado.`),wg()()(),jc(655,`tr`,14)(656,`td`,15)(657,`div`,22)(658,`span`,23),iO(659,` selected`),nu(660,`br`),wg()()(),jc(661,`td`,18)(662,`code`,26),iO(663,`boolean `),wg(),jc(664,`code`,30),iO(665,` null`),wg()(),jc(666,`td`,21)(667,`em`)(668,`strong`),iO(669,`(opcional)`),wg()(),jc(670,`p`),iO(671,`Marca o item como selecionado.`),wg(),jc(672,`blockquote`)(673,`p`),iO(674,`Caso o item que possuir `),jc(675,`code`),iO(676,`subItems`),wg(),iO(677,` for selecionado, os seus itens filhos serão também selecionados.`),wg()(),jc(678,`p`),iO(679,`Quando utilizado com `),jc(680,`code`),iO(681,`p-single-select`),wg(),iO(682,`, apenas um item pode estar selecionado por vez.
Ao selecionar outro item, o anteriormente selecionado perde o estado.`),wg()()(),jc(683,`tr`,14)(684,`td`,15)(685,`div`,22)(686,`span`,23),iO(687,` showIcon`),nu(688,`br`),wg()()(),jc(689,`td`,18)(690,`code`,26),iO(691,`boolean`),wg()(),jc(692,`td`,21)(693,`em`)(694,`strong`),iO(695,`(opcional)`),wg()(),jc(696,`p`),iO(697,`Habilita a exibição de ícone no item.`),wg(),jc(698,`p`),iO(699,`Quando `),jc(700,`code`),iO(701,`true`),wg(),iO(702,`, exibe automaticamente:`),wg(),jc(703,`ul`)(704,`li`)(705,`code`),iO(706,`an-folder-simple`),wg(),iO(707,` para itens agrupadores (que possuem `),jc(708,`code`),iO(709,`subItems`),wg(),iO(710,`).`),wg(),jc(711,`li`)(712,`code`),iO(713,`an-file`),wg(),iO(714,` para itens finais (sem `),jc(715,`code`),iO(716,`subItems`),wg(),iO(717,`).`),wg()(),jc(718,`blockquote`)(719,`p`),iO(720,`Não funciona em conjunto com `),jc(721,`code`),iO(722,`p-selectable`),wg(),iO(723,`.
Quando `),jc(724,`code`),iO(725,`p-selectable`),wg(),iO(726,` e `),jc(727,`code`),iO(728,`showIcon`),wg(),iO(729,` estiverem configurados como `),jc(730,`code`),iO(731,`true`),wg(),iO(732,`,
`),jc(733,`code`),iO(734,`p-selectable`),wg(),iO(735,` terá precedência.`),wg()()()(),jc(736,`tr`,14)(737,`td`,15)(738,`div`,22)(739,`span`,23),iO(740,` subItems`),nu(741,`br`),wg()()(),jc(742,`td`,18)(743,`code`,27),iO(744,`Array<PoTreeViewItem>`),wg()(),jc(745,`td`,21)(746,`em`)(747,`strong`),iO(748,`(opcional)`),wg()(),jc(749,`p`),iO(750,`Lista de itens do próximo nível, permitindo a construção hierárquica da árvore.`),wg(),jc(751,`p`),iO(752,`A estrutura pode ser aninhada recursivamente até o limite definido pela propriedade `),jc(753,`code`),iO(754,`p-max-level`),wg(),iO(755,` do componente.`),wg()()(),jc(756,`tr`,14)(757,`td`,15)(758,`div`,22)(759,`span`,23),iO(760,` value`),nu(761,`br`),wg()()(),jc(762,`td`,18)(763,`code`,24),iO(764,`string `),wg(),jc(765,`code`,28),iO(766,` number`),wg()(),jc(767,`td`,21)(768,`p`),iO(769,`Valor do item utilizado como referência para sua identificação.`),wg(),jc(770,`p`),iO(771,`Em modo `),jc(772,`code`),iO(773,`p-single-select`),wg(),iO(774,`, este valor é utilizado para determinar qual item está atualmente selecionado.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var He=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Tree View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-tree-view-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-tree-view-basic-view`)(6,`sample-po-tree-view-labs-view`)(7,`sample-po-tree-view-folder-structure-view`)(8,`sample-po-tree-view-supermarket-view`),wg()()()),o&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ve,he,we,xe,Ce],encapsulation:2,changeDetection:1})}return a})()}];var Pe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(He),C1]})}return a})();var gt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,Pe]})}return a})();export{gt as DocPoTreeViewModule};