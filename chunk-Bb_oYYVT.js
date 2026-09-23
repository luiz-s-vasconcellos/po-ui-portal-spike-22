import{$r as Vx,Cr as Nx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,cn as lU,ea as p0,ga as w,gi as bw,jn as wp,l as ar,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,w as Bbe,wa as zx,xa as xx}from"./main-NT5YGKBQ.js";var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Filter`]],template:function(o,l){o&1&&ql(0,`po-filter-chip`,0)},dependencies:[Bbe],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Filter Chip Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-filter-chip-basic`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+l.sampleCodeButtonIcon),Up(),gg(` `,l.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,fe,l.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,oe],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore()}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event=`p-selected-change`}restore(){this.label=`Filter`,this.selected=!1,this.disabled=!1,this.event=``,this.model=``}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-labs`]],standalone:!1,decls:16,vars:8,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`selected`,`p-label`,`Selected`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,l){if(o&1){let h=Vx();Ml(0,`div`,1)(1,`po-filter-chip`,2),ht(`p-selected-change`,function(c){return l.onSelectedChange(c)}),lg()(),ql(2,`po-divider`),Ml(3,`div`,1),ql(4,`po-info`,3)(5,`po-info`,4),lg(),ql(6,`po-divider`),Ml(7,`form`,null,0)(9,`div`,1)(10,`po-input`,5),Mw(`ngModelChange`,function(c){return Qy(h),yN(l.label,c)||(l.label=c),Jy(c)}),lg(),f0(),lg(),Ml(11,`div`,1)(12,`po-switch`,6),Mw(`ngModelChange`,function(c){return Qy(h),yN(l.selected,c)||(l.selected=c),Jy(c)}),lg(),f0(),Ml(13,`po-switch`,7),Mw(`ngModelChange`,function(c){return Qy(h),yN(l.disabled,c)||(l.disabled=c),Jy(c)}),lg(),f0(),lg(),Ml(14,`div`,1)(15,`po-button`,8),ht(`p-click`,function(){return l.restore()}),lg()()()}o&2&&(Up(),cw(`p-label`,l.label)(`p-selected`,l.selected)(`p-disabled`,l.disabled),Up(3),cw(`p-value`,l.model),Up(),cw(`p-value`,l.event),Up(5),Tw(`ngModel`,l.label),p0(),Up(2),Tw(`ngModel`,l.selected),p0(),Up(),Tw(`ngModel`,l.disabled),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,J4,Bbe,kbe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Filter Chip Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-filter-chip
    [p-label]="label"
    [p-selected]="selected"
    [p-disabled]="disabled"
    (p-selected-change)="onSelectedChange($event)"
  >
  </po-filter-chip>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="model"></po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"></po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label"></po-input>
  </div>

  <div class="po-row">
    <po-switch class="po-md-4" name="selected" [(ngModel)]="selected" p-label="Selected"></po-switch>
    <po-switch class="po-md-4" name="disabled" [(ngModel)]="disabled" p-label="Disabled"></po-switch>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

@Component({
  selector: 'sample-po-filter-chip-labs',
  templateUrl: './sample-po-filter-chip-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipLabsComponent implements OnInit {
  label: string;
  selected: boolean;
  disabled: boolean;
  event: string;
  model: string;

  ngOnInit() {
    this.restore();
  }

  onSelectedChange(event: PoFilterChipSelectedChange): void {
    this.selected = event.selected;
    this.model = JSON.stringify(event);
    this.event = 'p-selected-change';
  }

  restore() {
    this.label = 'Filter';
    this.selected = false;
    this.disabled = false;
    this.event = '';
    this.model = '';
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-filter-chip-labs`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+l.sampleCodeButtonIcon),Up(),gg(` `,l.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Se,l.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,re],encapsulation:2,changeDetection:1})}return n})();var Ee=(n,b)=>b.label;var ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=Vx();Ml(0,`po-filter-chip`,7),ht(`p-selected-change`,function(l){Qy(a);return Jy(zx().onFilterChange(l))}),lg()}if(n&2){let a=b.$implicit;cw(`p-label`,a.label)(`p-selected`,a.selected)}}function Fe(n,b){if(n&1&&(Ml(0,`div`,5)(1,`span`,8),mN(2),lg(),Ml(3,`span`,9),mN(4),lg()()),n&2){let a=b.$implicit;Up(2),bw(a.name),Up(2),gg(`(`,a.category,`)`)}}function ye(n,b){n&1&&(Ml(0,`div`,6)(1,`span`,10),mN(2,`No products found.`),lg()())}var de=(()=>{class n{filters=[{label:`Electronics`,selected:!1},{label:`Clothing`,selected:!1},{label:`Books`,selected:!1},{label:`Sports`,selected:!1}];products=[{name:`Laptop`,category:`Electronics`},{name:`Smartphone`,category:`Electronics`},{name:`T-Shirt`,category:`Clothing`},{name:`Sneakers`,category:`Clothing`},{name:`Novel`,category:`Books`},{name:`Cookbook`,category:`Books`},{name:`Basketball`,category:`Sports`},{name:`Tennis Racket`,category:`Sports`}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-filter-list`]],standalone:!1,decls:16,vars:2,consts:[[1,`po-row`],[1,`po-md-12`],[1,`po-font-subtitle`],[1,`po-mt-1`],[1,`po-mr-1`,3,`p-label`,`p-selected`],[1,`po-row`,`po-p-1`],[1,`po-row`,`po-p-2`],[1,`po-mr-1`,3,`p-selected-change`,`p-label`,`p-selected`],[1,`po-font-text-bold`,`po-mr-1`],[1,`po-font-text-small`],[1,`po-font-text`]],template:function(o,l){o&1&&(Ml(0,`div`,0)(1,`div`,1)(2,`p`,2),mN(3,`Filter by category:`),lg(),Ml(4,`div`,3),xx(5,xe,1,2,`po-filter-chip`,4,Ee),lg()()(),ql(7,`po-divider`),Ml(8,`div`,0)(9,`div`,1)(10,`p`,2),mN(11),lg(),Ml(12,`po-container`),xx(13,Fe,5,2,`div`,5,ve,!1,ye,3,0,`div`,6),lg()()()),o&2&&(Up(5),Nx(l.filters),Up(6),gg(`Products (`,l.filteredProducts.length,`):`),Up(2),Nx(l.filteredProducts))},dependencies:[wp,nb,Bbe],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-filter-list-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Filter Chip - Filter List`),lg(),Ml(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Filter by category:</p>
    <div class="po-mt-1">
      @for (filter of filters; track filter.label) {
        <po-filter-chip
          class="po-mr-1"
          [p-label]="filter.label"
          [p-selected]="filter.selected"
          (p-selected-change)="onFilterChange($event)"
        >
        </po-filter-chip>
      }
    </div>
  </div>
</div>

<po-divider />

<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Products ({ { filteredProducts.length }}):</p>
    <po-container>
      @for (product of filteredProducts; track product.name) {
        <div class="po-row po-p-1">
          <span class="po-font-text-bold po-mr-1">{ { product.name }}</span>
          <span class="po-font-text-small">({ { product.category }})</span>
        </div>
      } @empty {
        <div class="po-row po-p-2">
          <span class="po-font-text">No products found.</span>
        </div>
      }
    </po-container>
  </div>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

interface FilterOption {
  label: string;
  selected: boolean;
}

interface Product {
  name: string;
  category: string;
}

@Component({
  selector: 'sample-po-filter-chip-filter-list',
  templateUrl: './sample-po-filter-chip-filter-list.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipFilterListComponent {
  filters: Array<FilterOption> = [
    { label: 'Electronics', selected: false },
    { label: 'Clothing', selected: false },
    { label: 'Books', selected: false },
    { label: 'Sports', selected: false }
  ];

  products: Array<Product> = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'T-Shirt', category: 'Clothing' },
    { name: 'Sneakers', category: 'Clothing' },
    { name: 'Novel', category: 'Books' },
    { name: 'Cookbook', category: 'Books' },
    { name: 'Basketball', category: 'Sports' },
    { name: 'Tennis Racket', category: 'Sports' }
  ];

  get filteredProducts(): Array<Product> {
    const activeFilters = this.filters.filter(f => f.selected).map(f => f.label);

    if (activeFilters.length === 0) {
      return this.products;
    }

    return this.products.filter(p => activeFilters.includes(p.category));
  }

  onFilterChange(event: PoFilterChipSelectedChange): void {
    const filter = this.filters.find(f => f.label === event.label);
    if (filter) {
      filter.selected = event.selected;
    }
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-filter-chip-filter-list`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+l.sampleCodeButtonIcon),Up(),gg(` `,l.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,we,l.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-doc`]],standalone:!1,decls:390,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#listbox`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(o,l){o&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFilterChipModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-filter-chip`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoFilterChipComponent`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`O `),Ml(18,`code`),mN(19,`po-filter-chip`),lg(),mN(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),lg(),Ml(21,`h4`),mN(22,`Boas práticas`),lg(),Ml(23,`ul`)(24,`li`),mN(25,`Utilize `),Ml(26,`code`),mN(27,`labels`),lg(),mN(28,` curtos e descritivos para os filtros.`),lg(),Ml(29,`li`),mN(30,`Agrupe múltiplos `),Ml(31,`code`),mN(32,`po-filter-chip`),lg(),mN(33,` para representar opções de filtragem relacionadas.`),lg(),Ml(34,`li`),mN(35,`Utilize a propriedade `),Ml(36,`code`),mN(37,`p-disabled`),lg(),mN(38,` para filtros temporariamente indisponíveis.`),lg()(),Ml(39,`h4`),mN(40,`Acessibilidade tratada no componente`),lg(),Ml(41,`p`),mN(42,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),lg(),Ml(43,`ul`)(44,`li`),mN(45,`O componente possui `),Ml(46,`code`),mN(47,`role="option"`),lg(),mN(48,` e `),Ml(49,`code`),mN(50,`aria-selected`),lg(),mN(51,` refletindo o estado de seleção. `),Ml(52,`a`,6),mN(53,`W3C WAI-ARIA 3.14 Listbox`),lg()(),Ml(54,`li`),mN(55,`Quando em foco, o chip é ativado usando as teclas de Espaço e Enter do teclado. `),Ml(56,`a`,7),mN(57,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),lg()()(),Ml(58,`h4`),mN(59,`Tokens customizáveis`),lg(),Ml(60,`p`),mN(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(62,`blockquote`)(63,`p`),mN(64,`Para maiores informações, acesse o guia `),Ml(65,`a`,8),mN(66,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(67,`.`),lg()(),Ml(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),mN(72,`Propriedade`),lg(),Ml(73,`th`),mN(74,`Descrição`),lg(),Ml(75,`th`),mN(76,`Valor Padrão`),lg()()(),Ml(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),mN(81,`--border-radius`),lg()(),Ml(82,`td`),mN(83,`Raio dos cantos do elemento`),lg(),Ml(84,`td`)(85,`code`),mN(86,`var(--border-radius-lg)`),lg()()(),Ml(87,`tr`)(88,`td`)(89,`code`),mN(90,`--border-width`),lg()(),Ml(91,`td`),mN(92,`Largura da borda`),lg(),Ml(93,`td`)(94,`code`),mN(95,`var(--border-width-sm)`),lg()()(),Ml(96,`tr`)(97,`td`)(98,`code`),mN(99,`--font-family`),lg()(),Ml(100,`td`),mN(101,`Família tipográfica`),lg(),Ml(102,`td`)(103,`code`),mN(104,`var(--font-family-theme)`),lg()()(),Ml(105,`tr`)(106,`td`)(107,`code`),mN(108,`--font-size`),lg()(),Ml(109,`td`),mN(110,`Tamanho da fonte`),lg(),Ml(111,`td`)(112,`code`),mN(113,`var(--font-size-default)`),lg()()(),Ml(114,`tr`)(115,`td`)(116,`code`),mN(117,`--font-weight`),lg()(),Ml(118,`td`),mN(119,`Peso da fonte`),lg(),Ml(120,`td`)(121,`code`),mN(122,`var(--font-weight-normal)`),lg()()(),Ml(123,`tr`)(124,`td`)(125,`strong`),mN(126,`Default`),lg()(),ql(127,`td`)(128,`td`),lg(),Ml(129,`tr`)(130,`td`)(131,`code`),mN(132,`--border-color`),lg()(),Ml(133,`td`),mN(134,`Cor da borda no estado padrão`),lg(),Ml(135,`td`)(136,`code`),mN(137,`var(--color-neutral-light-20)`),lg()()(),Ml(138,`tr`)(139,`td`)(140,`code`),mN(141,`--text-color`),lg()(),Ml(142,`td`),mN(143,`Cor do texto no estado padrão`),lg(),Ml(144,`td`)(145,`code`),mN(146,`var(--color-neutral-dark-80)`),lg()()(),Ml(147,`tr`)(148,`td`)(149,`code`),mN(150,`--background-color`),lg()(),Ml(151,`td`),mN(152,`Cor de fundo no estado padrão`),lg(),Ml(153,`td`)(154,`code`),mN(155,`transparent`),lg()()(),Ml(156,`tr`)(157,`td`)(158,`strong`),mN(159,`Hover`),lg()(),ql(160,`td`)(161,`td`),lg(),Ml(162,`tr`)(163,`td`)(164,`code`),mN(165,`--background-color-hover`),lg()(),Ml(166,`td`),mN(167,`Cor de fundo no estado hover`),lg(),Ml(168,`td`)(169,`code`),mN(170,`var(--color-brand-01-lightest)`),lg()()(),Ml(171,`tr`)(172,`td`)(173,`code`),mN(174,`--text-color-hover`),lg()(),Ml(175,`td`),mN(176,`Cor do texto no estado hover`),lg(),Ml(177,`td`)(178,`code`),mN(179,`var(--color-action-default)`),lg()()(),Ml(180,`tr`)(181,`td`)(182,`strong`),mN(183,`Selected`),lg()(),ql(184,`td`)(185,`td`),lg(),Ml(186,`tr`)(187,`td`)(188,`code`),mN(189,`--background-color-selected`),lg()(),Ml(190,`td`),mN(191,`Cor de fundo no estado selecionado`),lg(),Ml(192,`td`)(193,`code`),mN(194,`var(--color-brand-01-lightest)`),lg()()(),Ml(195,`tr`)(196,`td`)(197,`code`),mN(198,`--border-color-selected`),lg()(),Ml(199,`td`),mN(200,`Cor da borda no estado selecionado`),lg(),Ml(201,`td`)(202,`code`),mN(203,`var(--color-brand-01-lighter)`),lg()()(),Ml(204,`tr`)(205,`td`)(206,`code`),mN(207,`--text-color-selected`),lg()(),Ml(208,`td`),mN(209,`Cor do texto no estado selecionado`),lg(),Ml(210,`td`)(211,`code`),mN(212,`var(--color-action-default)`),lg()()(),Ml(213,`tr`)(214,`td`)(215,`code`),mN(216,`--icon-color-selected`),lg()(),Ml(217,`td`),mN(218,`Cor do ícone no estado selecionado`),lg(),Ml(219,`td`)(220,`code`),mN(221,`var(--color-action-default)`),lg()()(),Ml(222,`tr`)(223,`td`)(224,`strong`),mN(225,`Disabled`),lg()(),ql(226,`td`)(227,`td`),lg(),Ml(228,`tr`)(229,`td`)(230,`code`),mN(231,`--opacity-disabled`),lg()(),Ml(232,`td`),mN(233,`Opacidade no estado desabilitado`),lg(),Ml(234,`td`)(235,`code`),mN(236,`0.5`),lg()()()()()(),Ml(237,`div`,9)(238,`h4`,10),mN(239,`Seletor`),lg(),Ml(240,`pre`,11),mN(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),lg()(),Ml(242,`h4`,12),mN(243,`Propriedades`),lg(),Ml(244,`table`,13)(245,`tr`,14)(246,`th`,15),mN(247,`Nome`),lg(),Ml(248,`th`,15),mN(249,`Tipo`),lg(),Ml(250,`th`,15),mN(251,`Padrão`),lg(),Ml(252,`th`,15),mN(253,`Descrição`),lg()(),Ml(254,`tr`,16)(255,`td`,17)(256,`div`,18)(257,`span`,19),mN(258,` p-disabled`),ql(259,`br`),lg()()(),Ml(260,`td`,20)(261,`code`,21),mN(262,`boolean`),lg()(),Ml(263,`td`,22)(264,`p`)(265,`code`),mN(266,`false`),lg()()(),Ml(267,`td`,23)(268,`em`)(269,`strong`),mN(270,`(opcional)`),lg()(),Ml(271,`p`),mN(272,`Define se o chip está desabilitado, impedindo qualquer interação do usuário.`),lg(),Ml(273,`p`),mN(274,`Quando habilitado, o chip não responde a cliques nem a eventos de teclado (Enter/Space).`),lg()()(),Ml(275,`tr`,16)(276,`td`,17)(277,`div`,18)(278,`span`,19),mN(279,` p-label`),ql(280,`br`),lg()()(),Ml(281,`td`,20)(282,`code`,24),mN(283,`string `),lg(),Ml(284,`code`,25),mN(285,` undefined`),lg()(),Ml(286,`td`,22),mN(287,`-`),lg(),Ml(288,`td`,23)(289,`em`)(290,`strong`),mN(291,`(opcional)`),lg()(),Ml(292,`p`),mN(293,`Define o rótulo de texto exibido no chip.`),lg()()(),Ml(294,`tr`,16)(295,`td`,17)(296,`div`,18)(297,`span`,19),mN(298,` p-selected`),ql(299,`br`),lg()()(),Ml(300,`td`,20)(301,`code`,21),mN(302,`boolean`),lg()(),Ml(303,`td`,22)(304,`p`)(305,`code`),mN(306,`false`),lg()()(),Ml(307,`td`,23)(308,`em`)(309,`strong`),mN(310,`(opcional)`),lg()(),Ml(311,`p`),mN(312,`Define o estado de seleção do chip.`),lg()()(),Ml(313,`tr`,16)(314,`td`,17)(315,`div`,26)(316,`span`,27),mN(317,` (p-selected-change)`),ql(318,`br`),lg()()(),Ml(319,`td`,20)(320,`code`,28),mN(321,`EventEmitter`),lg()(),Ml(322,`td`,22),mN(323,`-`),lg(),Ml(324,`td`,23)(325,`em`)(326,`strong`),mN(327,`(opcional)`),lg()(),Ml(328,`p`),mN(329,`Evento disparado após a alteração do estado de seleção do `),Ml(330,`em`),mN(331,`chip`),lg(),mN(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),lg()()()(),Ml(333,`h3`),mN(334,`Interfaces`),lg(),Ml(335,`h4`,29)(336,`code`,5),mN(337,`PoFilterChipSelectedChange`),lg()(),Ml(338,`div`,2)(339,`p`),mN(340,`Interface que define o objeto emitido pelo evento `),Ml(341,`code`),mN(342,`p-selected-change`),lg(),mN(343,`.`),lg()(),Ml(344,`h4`,12),mN(345,`Propriedades`),lg(),Ml(346,`table`,13)(347,`tr`,14)(348,`th`,15),mN(349,`Nome`),lg(),Ml(350,`th`,15),mN(351,`Tipo`),lg(),Ml(352,`th`,15),mN(353,`Descrição`),lg()(),Ml(354,`tr`,16)(355,`td`,17)(356,`div`,18)(357,`span`,19),mN(358,` label`),ql(359,`br`),lg()()(),Ml(360,`td`,20)(361,`code`,24),mN(362,`string`),lg()(),Ml(363,`td`,23)(364,`p`),mN(365,`Rótulo de texto do `),Ml(366,`em`),mN(367,`chip`),lg(),mN(368,`.`),lg()()(),Ml(369,`tr`,16)(370,`td`,17)(371,`div`,18)(372,`span`,19),mN(373,` selected`),ql(374,`br`),lg()()(),Ml(375,`td`,20)(376,`code`,21),mN(377,`boolean`),lg()(),Ml(378,`td`,23)(379,`p`),mN(380,`Estado de seleção do `),Ml(381,`em`),mN(382,`chip`),lg(),mN(383,` (`),Ml(384,`code`),mN(385,`true`),lg(),mN(386,` para selecionado, `),Ml(387,`code`),mN(388,`false`),lg(),mN(389,` para desmarcado).`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var De=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Filter Chip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),ql(3,`sample-po-filter-chip-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),ql(5,`sample-po-filter-chip-basic-view`)(6,`sample-po-filter-chip-labs-view`)(7,`sample-po-filter-chip-filter-list-view`),lg()()()),o&2&&(cw(`p-actions`,l.actions),Up(2),cw(`p-active`,l.activeTab===`doc`),Up(2),cw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ae,pe,se,me],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[NL.forChild(De),NL]})}return n})();var et=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[ar,he]})}return n})();export{et as DocPoFilterChipModule};