import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt,Qi as tb,Ri as nu,Rt as _oe,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,cn as koe,dt as Sae,ga as xx,i as _a,ii as _x,ir as EF,ji as mO,k as Ec,mn as ni,pa as wg,r as Ta,rr as Dx,ta as ue,ua as wK,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Filter`]],template:function(o,l){o&1&&nu(0,`po-filter-chip`,0)},dependencies:[koe],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Filter Chip Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-filter-chip-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,fe,l.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,oe],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore()}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event=`p-selected-change`}restore(){this.label=`Filter`,this.selected=!1,this.disabled=!1,this.event=``,this.model=``}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-labs`]],standalone:!1,decls:16,vars:8,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`selected`,`p-label`,`Selected`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,l){if(o&1){let h=Sx();jc(0,`div`,1)(1,`po-filter-chip`,2),mt(`p-selected-change`,function(c){return l.onSelectedChange(c)}),wg()(),nu(2,`po-divider`),jc(3,`div`,1),nu(4,`po-info`,3)(5,`po-info`,4),wg(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`div`,1)(10,`po-input`,5),JN(),ob(`ngModelChange`,function(c){return y_(h),sO(l.label,c)||(l.label=c),v_(c)}),wg()(),jc(11,`div`,1)(12,`po-switch`,6),JN(),ob(`ngModelChange`,function(c){return y_(h),sO(l.selected,c)||(l.selected=c),v_(c)}),wg(),jc(13,`po-switch`,7),JN(),ob(`ngModelChange`,function(c){return y_(h),sO(l.disabled,c)||(l.disabled=c),v_(c)}),wg()(),jc(14,`div`,1)(15,`po-button`,8),mt(`p-click`,function(){return l.restore()}),wg()()()}o&2&&(rg(),jE(`p-label`,l.label)(`p-selected`,l.selected)(`p-disabled`,l.disabled),rg(3),jE(`p-value`,l.model),rg(),jE(`p-value`,l.event),rg(5),ib(`ngModel`,l.label),t0(),rg(2),ib(`ngModel`,l.selected),t0(),rg(),ib(`ngModel`,l.disabled),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,w5,koe,_oe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Filter Chip Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-filter-chip-labs`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Se,l.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,re],encapsulation:2,changeDetection:1})}return n})();var Ee=(n,b)=>b.label;var ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=Sx();jc(0,`po-filter-chip`,7),mt(`p-selected-change`,function(l){y_(a);let h=xx();return v_(h.onFilterChange(l))}),wg()}if(n&2){let a=b.$implicit;jE(`p-label`,a.label)(`p-selected`,a.selected)}}function Fe(n,b){if(n&1&&(jc(0,`div`,5)(1,`span`,8),iO(2),wg(),jc(3,`span`,9),iO(4),wg()()),n&2){let a=b.$implicit;rg(2),tb(a.name),rg(2),Ag(`(`,a.category,`)`)}}function ye(n,b){n&1&&(jc(0,`div`,6)(1,`span`,10),iO(2,`No products found.`),wg()())}var de=(()=>{class n{filters=[{label:`Electronics`,selected:!1},{label:`Clothing`,selected:!1},{label:`Books`,selected:!1},{label:`Sports`,selected:!1}];products=[{name:`Laptop`,category:`Electronics`},{name:`Smartphone`,category:`Electronics`},{name:`T-Shirt`,category:`Clothing`},{name:`Sneakers`,category:`Clothing`},{name:`Novel`,category:`Books`},{name:`Cookbook`,category:`Books`},{name:`Basketball`,category:`Sports`},{name:`Tennis Racket`,category:`Sports`}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-filter-list`]],standalone:!1,decls:16,vars:2,consts:[[1,`po-row`],[1,`po-md-12`],[1,`po-font-subtitle`],[1,`po-mt-1`],[1,`po-mr-1`,3,`p-label`,`p-selected`],[1,`po-row`,`po-p-1`],[1,`po-row`,`po-p-2`],[1,`po-mr-1`,3,`p-selected-change`,`p-label`,`p-selected`],[1,`po-font-text-bold`,`po-mr-1`],[1,`po-font-text-small`],[1,`po-font-text`]],template:function(o,l){o&1&&(jc(0,`div`,0)(1,`div`,1)(2,`p`,2),iO(3,`Filter by category:`),wg(),jc(4,`div`,3),_x(5,xe,1,2,`po-filter-chip`,4,Ee),wg()()(),nu(7,`po-divider`),jc(8,`div`,0)(9,`div`,1)(10,`p`,2),iO(11),wg(),jc(12,`po-container`),_x(13,Fe,5,2,`div`,5,ve,!1,ye,3,0,`div`,6),wg()()()),o&2&&(rg(5),Dx(l.filters),rg(6),Ag(`Products (`,l.filteredProducts.length,`):`),rg(2),Dx(l.filteredProducts))},dependencies:[Ec,Lf,koe],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-filter-list-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Filter Chip - Filter List`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-filter-chip-filter-list`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,we,l.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-doc`]],standalone:!1,decls:390,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#listbox`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(o,l){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFilterChipModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente `),jc(7,`code`),iO(8,`po-filter-chip`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoFilterChipComponent`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`O `),jc(18,`code`),iO(19,`po-filter-chip`),wg(),iO(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),wg(),jc(21,`h4`),iO(22,`Boas práticas`),wg(),jc(23,`ul`)(24,`li`),iO(25,`Utilize `),jc(26,`code`),iO(27,`labels`),wg(),iO(28,` curtos e descritivos para os filtros.`),wg(),jc(29,`li`),iO(30,`Agrupe múltiplos `),jc(31,`code`),iO(32,`po-filter-chip`),wg(),iO(33,` para representar opções de filtragem relacionadas.`),wg(),jc(34,`li`),iO(35,`Utilize a propriedade `),jc(36,`code`),iO(37,`p-disabled`),wg(),iO(38,` para filtros temporariamente indisponíveis.`),wg()(),jc(39,`h4`),iO(40,`Acessibilidade tratada no componente`),wg(),jc(41,`p`),iO(42,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(43,`ul`)(44,`li`),iO(45,`O componente possui `),jc(46,`code`),iO(47,`role="option"`),wg(),iO(48,` e `),jc(49,`code`),iO(50,`aria-selected`),wg(),iO(51,` refletindo o estado de seleção. `),jc(52,`a`,6),iO(53,`W3C WAI-ARIA 3.14 Listbox`),wg()(),jc(54,`li`),iO(55,`Quando em foco, o chip é ativado usando as teclas de Espaço e Enter do teclado. `),jc(56,`a`,7),iO(57,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),wg()()(),jc(58,`h4`),iO(59,`Tokens customizáveis`),wg(),jc(60,`p`),iO(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(62,`blockquote`)(63,`p`),iO(64,`Para maiores informações, acesse o guia `),jc(65,`a`,8),iO(66,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(67,`.`),wg()(),jc(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),iO(72,`Propriedade`),wg(),jc(73,`th`),iO(74,`Descrição`),wg(),jc(75,`th`),iO(76,`Valor Padrão`),wg()()(),jc(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),iO(81,`--border-radius`),wg()(),jc(82,`td`),iO(83,`Raio dos cantos do elemento`),wg(),jc(84,`td`)(85,`code`),iO(86,`var(--border-radius-lg)`),wg()()(),jc(87,`tr`)(88,`td`)(89,`code`),iO(90,`--border-width`),wg()(),jc(91,`td`),iO(92,`Largura da borda`),wg(),jc(93,`td`)(94,`code`),iO(95,`var(--border-width-sm)`),wg()()(),jc(96,`tr`)(97,`td`)(98,`code`),iO(99,`--font-family`),wg()(),jc(100,`td`),iO(101,`Família tipográfica`),wg(),jc(102,`td`)(103,`code`),iO(104,`var(--font-family-theme)`),wg()()(),jc(105,`tr`)(106,`td`)(107,`code`),iO(108,`--font-size`),wg()(),jc(109,`td`),iO(110,`Tamanho da fonte`),wg(),jc(111,`td`)(112,`code`),iO(113,`var(--font-size-default)`),wg()()(),jc(114,`tr`)(115,`td`)(116,`code`),iO(117,`--font-weight`),wg()(),jc(118,`td`),iO(119,`Peso da fonte`),wg(),jc(120,`td`)(121,`code`),iO(122,`var(--font-weight-normal)`),wg()()(),jc(123,`tr`)(124,`td`)(125,`strong`),iO(126,`Default`),wg()(),nu(127,`td`)(128,`td`),wg(),jc(129,`tr`)(130,`td`)(131,`code`),iO(132,`--border-color`),wg()(),jc(133,`td`),iO(134,`Cor da borda no estado padrão`),wg(),jc(135,`td`)(136,`code`),iO(137,`var(--color-neutral-light-20)`),wg()()(),jc(138,`tr`)(139,`td`)(140,`code`),iO(141,`--text-color`),wg()(),jc(142,`td`),iO(143,`Cor do texto no estado padrão`),wg(),jc(144,`td`)(145,`code`),iO(146,`var(--color-neutral-dark-80)`),wg()()(),jc(147,`tr`)(148,`td`)(149,`code`),iO(150,`--background-color`),wg()(),jc(151,`td`),iO(152,`Cor de fundo no estado padrão`),wg(),jc(153,`td`)(154,`code`),iO(155,`transparent`),wg()()(),jc(156,`tr`)(157,`td`)(158,`strong`),iO(159,`Hover`),wg()(),nu(160,`td`)(161,`td`),wg(),jc(162,`tr`)(163,`td`)(164,`code`),iO(165,`--background-color-hover`),wg()(),jc(166,`td`),iO(167,`Cor de fundo no estado hover`),wg(),jc(168,`td`)(169,`code`),iO(170,`var(--color-brand-01-lightest)`),wg()()(),jc(171,`tr`)(172,`td`)(173,`code`),iO(174,`--text-color-hover`),wg()(),jc(175,`td`),iO(176,`Cor do texto no estado hover`),wg(),jc(177,`td`)(178,`code`),iO(179,`var(--color-action-default)`),wg()()(),jc(180,`tr`)(181,`td`)(182,`strong`),iO(183,`Selected`),wg()(),nu(184,`td`)(185,`td`),wg(),jc(186,`tr`)(187,`td`)(188,`code`),iO(189,`--background-color-selected`),wg()(),jc(190,`td`),iO(191,`Cor de fundo no estado selecionado`),wg(),jc(192,`td`)(193,`code`),iO(194,`var(--color-brand-01-lightest)`),wg()()(),jc(195,`tr`)(196,`td`)(197,`code`),iO(198,`--border-color-selected`),wg()(),jc(199,`td`),iO(200,`Cor da borda no estado selecionado`),wg(),jc(201,`td`)(202,`code`),iO(203,`var(--color-brand-01-lighter)`),wg()()(),jc(204,`tr`)(205,`td`)(206,`code`),iO(207,`--text-color-selected`),wg()(),jc(208,`td`),iO(209,`Cor do texto no estado selecionado`),wg(),jc(210,`td`)(211,`code`),iO(212,`var(--color-action-default)`),wg()()(),jc(213,`tr`)(214,`td`)(215,`code`),iO(216,`--icon-color-selected`),wg()(),jc(217,`td`),iO(218,`Cor do ícone no estado selecionado`),wg(),jc(219,`td`)(220,`code`),iO(221,`var(--color-action-default)`),wg()()(),jc(222,`tr`)(223,`td`)(224,`strong`),iO(225,`Disabled`),wg()(),nu(226,`td`)(227,`td`),wg(),jc(228,`tr`)(229,`td`)(230,`code`),iO(231,`--opacity-disabled`),wg()(),jc(232,`td`),iO(233,`Opacidade no estado desabilitado`),wg(),jc(234,`td`)(235,`code`),iO(236,`0.5`),wg()()()()()(),jc(237,`div`,9)(238,`h4`,10),iO(239,`Seletor`),wg(),jc(240,`pre`,11),iO(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),wg()(),jc(242,`h4`,12),iO(243,`Propriedades`),wg(),jc(244,`table`,13)(245,`tr`,14)(246,`th`,15),iO(247,`Nome`),wg(),jc(248,`th`,15),iO(249,`Tipo`),wg(),jc(250,`th`,15),iO(251,`Padrão`),wg(),jc(252,`th`,15),iO(253,`Descrição`),wg()(),jc(254,`tr`,16)(255,`td`,17)(256,`div`,18)(257,`span`,19),iO(258,` p-disabled`),nu(259,`br`),wg()()(),jc(260,`td`,20)(261,`code`,21),iO(262,`boolean`),wg()(),jc(263,`td`,22)(264,`p`)(265,`code`),iO(266,`false`),wg()()(),jc(267,`td`,23)(268,`em`)(269,`strong`),iO(270,`(opcional)`),wg()(),jc(271,`p`),iO(272,`Define se o chip está desabilitado, impedindo qualquer interação do usuário.`),wg(),jc(273,`p`),iO(274,`Quando habilitado, o chip não responde a cliques nem a eventos de teclado (Enter/Space).`),wg()()(),jc(275,`tr`,16)(276,`td`,17)(277,`div`,18)(278,`span`,19),iO(279,` p-label`),nu(280,`br`),wg()()(),jc(281,`td`,20)(282,`code`,24),iO(283,`string `),wg(),jc(284,`code`,25),iO(285,` undefined`),wg()(),jc(286,`td`,22),iO(287,`-`),wg(),jc(288,`td`,23)(289,`em`)(290,`strong`),iO(291,`(opcional)`),wg()(),jc(292,`p`),iO(293,`Define o rótulo de texto exibido no chip.`),wg()()(),jc(294,`tr`,16)(295,`td`,17)(296,`div`,18)(297,`span`,19),iO(298,` p-selected`),nu(299,`br`),wg()()(),jc(300,`td`,20)(301,`code`,21),iO(302,`boolean`),wg()(),jc(303,`td`,22)(304,`p`)(305,`code`),iO(306,`false`),wg()()(),jc(307,`td`,23)(308,`em`)(309,`strong`),iO(310,`(opcional)`),wg()(),jc(311,`p`),iO(312,`Define o estado de seleção do chip.`),wg()()(),jc(313,`tr`,16)(314,`td`,17)(315,`div`,26)(316,`span`,27),iO(317,` (p-selected-change)`),nu(318,`br`),wg()()(),jc(319,`td`,20)(320,`code`,28),iO(321,`EventEmitter`),wg()(),jc(322,`td`,22),iO(323,`-`),wg(),jc(324,`td`,23)(325,`em`)(326,`strong`),iO(327,`(opcional)`),wg()(),jc(328,`p`),iO(329,`Evento disparado após a alteração do estado de seleção do `),jc(330,`em`),iO(331,`chip`),wg(),iO(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),wg()()()(),jc(333,`h3`),iO(334,`Interfaces`),wg(),jc(335,`h4`,29)(336,`code`,5),iO(337,`PoFilterChipSelectedChange`),wg()(),jc(338,`div`,2)(339,`p`),iO(340,`Interface que define o objeto emitido pelo evento `),jc(341,`code`),iO(342,`p-selected-change`),wg(),iO(343,`.`),wg()(),jc(344,`h4`,12),iO(345,`Propriedades`),wg(),jc(346,`table`,13)(347,`tr`,14)(348,`th`,15),iO(349,`Nome`),wg(),jc(350,`th`,15),iO(351,`Tipo`),wg(),jc(352,`th`,15),iO(353,`Descrição`),wg()(),jc(354,`tr`,16)(355,`td`,17)(356,`div`,18)(357,`span`,19),iO(358,` label`),nu(359,`br`),wg()()(),jc(360,`td`,20)(361,`code`,24),iO(362,`string`),wg()(),jc(363,`td`,23)(364,`p`),iO(365,`Rótulo de texto do `),jc(366,`em`),iO(367,`chip`),wg(),iO(368,`.`),wg()()(),jc(369,`tr`,16)(370,`td`,17)(371,`div`,18)(372,`span`,19),iO(373,` selected`),nu(374,`br`),wg()()(),jc(375,`td`,20)(376,`code`,21),iO(377,`boolean`),wg()(),jc(378,`td`,23)(379,`p`),iO(380,`Estado de seleção do `),jc(381,`em`),iO(382,`chip`),wg(),iO(383,` (`),jc(384,`code`),iO(385,`true`),wg(),iO(386,` para selecionado, `),jc(387,`code`),iO(388,`false`),wg(),iO(389,` para desmarcado).`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var De=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Filter Chip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(3,`sample-po-filter-chip-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`web`)}),nu(5,`sample-po-filter-chip-basic-view`)(6,`sample-po-filter-chip-labs-view`)(7,`sample-po-filter-chip-filter-list-view`),wg()()()),o&2&&(jE(`p-actions`,l.actions),rg(2),jE(`p-active`,l.activeTab===`doc`),rg(2),jE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[Kze,bae,Sae,ae,pe,se,me],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[C1.forChild(De),C1]})}return n})();var et=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[Ta,he]})}return n})();export{et as DocPoFilterChipModule};