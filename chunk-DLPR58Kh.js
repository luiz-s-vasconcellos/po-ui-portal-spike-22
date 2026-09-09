import{t as r}from"./chunk-zystk1pz.js";import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ct as X4,Fi as he$1,Ft as dt,G as M8e,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,W as L8e,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,ei as Yl,fi as ag,gi as bL,ha as ww,hn as rCe,jn as ybe,l as ar,la as uo,lr as Gl,nn as j4,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var ye=()=>({label:`Adicionar`,value:1.1});var ue=a=>[a];var xe=a=>({label:`Gerenciador de usuários`,value:1,subItems:a});var be=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tree-view-basic`]],standalone:!1,decls:1,vars:8,consts:[[3,`p-items`]],template:function(o,i){o&1&&Gl(0,`po-tree-view`,0),o&2&&nw(`p-items`,DN(6,ue,DN(4,xe,DN(2,ue,_N(1,ye)))))},dependencies:[L8e],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tree-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tree View Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-tree-view
  [p-items]="[{ label: 'Gerenciador de usu\xE1rios', value: 1, subItems: [{ label: 'Adicionar', value: 1.1 }] }]"
>
</po-tree-view>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tree-view-basic`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{componentsSize=`medium`;event;items;itemProperties;parent;parentList;selectable;treeViewItem;maxLevel=4;singleSelect=!1;componentsSizeOptions=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`}];itemPropertiesOptions=[{value:`selected`,label:`Selected`},{value:`expanded`,label:`Expanded`},{value:`disable-selection`,label:`Disable Selection`}];ngOnInit(){this.restore()}add(r$1){r$1.selected=this.itemProperties.includes(`selected`),r$1.expanded=this.itemProperties.includes(`expanded`),r$1.isSelectable=!this.itemProperties.includes(`disable-selection`);let o=r({},r$1);if(!this.parent)this.items=[...this.items,o];else{let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o]}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items)}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`}restore(){this.componentsSize=`medium`,this.event=void 0,this.items=[],this.parent=void 0,this.parentList=[],this.itemProperties=[],this.selectable=void 0,this.treeViewItem={},this.maxLevel=4}getTreeViewItemNode(r,o){let i;if(r){for(let m of r)if(m.value===o){i=m;break}else i||(i=this.getTreeViewItemNode(m.subItems,o));return i}}updateParentList(r,o=0,i=[],m){return r.forEach(c=>{let{label:p,value:Ve}=c;i.push({label:`${`-`.repeat(o)} ${p}`,value:Ve}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=m?o:0}),i}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tree-view-labs`]],standalone:!1,decls:24,vars:18,consts:[[`treeViewItemForm`,`ngForm`],[3,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-components-size`,`p-items`,`p-selectable`,`p-max-level`,`p-single-select`],[`p-label`,`Events`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Po Tree View Config`],[`name`,`level`,`p-label`,`Max Level`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`selectable`,`p-label`,`Selectable`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`singleSelect`,`p-label`,`Single Select`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-5`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Po Tree View Item`],[`name`,`parent`,`p-label`,`Parent Item`,`p-placeholder`,`Add tree view item`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`itemProperties`,`p-columns`,`3`,`p-label`,`Item Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`o-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`]],template:function(o,i){if(o&1){let m=Ax();Tl(0,`po-tree-view`,1),ht(`p-collapsed`,function(p){return i.changeEvent(`p-collapsed`,p)})(`p-expanded`,function(p){return i.changeEvent(`p-expanded`,p)})(`p-selected`,function(p){return i.changeEvent(`p-selected`,p)})(`p-unselected`,function(p){return i.changeEvent(`p-unselected`,p)}),ag(),Gl(1,`po-divider`,2),Tl(2,`div`,3),Gl(3,`po-info`,4),ag(),Gl(4,`po-divider`,5),Tl(5,`div`,3)(6,`po-input`,6),ww(`ngModelChange`,function(p){return Ky(m),uN(i.maxLevel,p)||(i.maxLevel=p),Xy(p)}),ag(),a0(),Tl(7,`po-switch`,7),ww(`ngModelChange`,function(p){return Ky(m),uN(i.selectable,p)||(i.selectable=p),Xy(p)}),ag(),a0(),Tl(8,`po-switch`,8),ww(`ngModelChange`,function(p){return Ky(m),uN(i.singleSelect,p)||(i.singleSelect=p),Xy(p)}),ag(),a0(),Tl(9,`po-radio-group`,9),ww(`ngModelChange`,function(p){return Ky(m),uN(i.componentsSize,p)||(i.componentsSize=p),Xy(p)}),ag(),a0(),ag(),Gl(10,`po-divider`,10),Tl(11,`form`,null,0)(13,`div`,3)(14,`po-select`,11),ww(`ngModelChange`,function(p){return Ky(m),uN(i.parent,p)||(i.parent=p),Xy(p)}),ag(),a0(),Tl(15,`po-input`,12),ww(`ngModelChange`,function(p){return Ky(m),uN(i.treeViewItem.label,p)||(i.treeViewItem.label=p),Xy(p)}),ag(),a0(),Tl(16,`po-input`,13),ww(`ngModelChange`,function(p){return Ky(m),uN(i.treeViewItem.value,p)||(i.treeViewItem.value=p),Xy(p)}),ag(),a0(),ag(),Tl(17,`div`,3)(18,`po-checkbox-group`,14),ww(`ngModelChange`,function(p){return Ky(m),uN(i.itemProperties,p)||(i.itemProperties=p),Xy(p)}),ag(),a0(),ag(),Tl(19,`div`,3)(20,`po-button`,15),ht(`p-click`,function(){Ky(m);let p=Bx(12);return i.add(i.treeViewItem),p.reset(),Xy(i.itemProperties=[])}),ag()()(),Gl(21,`po-divider`),Tl(22,`div`,3)(23,`po-button`,16),ht(`p-click`,function(){return i.restore()}),ag()()}if(o&2){let m=Bx(12);nw(`p-components-size`,i.componentsSize)(`p-items`,i.items)(`p-selectable`,i.selectable)(`p-max-level`,i.maxLevel)(`p-single-select`,i.singleSelect),jp(3),nw(`p-value`,i.event),jp(3),Ew(`ngModel`,i.maxLevel),l0(),jp(),Ew(`ngModel`,i.selectable),l0(),jp(),Ew(`ngModel`,i.singleSelect),l0(),jp(),Ew(`ngModel`,i.componentsSize),nw(`p-options`,i.componentsSizeOptions),l0(),jp(5),Ew(`ngModel`,i.parent),nw(`p-options`,i.parentList),l0(),jp(),Ew(`ngModel`,i.treeViewItem.label),l0(),jp(),Ew(`ngModel`,i.treeViewItem.value),l0(),jp(2),Ew(`ngModel`,i.itemProperties),nw(`p-options`,i.itemPropertiesOptions),l0(),jp(2),nw(`p-disabled`,m.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,fbe,j4,ybe,L8e],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tree-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tree View Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-tree-view
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tree-view-labs`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,he],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{items=[{label:`my_project`,value:1,expanded:!0,subItems:[{label:`angular.json`,value:121},{label:`browserslist`,value:122,subItems:[{label:`e2e`,value:1223,subItems:[{label:`protractor.conf.js`,value:12231},{label:`src`,value:12232},{label:`tsconfig.json`,value:12233}]}]},{label:`karma.conf.js`,value:123},{label:`node_modules`,value:124},{label:`package.json`,value:125},{label:`package-lock.json`,value:126},{label:`README.md`,value:127},{label:`src`,value:128,subItems:[{label:`app`,value:1281},{label:`assets`,value:1282},{label:`environments`,value:1283},{label:`favicon.ico`,value:1284},{label:`index.html`,value:1285},{label:`main.ts`,value:1286},{label:`polyfills.ts`,value:1287},{label:`styles.css`,value:1288},{label:`test.ts`,value:1289}]},{label:`tsconfig.app.json`,value:129},{label:`tsconfig.json`,value:130},{label:`tsconfig.spec.json`,value:131},{label:`eslint.json`,value:132}]}];static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tree-view-folder-structure`]],standalone:!1,decls:4,vars:1,consts:[[`p-title`,`Angular folder structure`],[1,`po-mb-4`,`po-ml-1`,`po-text-color-neutral-dark-40`],[1,`po-lg-4`,`po-md-6`,3,`p-items`]],template:function(o,i){o&1&&(Tl(0,`po-page-default`,0)(1,`p`,1),cN(2,` This is the basic structure created using the Angular cli: `),ag(),Gl(3,`po-tree-view`,2),ag()),o&2&&(jp(3),nw(`p-items`,i.items))},dependencies:[S8e,L8e],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tree-view-folder-structure-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tree View - Folder Structure`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tree-view-folder-structure`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Fe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ge],encapsulation:2,changeDetection:1})}return a})();var Ae=[`stepper`];var fe=(()=>{class a{stepper;columnsItemsSelected=[{property:`item`}];confirmed=!1;itemsListSelected=[];items=[{label:`Condiments`,value:`condiments`,subItems:[{label:`Extra virgin Olive`,value:`extraVirginOlive`},{label:`Mayonnaise`,value:`Mayonnaise`},{label:`Tomato ketchup`,value:`tomatoKetchup`},{label:`Soda`,value:`soda`}]},{label:`Drinks`,value:`drinks`,subItems:[{label:`Orange juice`,value:`orangeJuice`},{label:`Grape juice`,value:`grapeJuice`},{label:`Beer`,value:`beer`},{label:`Wine`,value:`wine`},{label:`Soda`,value:`soda`}]},{label:`Grains`,value:122,subItems:[{label:`Black bean`,value:`blackBean`},{label:`Chickpeas`,value:`chickpeas`},{label:`Lentil`,value:`lentil`},{label:`Pea`,value:`pea`}]},{label:`Personal hygiene`,value:`personalHygiene`,subItems:[{label:`Body wash`,value:`bodyWash`},{label:`Deodorant`,value:`deodorant`},{label:`Shampoo`,value:`deodorant`},{label:`Conditioner`,value:`conditioner`},{label:`Sunscreen lotion`,value:`sunscreenLotion`}]},{label:`Frozen foods`,value:`frozenFoods`,subItems:[{label:`Hamburguer`,value:`hamburguer`},{label:`Lasagna`,value:`lasagna`},{label:`Sandwiches`,value:`sandwiches`}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label})}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label})}checkOut(){this.confirmed=!0,this.stepper.next()}isConfirmed(){return!!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item))}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tree-view-supermarket`]],viewQuery:function(o,i){if(o&1&&Yl(Ae,7),o&2){let m;lo(m=uo())&&(i.stepper=m.first)}},standalone:!1,decls:18,vars:6,consts:[[`stepper`,``],[`p-title`,`Welcome to the PO Supermarket`],[1,`po-offset-md-3`,`po-offset-lg-2`,`po-offset-xl-2`],[1,`po-row`],[`p-step-icons`,``,1,`po-md-9`,`po-lg-8`,`po-mb-1`],[`p-label`,`Step 1`],[1,`po-font-subtitle`],[`p-selectable`,``,3,`p-selected`,`p-unselected`,`p-items`],[`p-label`,`Step 2`,3,`p-can-active-next-step`],[`p-primary-label`,`Confirm`,`p-title`,`Selected items`,3,`p-primary-action`,`p-disabled`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-label`,`Step 3`],[1,`po-row`,`po-font-display`],[`p-icon`,`po-icon an an-check`]],template:function(o,i){o&1&&(Tl(0,`po-page-default`,1)(1,`div`,2)(2,`div`,3)(3,`po-stepper`,4,0)(5,`po-step`,5)(6,`p`,6),cN(7,`Please, select your items:`),ag(),Tl(8,`po-tree-view`,7),ht(`p-selected`,function(c){return i.addItem(c)})(`p-unselected`,function(c){return i.removeItem(c)}),ag()(),Tl(9,`po-step`,8)(10,`po-widget`,9),ht(`p-primary-action`,function(){return i.checkOut()}),Gl(11,`po-table`,10),ag()(),Tl(12,`po-step`,11)(13,`po-widget`)(14,`div`,12)(15,`p`),cN(16,`Order dispatched`),ag(),Gl(17,`po-icon`,13),ag()()()()()()()),o&2&&(jp(8),nw(`p-items`,i.items),jp(),nw(`p-can-active-next-step`,i.isConfirmed.bind(i)),jp(),nw(`p-disabled`,i.itemsListSelected.length<1),jp(),nw(`p-columns`,i.columnsItemsSelected)(`p-items`,i.itemsListSelected)(`p-hide-table-search`,!1))},dependencies:[dt,S8e,rCe,M8e,X4,L8e,O8e],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tree-view-supermarket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tree View - Supermarket`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Welcome to the PO Supermarket">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tree-view-supermarket`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,fe],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tree-view-doc`]],standalone:!1,decls:358,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTreeViewItem>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`null`]],template:function(o,i){o&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoTreeViewModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-tree-view`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoTreeViewComponent`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a visualiza\xE7\xE3o das informa\xE7\xF5es de maneira
hier\xE1rquica, desta forma sendo poss\xEDvel utilizar at\xE9 4 n\xEDveis.`),ag(),Tl(18,`p`),cN(19,`Nele é possível navegar entre os itens através da tecla `),Tl(20,`em`),cN(21,`tab`),ag(),cN(22,`, permitindo expandir ou colapsar o item em foco
por meio das teclas `),Tl(23,`em`),cN(24,`enter`),ag(),cN(25,` e `),Tl(26,`em`),cN(27,`space`),ag(),cN(28,`.`),ag(),Tl(29,`p`),cN(30,`Além da navegação, o componente possibilita também a seleção dos itens do primeiro ao último nível, tanto de forma parcial como completa.`),ag(),Tl(31,`p`),cN(32,`O componente também possui eventos disparados ao marcar/desmarcar e expandir/colapsar os itens. `),ag()(),Tl(33,`div`,6)(34,`h4`,7),cN(35,`Seletor`),ag(),Tl(36,`pre`,8),cN(37,`<po-tree-view
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
`),ag()(),Tl(38,`h4`,9),cN(39,`Propriedades`),ag(),Tl(40,`table`,10)(41,`tr`,11)(42,`th`,12),cN(43,`Nome`),ag(),Tl(44,`th`,12),cN(45,`Tipo`),ag(),Tl(46,`th`,12),cN(47,`Padrão`),ag(),Tl(48,`th`,12),cN(49,`Descrição`),ag()(),Tl(50,`tr`,13)(51,`td`,14)(52,`div`,15)(53,`span`,16),cN(54,` (p-collapsed)`),Gl(55,`br`),ag()()(),Tl(56,`td`,17)(57,`code`,18),cN(58,`EventEmitter`),ag()(),Tl(59,`td`,19),cN(60,`-`),ag(),Tl(61,`td`,20)(62,`em`)(63,`strong`),cN(64,`(opcional)`),ag()(),Tl(65,`p`),cN(66,`Ação que será disparada ao colapsar um item.`),ag(),Tl(67,`blockquote`)(68,`p`),cN(69,`Como parâmetro o componente envia o item colapsado.`),ag()()()(),Tl(70,`tr`,13)(71,`td`,14)(72,`div`,21)(73,`span`,22),cN(74,` p-components-size`),Gl(75,`br`),ag()()(),Tl(76,`td`,17)(77,`code`,23),cN(78,`string`),ag()(),Tl(79,`td`,19)(80,`p`)(81,`code`),cN(82,`medium`),ag()()(),Tl(83,`td`,20)(84,`em`)(85,`strong`),cN(86,`(opcional)`),ag()(),Tl(87,`p`),cN(88,`Define o tamanho dos componentes de formulário:`),ag(),Tl(89,`ul`)(90,`li`)(91,`code`),cN(92,`small`),ag(),cN(93,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(94,`li`)(95,`code`),cN(96,`medium`),ag(),cN(97,`: aplica a medida medium de cada componente.`),ag()(),Tl(98,`blockquote`)(99,`p`),cN(100,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(101,`code`),cN(102,`medium`),ag(),cN(103,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(104,`a`,24),cN(105,`po-theme`),ag(),cN(106,`.`),ag()()()(),Tl(107,`tr`,13)(108,`td`,14)(109,`div`,15)(110,`span`,16),cN(111,` (p-expanded)`),Gl(112,`br`),ag()()(),Tl(113,`td`,17)(114,`code`,18),cN(115,`EventEmitter`),ag()(),Tl(116,`td`,19),cN(117,`-`),ag(),Tl(118,`td`,20)(119,`em`)(120,`strong`),cN(121,`(opcional)`),ag()(),Tl(122,`p`),cN(123,`Ação que será disparada ao expandir um item.`),ag(),Tl(124,`blockquote`)(125,`p`),cN(126,`Como parâmetro o componente envia o item expandido.`),ag()()()(),Tl(127,`tr`,13)(128,`td`,14)(129,`div`,21)(130,`span`,22),cN(131,` p-items`),Gl(132,`br`),ag()()(),Tl(133,`td`,17)(134,`code`,25),cN(135,`Array<PoTreeViewItem>`),ag()(),Tl(136,`td`,19),cN(137,`-`),ag(),Tl(138,`td`,20)(139,`p`),cN(140,`Lista de itens do tipo `),Tl(141,`code`),cN(142,`PoTreeViewItem`),ag(),cN(143,` que será renderizada pelo componente.`),ag()()(),Tl(144,`tr`,13)(145,`td`,14)(146,`div`,21)(147,`span`,22),cN(148,` p-max-level`),Gl(149,`br`),ag()()(),Tl(150,`td`,17)(151,`code`,26),cN(152,`number`),ag()(),Tl(153,`td`,19)(154,`p`),cN(155,`4`),ag()(),Tl(156,`td`,20)(157,`em`)(158,`strong`),cN(159,`(opcional)`),ag()(),Tl(160,`p`),cN(161,`Define o máximo de níveis para o tree-view.`),ag(),Tl(162,`blockquote`)(163,`p`),cN(164,`O valor padrão é 4`),ag()()()(),Tl(165,`tr`,13)(166,`td`,14)(167,`div`,21)(168,`span`,22),cN(169,` p-selectable`),Gl(170,`br`),ag()()(),Tl(171,`td`,17)(172,`code`,27),cN(173,`boolean`),ag()(),Tl(174,`td`,19)(175,`p`),cN(176,`false`),ag()(),Tl(177,`td`,20)(178,`em`)(179,`strong`),cN(180,`(opcional)`),ag()(),Tl(181,`p`),cN(182,`Habilita uma caixa de seleção para selecionar e/ou desmarcar um item da lista.`),ag()()(),Tl(183,`tr`,13)(184,`td`,14)(185,`div`,15)(186,`span`,16),cN(187,` (p-selected)`),Gl(188,`br`),ag()()(),Tl(189,`td`,17)(190,`code`,18),cN(191,`EventEmitter`),ag()(),Tl(192,`td`,19),cN(193,`-`),ag(),Tl(194,`td`,20)(195,`em`)(196,`strong`),cN(197,`(opcional)`),ag()(),Tl(198,`p`),cN(199,`Ação que será disparada ao selecionar um item.`),ag(),Tl(200,`blockquote`)(201,`p`),cN(202,`Como parâmetro o componente envia o item selecionado.`),ag()()()(),Tl(203,`tr`,13)(204,`td`,14)(205,`div`,21)(206,`span`,22),cN(207,` p-single-select`),Gl(208,`br`),ag()()(),Tl(209,`td`,17)(210,`code`,27),cN(211,`boolean`),ag()(),Tl(212,`td`,19)(213,`p`),cN(214,`false`),ag()(),Tl(215,`td`,20)(216,`em`)(217,`strong`),cN(218,`(opcional)`),ag()(),Tl(219,`p`),cN(220,`Habilita a seleção para item único atráves de po-radio.`),ag()()(),Tl(221,`tr`,13)(222,`td`,14)(223,`div`,15)(224,`span`,16),cN(225,` (p-unselected)`),Gl(226,`br`),ag()()(),Tl(227,`td`,17)(228,`code`,18),cN(229,`EventEmitter`),ag()(),Tl(230,`td`,19),cN(231,`-`),ag(),Tl(232,`td`,20)(233,`em`)(234,`strong`),cN(235,`(opcional)`),ag()(),Tl(236,`p`),cN(237,`Ação que será disparada ao desfazer a seleção de um item.`),ag(),Tl(238,`blockquote`)(239,`p`),cN(240,`Como parâmetro o componente envia o item que foi desmarcado.`),ag()()()()(),Tl(241,`h3`),cN(242,`Interfaces`),ag(),Tl(243,`h4`,28)(244,`code`,5),cN(245,`PoTreeViewItem`),ag()(),Tl(246,`div`,2)(247,`p`),cN(248,`Interface para definição dos itens do componente `),Tl(249,`code`),cN(250,`po-tree-view`),ag(),cN(251,`.`),ag()(),Tl(252,`h4`,9),cN(253,`Propriedades`),ag(),Tl(254,`table`,10)(255,`tr`,11)(256,`th`,12),cN(257,`Nome`),ag(),Tl(258,`th`,12),cN(259,`Tipo`),ag(),Tl(260,`th`,12),cN(261,`Descrição`),ag()(),Tl(262,`tr`,13)(263,`td`,14)(264,`div`,21)(265,`span`,22),cN(266,` expanded`),Gl(267,`br`),ag()()(),Tl(268,`td`,17)(269,`code`,27),cN(270,`boolean`),ag()(),Tl(271,`td`,20)(272,`em`)(273,`strong`),cN(274,`(opcional)`),ag()(),Tl(275,`p`),cN(276,`Expande o item.`),ag()()(),Tl(277,`tr`,13)(278,`td`,14)(279,`div`,21)(280,`span`,22),cN(281,` isSelectable`),Gl(282,`br`),ag()()(),Tl(283,`td`,17)(284,`code`,27),cN(285,`boolean `),ag(),Tl(286,`code`,29),cN(287,` null`),ag()(),Tl(288,`td`,20)(289,`em`)(290,`strong`),cN(291,`(opcional)`),ag()(),Tl(292,`p`),cN(293,`Permite ativar/desativar a seleção do item`),ag()()(),Tl(294,`tr`,13)(295,`td`,14)(296,`div`,21)(297,`span`,22),cN(298,` label`),Gl(299,`br`),ag()()(),Tl(300,`td`,17)(301,`code`,23),cN(302,`string`),ag()(),Tl(303,`td`,20)(304,`p`),cN(305,`Desabilita a selec\xE3o do item.
Texto de exibi\xE7\xE3o do item.`),ag()()(),Tl(306,`tr`,13)(307,`td`,14)(308,`div`,21)(309,`span`,22),cN(310,` selected`),Gl(311,`br`),ag()()(),Tl(312,`td`,17)(313,`code`,27),cN(314,`boolean `),ag(),Tl(315,`code`,29),cN(316,` null`),ag()(),Tl(317,`td`,20)(318,`em`)(319,`strong`),cN(320,`(opcional)`),ag()(),Tl(321,`p`),cN(322,`Marca o item como selecionado.`),ag(),Tl(323,`blockquote`)(324,`p`),cN(325,`Caso o item que conter `),Tl(326,`code`),cN(327,`subItems`),ag(),cN(328,` for selecionado, os seus itens filhos serão também selecionados.`),ag()()()(),Tl(329,`tr`,13)(330,`td`,14)(331,`div`,21)(332,`span`,22),cN(333,` subItems`),Gl(334,`br`),ag()()(),Tl(335,`td`,17)(336,`code`,25),cN(337,`Array<PoTreeViewItem>`),ag()(),Tl(338,`td`,20)(339,`em`)(340,`strong`),cN(341,`(opcional)`),ag()(),Tl(342,`p`),cN(343,`Lista de itens do próximo nível, e assim consecutivamente até que se atinja o quarto nível.`),ag()()(),Tl(344,`tr`,13)(345,`td`,14)(346,`div`,21)(347,`span`,22),cN(348,` value`),Gl(349,`br`),ag()()(),Tl(350,`td`,17)(351,`code`,23),cN(352,`string `),ag(),Tl(353,`code`,26),cN(354,` number`),ag()(),Tl(355,`td`,20)(356,`p`),cN(357,`Valor do item que poderá ser utilizado como referência para sua identificação.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var We=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Tree View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-tree-view-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-tree-view-basic-view`)(6,`sample-po-tree-view-labs-view`)(7,`sample-po-tree-view-folder-structure-view`)(8,`sample-po-tree-view-supermarket-view`),ag()()()),o&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ve,Se,we,Ce,Ee],encapsulation:2,changeDetection:1})}return a})()}];var Pe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[bL.forChild(We),bL]})}return a})();var gt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[ar,Pe]})}return a})();export{gt as DocPoTreeViewModule};