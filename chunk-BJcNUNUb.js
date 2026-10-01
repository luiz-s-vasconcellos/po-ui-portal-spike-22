import{t as r}from"./chunk-zystk1pz.js";import{Br as RE,Di as he$1,Dt as aae,Hn as AN,I as Goe,Kn as BP,Li as kL,Pn as yt,Q as Pze,Qi as pt,Qt as m4,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Vr as RN,Wi as mg,Wt as ioe,Xn as C9,Yn as Bx,ai as aN,an as p4,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ii as Zx,k as Dze,ki as ho,kn as wze,la as ug,li as cE,lr as Hn,mn as t4,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue$1,tr as DN,un as roe,vr as Jv,wt as _4,xi as fo}from"./main-VW33P2VM.js";var ye=()=>({label:`Adicionar`,value:1.1});var ue=a=>[a];var xe=a=>({label:`Gerenciador de usuários`,value:1,subItems:a});var be=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-basic`]],standalone:!1,decls:1,vars:8,consts:[[3,`p-items`]],template:function(o,i){o&1&&Kc(0,`po-tree-view`,0),o&2&&cE(`p-items`,AN(6,ue,AN(4,xe,AN(2,ue,RN(1,ye)))))},dependencies:[Dze],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tree View Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-tree-view
  [p-items]="[{ label: 'Gerenciador de usu\xE1rios', value: 1, subItems: [{ label: 'Adicionar', value: 1.1 }] }]"
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tree-view-basic`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,be],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{componentsSize=`medium`;event;items;itemProperties;parent;parentList;selectable;treeViewItem;maxLevel=4;singleSelect=!1;componentsSizeOptions=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`}];itemPropertiesOptions=[{value:`selected`,label:`Selected`},{value:`expanded`,label:`Expanded`},{value:`disable-selection`,label:`Disable Selection`}];ngOnInit(){this.restore()}add(r$1){r$1.selected=this.itemProperties.includes(`selected`),r$1.expanded=this.itemProperties.includes(`expanded`),r$1.isSelectable=!this.itemProperties.includes(`disable-selection`);let o=r({},r$1);if(!this.parent)this.items=[...this.items,o];else{let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o]}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items)}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`}restore(){this.componentsSize=`medium`,this.event=void 0,this.items=[],this.parent=void 0,this.parentList=[],this.itemProperties=[],this.selectable=void 0,this.treeViewItem={},this.maxLevel=4}getTreeViewItemNode(r,o){let i;if(r){for(let m of r)if(m.value===o){i=m;break}else i||(i=this.getTreeViewItemNode(m.subItems,o));return i}}updateParentList(r,o=0,i=[],m){return r.forEach(c=>{let{label:p,value:Ve}=c;i.push({label:`${`-`.repeat(o)} ${p}`,value:Ve}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=m?o:0}),i}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-labs`]],standalone:!1,decls:24,vars:18,consts:[[`treeViewItemForm`,`ngForm`],[3,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-components-size`,`p-items`,`p-selectable`,`p-max-level`,`p-single-select`],[`p-label`,`Events`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Po Tree View Config`],[`name`,`level`,`p-label`,`Max Level`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`selectable`,`p-label`,`Selectable`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`singleSelect`,`p-label`,`Single Select`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-5`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Po Tree View Item`],[`name`,`parent`,`p-label`,`Parent Item`,`p-placeholder`,`Add tree view item`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`itemProperties`,`p-columns`,`3`,`p-label`,`Item Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`o-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`]],template:function(o,i){if(o&1){let m=Bx();Ac(0,`po-tree-view`,1),pt(`p-collapsed`,function(p){return i.changeEvent(`p-collapsed`,p)})(`p-expanded`,function(p){return i.changeEvent(`p-expanded`,p)})(`p-selected`,function(p){return i.changeEvent(`p-selected`,p)})(`p-unselected`,function(p){return i.changeEvent(`p-unselected`,p)}),ug(),Kc(1,`po-divider`,2),Ac(2,`div`,3),Kc(3,`po-info`,4),ug(),Kc(4,`po-divider`,5),Ac(5,`div`,3)(6,`po-input`,6),RE(`ngModelChange`,function(p){return Jv(m),DN(i.maxLevel,p)||(i.maxLevel=p),e_(p)}),ug(),p0(),Ac(7,`po-switch`,7),RE(`ngModelChange`,function(p){return Jv(m),DN(i.selectable,p)||(i.selectable=p),e_(p)}),ug(),p0(),Ac(8,`po-switch`,8),RE(`ngModelChange`,function(p){return Jv(m),DN(i.singleSelect,p)||(i.singleSelect=p),e_(p)}),ug(),p0(),Ac(9,`po-radio-group`,9),RE(`ngModelChange`,function(p){return Jv(m),DN(i.componentsSize,p)||(i.componentsSize=p),e_(p)}),ug(),p0(),ug(),Kc(10,`po-divider`,10),Ac(11,`form`,null,0)(13,`div`,3)(14,`po-select`,11),RE(`ngModelChange`,function(p){return Jv(m),DN(i.parent,p)||(i.parent=p),e_(p)}),ug(),p0(),Ac(15,`po-input`,12),RE(`ngModelChange`,function(p){return Jv(m),DN(i.treeViewItem.label,p)||(i.treeViewItem.label=p),e_(p)}),ug(),p0(),Ac(16,`po-input`,13),RE(`ngModelChange`,function(p){return Jv(m),DN(i.treeViewItem.value,p)||(i.treeViewItem.value=p),e_(p)}),ug(),p0(),ug(),Ac(17,`div`,3)(18,`po-checkbox-group`,14),RE(`ngModelChange`,function(p){return Jv(m),DN(i.itemProperties,p)||(i.itemProperties=p),e_(p)}),ug(),p0(),ug(),Ac(19,`div`,3)(20,`po-button`,15),pt(`p-click`,function(){Jv(m);let p=Zx(12);return i.add(i.treeViewItem),p.reset(),e_(i.itemProperties=[])}),ug()()(),Kc(21,`po-divider`),Ac(22,`div`,3)(23,`po-button`,16),pt(`p-click`,function(){return i.restore()}),ug()()}if(o&2){let m=Zx(12);cE(`p-components-size`,i.componentsSize)(`p-items`,i.items)(`p-selectable`,i.selectable)(`p-max-level`,i.maxLevel)(`p-single-select`,i.singleSelect),Hp(3),cE(`p-value`,i.event),Hp(3),TE(`ngModel`,i.maxLevel),m0(),Hp(),TE(`ngModel`,i.selectable),m0(),Hp(),TE(`ngModel`,i.singleSelect),m0(),Hp(),TE(`ngModel`,i.componentsSize),cE(`p-options`,i.componentsSizeOptions),m0(),Hp(5),TE(`ngModel`,i.parent),cE(`p-options`,i.parentList),m0(),Hp(),TE(`ngModel`,i.treeViewItem.label),m0(),Hp(),TE(`ngModel`,i.treeViewItem.value),m0(),Hp(2),TE(`ngModel`,i.itemProperties),cE(`p-options`,i.itemPropertiesOptions),m0(),Hp(2),cE(`p-disabled`,m.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,ob,t4,_4,Cte,ioe,p4,roe,Dze],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tree View Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-tree-view
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tree-view-labs`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,he],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{items=[{label:`my_project`,value:1,expanded:!0,subItems:[{label:`angular.json`,value:121},{label:`browserslist`,value:122,subItems:[{label:`e2e`,value:1223,subItems:[{label:`protractor.conf.js`,value:12231},{label:`src`,value:12232},{label:`tsconfig.json`,value:12233}]}]},{label:`karma.conf.js`,value:123},{label:`node_modules`,value:124},{label:`package.json`,value:125},{label:`package-lock.json`,value:126},{label:`README.md`,value:127},{label:`src`,value:128,subItems:[{label:`app`,value:1281},{label:`assets`,value:1282},{label:`environments`,value:1283},{label:`favicon.ico`,value:1284},{label:`index.html`,value:1285},{label:`main.ts`,value:1286},{label:`polyfills.ts`,value:1287},{label:`styles.css`,value:1288},{label:`test.ts`,value:1289}]},{label:`tsconfig.app.json`,value:129},{label:`tsconfig.json`,value:130},{label:`tsconfig.spec.json`,value:131},{label:`eslint.json`,value:132}]}];static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-folder-structure`]],standalone:!1,decls:4,vars:1,consts:[[`p-title`,`Angular folder structure`],[1,`po-mb-4`,`po-ml-1`,`po-text-color-neutral-dark-40`],[1,`po-lg-4`,`po-md-6`,3,`p-items`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,0)(1,`p`,1),vN(2,` This is the basic structure created using the Angular cli: `),ug(),Kc(3,`po-tree-view`,2),ug()),o&2&&(Hp(3),cE(`p-items`,i.items))},dependencies:[vze,Dze],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-folder-structure-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tree View - Folder Structure`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Angular folder structure">
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tree-view-folder-structure`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Fe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ge],encapsulation:2,changeDetection:1})}return a})();var Ae=[`stepper`];var fe=(()=>{class a{stepper;columnsItemsSelected=[{property:`item`}];confirmed=!1;itemsListSelected=[];items=[{label:`Condiments`,value:`condiments`,subItems:[{label:`Extra virgin Olive`,value:`extraVirginOlive`},{label:`Mayonnaise`,value:`Mayonnaise`},{label:`Tomato ketchup`,value:`tomatoKetchup`},{label:`Soda`,value:`soda`}]},{label:`Drinks`,value:`drinks`,subItems:[{label:`Orange juice`,value:`orangeJuice`},{label:`Grape juice`,value:`grapeJuice`},{label:`Beer`,value:`beer`},{label:`Wine`,value:`wine`},{label:`Soda`,value:`soda`}]},{label:`Grains`,value:122,subItems:[{label:`Black bean`,value:`blackBean`},{label:`Chickpeas`,value:`chickpeas`},{label:`Lentil`,value:`lentil`},{label:`Pea`,value:`pea`}]},{label:`Personal hygiene`,value:`personalHygiene`,subItems:[{label:`Body wash`,value:`bodyWash`},{label:`Deodorant`,value:`deodorant`},{label:`Shampoo`,value:`deodorant`},{label:`Conditioner`,value:`conditioner`},{label:`Sunscreen lotion`,value:`sunscreenLotion`}]},{label:`Frozen foods`,value:`frozenFoods`,subItems:[{label:`Hamburguer`,value:`hamburguer`},{label:`Lasagna`,value:`lasagna`},{label:`Sandwiches`,value:`sandwiches`}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label})}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label})}checkOut(){this.confirmed=!0,this.stepper.next()}isConfirmed(){return!!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item))}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-supermarket`]],viewQuery:function(o,i){if(o&1&&Xc(Ae,7),o&2){let m;fo(m=ho())&&(i.stepper=m.first)}},standalone:!1,decls:18,vars:6,consts:[[`stepper`,``],[`p-title`,`Welcome to the PO Supermarket`],[1,`po-offset-md-3`,`po-offset-lg-2`,`po-offset-xl-2`],[1,`po-row`],[`p-step-icons`,``,1,`po-md-9`,`po-lg-8`,`po-mb-1`],[`p-label`,`Step 1`],[1,`po-font-subtitle`],[`p-selectable`,``,3,`p-selected`,`p-unselected`,`p-items`],[`p-label`,`Step 2`,3,`p-can-active-next-step`],[`p-primary-label`,`Confirm`,`p-title`,`Selected items`,3,`p-primary-action`,`p-disabled`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-label`,`Step 3`],[1,`po-row`,`po-font-display`],[`p-icon`,`po-icon an an-check`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,1)(1,`div`,2)(2,`div`,3)(3,`po-stepper`,4,0)(5,`po-step`,5)(6,`p`,6),vN(7,`Please, select your items:`),ug(),Ac(8,`po-tree-view`,7),pt(`p-selected`,function(c){return i.addItem(c)})(`p-unselected`,function(c){return i.removeItem(c)}),ug()(),Ac(9,`po-step`,8)(10,`po-widget`,9),pt(`p-primary-action`,function(){return i.checkOut()}),Kc(11,`po-table`,10),ug()(),Ac(12,`po-step`,11)(13,`po-widget`)(14,`div`,12)(15,`p`),vN(16,`Order dispatched`),ug(),Kc(17,`po-icon`,13),ug()()()()()()()),o&2&&(Hp(8),cE(`p-items`,i.items),Hp(),cE(`p-can-active-next-step`,i.isConfirmed.bind(i)),Hp(),cE(`p-disabled`,i.itemsListSelected.length<1),Hp(),cE(`p-columns`,i.columnsItemsSelected)(`p-items`,i.itemsListSelected)(`p-hide-table-search`,!1))},dependencies:[yt,vze,Goe,wze,m4,Dze,Pze],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-supermarket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tree View - Supermarket`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Welcome to the PO Supermarket">
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tree-view-supermarket`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,fe],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tree-view-doc`]],standalone:!1,decls:358,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTreeViewItem>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`null`]],template:function(o,i){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoTreeViewModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-tree-view`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoTreeViewComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a visualiza\xE7\xE3o das informa\xE7\xF5es de maneira
hier\xE1rquica, desta forma sendo poss\xEDvel utilizar at\xE9 4 n\xEDveis.`),ug(),Ac(18,`p`),vN(19,`Nele é possível navegar entre os itens através da tecla `),Ac(20,`em`),vN(21,`tab`),ug(),vN(22,`, permitindo expandir ou colapsar o item em foco
por meio das teclas `),Ac(23,`em`),vN(24,`enter`),ug(),vN(25,` e `),Ac(26,`em`),vN(27,`space`),ug(),vN(28,`.`),ug(),Ac(29,`p`),vN(30,`Além da navegação, o componente possibilita também a seleção dos itens do primeiro ao último nível, tanto de forma parcial como completa.`),ug(),Ac(31,`p`),vN(32,`O componente também possui eventos disparados ao marcar/desmarcar e expandir/colapsar os itens. `),ug()(),Ac(33,`div`,6)(34,`h4`,7),vN(35,`Seletor`),ug(),Ac(36,`pre`,8),vN(37,`<po-tree-view
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
`),ug()(),Ac(38,`h4`,9),vN(39,`Propriedades`),ug(),Ac(40,`table`,10)(41,`tr`,11)(42,`th`,12),vN(43,`Nome`),ug(),Ac(44,`th`,12),vN(45,`Tipo`),ug(),Ac(46,`th`,12),vN(47,`Padrão`),ug(),Ac(48,`th`,12),vN(49,`Descrição`),ug()(),Ac(50,`tr`,13)(51,`td`,14)(52,`div`,15)(53,`span`,16),vN(54,` (p-collapsed)`),Kc(55,`br`),ug()()(),Ac(56,`td`,17)(57,`code`,18),vN(58,`EventEmitter`),ug()(),Ac(59,`td`,19),vN(60,`-`),ug(),Ac(61,`td`,20)(62,`em`)(63,`strong`),vN(64,`(opcional)`),ug()(),Ac(65,`p`),vN(66,`Ação que será disparada ao colapsar um item.`),ug(),Ac(67,`blockquote`)(68,`p`),vN(69,`Como parâmetro o componente envia o item colapsado.`),ug()()()(),Ac(70,`tr`,13)(71,`td`,14)(72,`div`,21)(73,`span`,22),vN(74,` p-components-size`),Kc(75,`br`),ug()()(),Ac(76,`td`,17)(77,`code`,23),vN(78,`string`),ug()(),Ac(79,`td`,19)(80,`p`)(81,`code`),vN(82,`medium`),ug()()(),Ac(83,`td`,20)(84,`em`)(85,`strong`),vN(86,`(opcional)`),ug()(),Ac(87,`p`),vN(88,`Define o tamanho dos componentes de formulário:`),ug(),Ac(89,`ul`)(90,`li`)(91,`code`),vN(92,`small`),ug(),vN(93,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(94,`li`)(95,`code`),vN(96,`medium`),ug(),vN(97,`: aplica a medida medium de cada componente.`),ug()(),Ac(98,`blockquote`)(99,`p`),vN(100,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(101,`code`),vN(102,`medium`),ug(),vN(103,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(104,`a`,24),vN(105,`po-theme`),ug(),vN(106,`.`),ug()()()(),Ac(107,`tr`,13)(108,`td`,14)(109,`div`,15)(110,`span`,16),vN(111,` (p-expanded)`),Kc(112,`br`),ug()()(),Ac(113,`td`,17)(114,`code`,18),vN(115,`EventEmitter`),ug()(),Ac(116,`td`,19),vN(117,`-`),ug(),Ac(118,`td`,20)(119,`em`)(120,`strong`),vN(121,`(opcional)`),ug()(),Ac(122,`p`),vN(123,`Ação que será disparada ao expandir um item.`),ug(),Ac(124,`blockquote`)(125,`p`),vN(126,`Como parâmetro o componente envia o item expandido.`),ug()()()(),Ac(127,`tr`,13)(128,`td`,14)(129,`div`,21)(130,`span`,22),vN(131,` p-items`),Kc(132,`br`),ug()()(),Ac(133,`td`,17)(134,`code`,25),vN(135,`Array<PoTreeViewItem>`),ug()(),Ac(136,`td`,19),vN(137,`-`),ug(),Ac(138,`td`,20)(139,`p`),vN(140,`Lista de itens do tipo `),Ac(141,`code`),vN(142,`PoTreeViewItem`),ug(),vN(143,` que será renderizada pelo componente.`),ug()()(),Ac(144,`tr`,13)(145,`td`,14)(146,`div`,21)(147,`span`,22),vN(148,` p-max-level`),Kc(149,`br`),ug()()(),Ac(150,`td`,17)(151,`code`,26),vN(152,`number`),ug()(),Ac(153,`td`,19)(154,`p`),vN(155,`4`),ug()(),Ac(156,`td`,20)(157,`em`)(158,`strong`),vN(159,`(opcional)`),ug()(),Ac(160,`p`),vN(161,`Define o máximo de níveis para o tree-view.`),ug(),Ac(162,`blockquote`)(163,`p`),vN(164,`O valor padrão é 4`),ug()()()(),Ac(165,`tr`,13)(166,`td`,14)(167,`div`,21)(168,`span`,22),vN(169,` p-selectable`),Kc(170,`br`),ug()()(),Ac(171,`td`,17)(172,`code`,27),vN(173,`boolean`),ug()(),Ac(174,`td`,19)(175,`p`),vN(176,`false`),ug()(),Ac(177,`td`,20)(178,`em`)(179,`strong`),vN(180,`(opcional)`),ug()(),Ac(181,`p`),vN(182,`Habilita uma caixa de seleção para selecionar e/ou desmarcar um item da lista.`),ug()()(),Ac(183,`tr`,13)(184,`td`,14)(185,`div`,15)(186,`span`,16),vN(187,` (p-selected)`),Kc(188,`br`),ug()()(),Ac(189,`td`,17)(190,`code`,18),vN(191,`EventEmitter`),ug()(),Ac(192,`td`,19),vN(193,`-`),ug(),Ac(194,`td`,20)(195,`em`)(196,`strong`),vN(197,`(opcional)`),ug()(),Ac(198,`p`),vN(199,`Ação que será disparada ao selecionar um item.`),ug(),Ac(200,`blockquote`)(201,`p`),vN(202,`Como parâmetro o componente envia o item selecionado.`),ug()()()(),Ac(203,`tr`,13)(204,`td`,14)(205,`div`,21)(206,`span`,22),vN(207,` p-single-select`),Kc(208,`br`),ug()()(),Ac(209,`td`,17)(210,`code`,27),vN(211,`boolean`),ug()(),Ac(212,`td`,19)(213,`p`),vN(214,`false`),ug()(),Ac(215,`td`,20)(216,`em`)(217,`strong`),vN(218,`(opcional)`),ug()(),Ac(219,`p`),vN(220,`Habilita a seleção para item único atráves de po-radio.`),ug()()(),Ac(221,`tr`,13)(222,`td`,14)(223,`div`,15)(224,`span`,16),vN(225,` (p-unselected)`),Kc(226,`br`),ug()()(),Ac(227,`td`,17)(228,`code`,18),vN(229,`EventEmitter`),ug()(),Ac(230,`td`,19),vN(231,`-`),ug(),Ac(232,`td`,20)(233,`em`)(234,`strong`),vN(235,`(opcional)`),ug()(),Ac(236,`p`),vN(237,`Ação que será disparada ao desfazer a seleção de um item.`),ug(),Ac(238,`blockquote`)(239,`p`),vN(240,`Como parâmetro o componente envia o item que foi desmarcado.`),ug()()()()(),Ac(241,`h3`),vN(242,`Interfaces`),ug(),Ac(243,`h4`,28)(244,`code`,5),vN(245,`PoTreeViewItem`),ug()(),Ac(246,`div`,2)(247,`p`),vN(248,`Interface para definição dos itens do componente `),Ac(249,`code`),vN(250,`po-tree-view`),ug(),vN(251,`.`),ug()(),Ac(252,`h4`,9),vN(253,`Propriedades`),ug(),Ac(254,`table`,10)(255,`tr`,11)(256,`th`,12),vN(257,`Nome`),ug(),Ac(258,`th`,12),vN(259,`Tipo`),ug(),Ac(260,`th`,12),vN(261,`Descrição`),ug()(),Ac(262,`tr`,13)(263,`td`,14)(264,`div`,21)(265,`span`,22),vN(266,` expanded`),Kc(267,`br`),ug()()(),Ac(268,`td`,17)(269,`code`,27),vN(270,`boolean`),ug()(),Ac(271,`td`,20)(272,`em`)(273,`strong`),vN(274,`(opcional)`),ug()(),Ac(275,`p`),vN(276,`Expande o item.`),ug()()(),Ac(277,`tr`,13)(278,`td`,14)(279,`div`,21)(280,`span`,22),vN(281,` isSelectable`),Kc(282,`br`),ug()()(),Ac(283,`td`,17)(284,`code`,27),vN(285,`boolean `),ug(),Ac(286,`code`,29),vN(287,` null`),ug()(),Ac(288,`td`,20)(289,`em`)(290,`strong`),vN(291,`(opcional)`),ug()(),Ac(292,`p`),vN(293,`Permite ativar/desativar a seleção do item`),ug()()(),Ac(294,`tr`,13)(295,`td`,14)(296,`div`,21)(297,`span`,22),vN(298,` label`),Kc(299,`br`),ug()()(),Ac(300,`td`,17)(301,`code`,23),vN(302,`string`),ug()(),Ac(303,`td`,20)(304,`p`),vN(305,`Desabilita a selec\xE3o do item.
Texto de exibi\xE7\xE3o do item.`),ug()()(),Ac(306,`tr`,13)(307,`td`,14)(308,`div`,21)(309,`span`,22),vN(310,` selected`),Kc(311,`br`),ug()()(),Ac(312,`td`,17)(313,`code`,27),vN(314,`boolean `),ug(),Ac(315,`code`,29),vN(316,` null`),ug()(),Ac(317,`td`,20)(318,`em`)(319,`strong`),vN(320,`(opcional)`),ug()(),Ac(321,`p`),vN(322,`Marca o item como selecionado.`),ug(),Ac(323,`blockquote`)(324,`p`),vN(325,`Caso o item que conter `),Ac(326,`code`),vN(327,`subItems`),ug(),vN(328,` for selecionado, os seus itens filhos serão também selecionados.`),ug()()()(),Ac(329,`tr`,13)(330,`td`,14)(331,`div`,21)(332,`span`,22),vN(333,` subItems`),Kc(334,`br`),ug()()(),Ac(335,`td`,17)(336,`code`,25),vN(337,`Array<PoTreeViewItem>`),ug()(),Ac(338,`td`,20)(339,`em`)(340,`strong`),vN(341,`(opcional)`),ug()(),Ac(342,`p`),vN(343,`Lista de itens do próximo nível, e assim consecutivamente até que se atinja o quarto nível.`),ug()()(),Ac(344,`tr`,13)(345,`td`,14)(346,`div`,21)(347,`span`,22),vN(348,` value`),Kc(349,`br`),ug()()(),Ac(350,`td`,17)(351,`code`,23),vN(352,`string `),ug(),Ac(353,`code`,26),vN(354,` number`),ug()(),Ac(355,`td`,20)(356,`p`),vN(357,`Valor do item que poderá ser utilizado como referência para sua identificação.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var We=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Tree View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-tree-view-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-tree-view-basic-view`)(6,`sample-po-tree-view-labs-view`)(7,`sample-po-tree-view-folder-structure-view`)(8,`sample-po-tree-view-supermarket-view`),ug()()()),o&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,ve,Se,we,Ce,Ee],encapsulation:2,changeDetection:1})}return a})()}];var Pe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[kL.forChild(We),kL]})}return a})();var gt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[Ta,Pe]})}return a})();export{gt as DocPoTreeViewModule};