import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hi as kx,Hr as RE,Ir as Ox,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,ar as E,b as $ze,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,gr as IE,i as _a,j as Ec,k as D4,ki as he$1,kn as v4,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ti as Wx,ua as ug,vt as Soe,wr as Kc,zi as kL}from"./main-FUFQFMHQ.js";var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-filter-chip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Filter`]],template:function(o,l){o&1&&Kc(0,`po-filter-chip`,0)},dependencies:[Soe],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-filter-chip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Filter Chip Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return l.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-filter-chip-basic`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+l.sampleCodeButtonIcon),Hp(),mg(` `,l.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,fe,l.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,oe],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore()}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event=`p-selected-change`}restore(){this.label=`Filter`,this.selected=!1,this.disabled=!1,this.event=``,this.model=``}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-filter-chip-labs`]],standalone:!1,decls:16,vars:8,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`selected`,`p-label`,`Selected`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,l){if(o&1){let h=Bx();Ac(0,`div`,1)(1,`po-filter-chip`,2),pt(`p-selected-change`,function(c){return l.onSelectedChange(c)}),ug()(),Kc(2,`po-divider`),Ac(3,`div`,1),Kc(4,`po-info`,3)(5,`po-info`,4),ug(),Kc(6,`po-divider`),Ac(7,`form`,null,0)(9,`div`,1)(10,`po-input`,5),RE(`ngModelChange`,function(c){return Jv(h),DN(l.label,c)||(l.label=c),e_(c)}),ug(),p0(),ug(),Ac(11,`div`,1)(12,`po-switch`,6),RE(`ngModelChange`,function(c){return Jv(h),DN(l.selected,c)||(l.selected=c),e_(c)}),ug(),p0(),Ac(13,`po-switch`,7),RE(`ngModelChange`,function(c){return Jv(h),DN(l.disabled,c)||(l.disabled=c),e_(c)}),ug(),p0(),ug(),Ac(14,`div`,1)(15,`po-button`,8),pt(`p-click`,function(){return l.restore()}),ug()()()}o&2&&(Hp(),cE(`p-label`,l.label)(`p-selected`,l.selected)(`p-disabled`,l.disabled),Hp(3),cE(`p-value`,l.model),Hp(),cE(`p-value`,l.event),Hp(5),TE(`ngModel`,l.label),m0(),Hp(2),TE(`ngModel`,l.selected),m0(),Hp(),TE(`ngModel`,l.disabled),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,D4,v4,Soe,hoe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-filter-chip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Filter Chip Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return l.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-filter-chip-labs`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+l.sampleCodeButtonIcon),Hp(),mg(` `,l.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Se,l.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,re],encapsulation:2,changeDetection:1})}return n})();var Ee=(n,b)=>b.label;var ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=Bx();Ac(0,`po-filter-chip`,7),pt(`p-selected-change`,function(l){Jv(a);let h=Wx();return e_(h.onFilterChange(l))}),ug()}if(n&2){let a=b.$implicit;cE(`p-label`,a.label)(`p-selected`,a.selected)}}function Fe(n,b){if(n&1&&(Ac(0,`div`,5)(1,`span`,8),vN(2),ug(),Ac(3,`span`,9),vN(4),ug()()),n&2){let a=b.$implicit;Hp(2),IE(a.name),Hp(2),mg(`(`,a.category,`)`)}}function ye(n,b){n&1&&(Ac(0,`div`,6)(1,`span`,10),vN(2,`No products found.`),ug()())}var de=(()=>{class n{filters=[{label:`Electronics`,selected:!1},{label:`Clothing`,selected:!1},{label:`Books`,selected:!1},{label:`Sports`,selected:!1}];products=[{name:`Laptop`,category:`Electronics`},{name:`Smartphone`,category:`Electronics`},{name:`T-Shirt`,category:`Clothing`},{name:`Sneakers`,category:`Clothing`},{name:`Novel`,category:`Books`},{name:`Cookbook`,category:`Books`},{name:`Basketball`,category:`Sports`},{name:`Tennis Racket`,category:`Sports`}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-filter-chip-filter-list`]],standalone:!1,decls:16,vars:2,consts:[[1,`po-row`],[1,`po-md-12`],[1,`po-font-subtitle`],[1,`po-mt-1`],[1,`po-mr-1`,3,`p-label`,`p-selected`],[1,`po-row`,`po-p-1`],[1,`po-row`,`po-p-2`],[1,`po-mr-1`,3,`p-selected-change`,`p-label`,`p-selected`],[1,`po-font-text-bold`,`po-mr-1`],[1,`po-font-text-small`],[1,`po-font-text`]],template:function(o,l){o&1&&(Ac(0,`div`,0)(1,`div`,1)(2,`p`,2),vN(3,`Filter by category:`),ug(),Ac(4,`div`,3),Ox(5,xe,1,2,`po-filter-chip`,4,Ee),ug()()(),Kc(7,`po-divider`),Ac(8,`div`,0)(9,`div`,1)(10,`p`,2),vN(11),ug(),Ac(12,`po-container`),Ox(13,Fe,5,2,`div`,5,ve,!1,ye,3,0,`div`,6),ug()()()),o&2&&(Hp(5),kx(l.filters),Hp(6),mg(`Products (`,l.filteredProducts.length,`):`),Hp(2),kx(l.filteredProducts))},dependencies:[Ec,Ef,Soe],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-filter-chip-filter-list-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Filter Chip - Filter List`),ug(),Ac(4,`a`,2),pt(`click`,function(){return l.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-filter-chip-filter-list`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+l.sampleCodeButtonIcon),Hp(),mg(` `,l.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,we,l.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,de],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-filter-chip-doc`]],standalone:!1,decls:390,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#listbox`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(o,l){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFilterChipModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-filter-chip`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoFilterChipComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`O `),Ac(18,`code`),vN(19,`po-filter-chip`),ug(),vN(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),ug(),Ac(21,`h4`),vN(22,`Boas práticas`),ug(),Ac(23,`ul`)(24,`li`),vN(25,`Utilize `),Ac(26,`code`),vN(27,`labels`),ug(),vN(28,` curtos e descritivos para os filtros.`),ug(),Ac(29,`li`),vN(30,`Agrupe múltiplos `),Ac(31,`code`),vN(32,`po-filter-chip`),ug(),vN(33,` para representar opções de filtragem relacionadas.`),ug(),Ac(34,`li`),vN(35,`Utilize a propriedade `),Ac(36,`code`),vN(37,`p-disabled`),ug(),vN(38,` para filtros temporariamente indisponíveis.`),ug()(),Ac(39,`h4`),vN(40,`Acessibilidade tratada no componente`),ug(),Ac(41,`p`),vN(42,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ug(),Ac(43,`ul`)(44,`li`),vN(45,`O componente possui `),Ac(46,`code`),vN(47,`role="option"`),ug(),vN(48,` e `),Ac(49,`code`),vN(50,`aria-selected`),ug(),vN(51,` refletindo o estado de seleção. `),Ac(52,`a`,6),vN(53,`W3C WAI-ARIA 3.14 Listbox`),ug()(),Ac(54,`li`),vN(55,`Quando em foco, o chip é ativado usando as teclas de Espaço e Enter do teclado. `),Ac(56,`a`,7),vN(57,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),ug()()(),Ac(58,`h4`),vN(59,`Tokens customizáveis`),ug(),Ac(60,`p`),vN(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(62,`blockquote`)(63,`p`),vN(64,`Para maiores informações, acesse o guia `),Ac(65,`a`,8),vN(66,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(67,`.`),ug()(),Ac(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),vN(72,`Propriedade`),ug(),Ac(73,`th`),vN(74,`Descrição`),ug(),Ac(75,`th`),vN(76,`Valor Padrão`),ug()()(),Ac(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),vN(81,`--border-radius`),ug()(),Ac(82,`td`),vN(83,`Raio dos cantos do elemento`),ug(),Ac(84,`td`)(85,`code`),vN(86,`var(--border-radius-lg)`),ug()()(),Ac(87,`tr`)(88,`td`)(89,`code`),vN(90,`--border-width`),ug()(),Ac(91,`td`),vN(92,`Largura da borda`),ug(),Ac(93,`td`)(94,`code`),vN(95,`var(--border-width-sm)`),ug()()(),Ac(96,`tr`)(97,`td`)(98,`code`),vN(99,`--font-family`),ug()(),Ac(100,`td`),vN(101,`Família tipográfica`),ug(),Ac(102,`td`)(103,`code`),vN(104,`var(--font-family-theme)`),ug()()(),Ac(105,`tr`)(106,`td`)(107,`code`),vN(108,`--font-size`),ug()(),Ac(109,`td`),vN(110,`Tamanho da fonte`),ug(),Ac(111,`td`)(112,`code`),vN(113,`var(--font-size-default)`),ug()()(),Ac(114,`tr`)(115,`td`)(116,`code`),vN(117,`--font-weight`),ug()(),Ac(118,`td`),vN(119,`Peso da fonte`),ug(),Ac(120,`td`)(121,`code`),vN(122,`var(--font-weight-normal)`),ug()()(),Ac(123,`tr`)(124,`td`)(125,`strong`),vN(126,`Default`),ug()(),Kc(127,`td`)(128,`td`),ug(),Ac(129,`tr`)(130,`td`)(131,`code`),vN(132,`--border-color`),ug()(),Ac(133,`td`),vN(134,`Cor da borda no estado padrão`),ug(),Ac(135,`td`)(136,`code`),vN(137,`var(--color-neutral-light-20)`),ug()()(),Ac(138,`tr`)(139,`td`)(140,`code`),vN(141,`--text-color`),ug()(),Ac(142,`td`),vN(143,`Cor do texto no estado padrão`),ug(),Ac(144,`td`)(145,`code`),vN(146,`var(--color-neutral-dark-80)`),ug()()(),Ac(147,`tr`)(148,`td`)(149,`code`),vN(150,`--background-color`),ug()(),Ac(151,`td`),vN(152,`Cor de fundo no estado padrão`),ug(),Ac(153,`td`)(154,`code`),vN(155,`transparent`),ug()()(),Ac(156,`tr`)(157,`td`)(158,`strong`),vN(159,`Hover`),ug()(),Kc(160,`td`)(161,`td`),ug(),Ac(162,`tr`)(163,`td`)(164,`code`),vN(165,`--background-color-hover`),ug()(),Ac(166,`td`),vN(167,`Cor de fundo no estado hover`),ug(),Ac(168,`td`)(169,`code`),vN(170,`var(--color-brand-01-lightest)`),ug()()(),Ac(171,`tr`)(172,`td`)(173,`code`),vN(174,`--text-color-hover`),ug()(),Ac(175,`td`),vN(176,`Cor do texto no estado hover`),ug(),Ac(177,`td`)(178,`code`),vN(179,`var(--color-action-default)`),ug()()(),Ac(180,`tr`)(181,`td`)(182,`strong`),vN(183,`Selected`),ug()(),Kc(184,`td`)(185,`td`),ug(),Ac(186,`tr`)(187,`td`)(188,`code`),vN(189,`--background-color-selected`),ug()(),Ac(190,`td`),vN(191,`Cor de fundo no estado selecionado`),ug(),Ac(192,`td`)(193,`code`),vN(194,`var(--color-brand-01-lightest)`),ug()()(),Ac(195,`tr`)(196,`td`)(197,`code`),vN(198,`--border-color-selected`),ug()(),Ac(199,`td`),vN(200,`Cor da borda no estado selecionado`),ug(),Ac(201,`td`)(202,`code`),vN(203,`var(--color-brand-01-lighter)`),ug()()(),Ac(204,`tr`)(205,`td`)(206,`code`),vN(207,`--text-color-selected`),ug()(),Ac(208,`td`),vN(209,`Cor do texto no estado selecionado`),ug(),Ac(210,`td`)(211,`code`),vN(212,`var(--color-action-default)`),ug()()(),Ac(213,`tr`)(214,`td`)(215,`code`),vN(216,`--icon-color-selected`),ug()(),Ac(217,`td`),vN(218,`Cor do ícone no estado selecionado`),ug(),Ac(219,`td`)(220,`code`),vN(221,`var(--color-action-default)`),ug()()(),Ac(222,`tr`)(223,`td`)(224,`strong`),vN(225,`Disabled`),ug()(),Kc(226,`td`)(227,`td`),ug(),Ac(228,`tr`)(229,`td`)(230,`code`),vN(231,`--opacity-disabled`),ug()(),Ac(232,`td`),vN(233,`Opacidade no estado desabilitado`),ug(),Ac(234,`td`)(235,`code`),vN(236,`0.5`),ug()()()()()(),Ac(237,`div`,9)(238,`h4`,10),vN(239,`Seletor`),ug(),Ac(240,`pre`,11),vN(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),ug()(),Ac(242,`h4`,12),vN(243,`Propriedades`),ug(),Ac(244,`table`,13)(245,`tr`,14)(246,`th`,15),vN(247,`Nome`),ug(),Ac(248,`th`,15),vN(249,`Tipo`),ug(),Ac(250,`th`,15),vN(251,`Padrão`),ug(),Ac(252,`th`,15),vN(253,`Descrição`),ug()(),Ac(254,`tr`,16)(255,`td`,17)(256,`div`,18)(257,`span`,19),vN(258,` p-disabled`),Kc(259,`br`),ug()()(),Ac(260,`td`,20)(261,`code`,21),vN(262,`boolean`),ug()(),Ac(263,`td`,22)(264,`p`)(265,`code`),vN(266,`false`),ug()()(),Ac(267,`td`,23)(268,`em`)(269,`strong`),vN(270,`(opcional)`),ug()(),Ac(271,`p`),vN(272,`Define se o chip está desabilitado, impedindo qualquer interação do usuário.`),ug(),Ac(273,`p`),vN(274,`Quando habilitado, o chip não responde a cliques nem a eventos de teclado (Enter/Space).`),ug()()(),Ac(275,`tr`,16)(276,`td`,17)(277,`div`,18)(278,`span`,19),vN(279,` p-label`),Kc(280,`br`),ug()()(),Ac(281,`td`,20)(282,`code`,24),vN(283,`string `),ug(),Ac(284,`code`,25),vN(285,` undefined`),ug()(),Ac(286,`td`,22),vN(287,`-`),ug(),Ac(288,`td`,23)(289,`em`)(290,`strong`),vN(291,`(opcional)`),ug()(),Ac(292,`p`),vN(293,`Define o rótulo de texto exibido no chip.`),ug()()(),Ac(294,`tr`,16)(295,`td`,17)(296,`div`,18)(297,`span`,19),vN(298,` p-selected`),Kc(299,`br`),ug()()(),Ac(300,`td`,20)(301,`code`,21),vN(302,`boolean`),ug()(),Ac(303,`td`,22)(304,`p`)(305,`code`),vN(306,`false`),ug()()(),Ac(307,`td`,23)(308,`em`)(309,`strong`),vN(310,`(opcional)`),ug()(),Ac(311,`p`),vN(312,`Define o estado de seleção do chip.`),ug()()(),Ac(313,`tr`,16)(314,`td`,17)(315,`div`,26)(316,`span`,27),vN(317,` (p-selected-change)`),Kc(318,`br`),ug()()(),Ac(319,`td`,20)(320,`code`,28),vN(321,`EventEmitter`),ug()(),Ac(322,`td`,22),vN(323,`-`),ug(),Ac(324,`td`,23)(325,`em`)(326,`strong`),vN(327,`(opcional)`),ug()(),Ac(328,`p`),vN(329,`Evento disparado após a alteração do estado de seleção do `),Ac(330,`em`),vN(331,`chip`),ug(),vN(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),ug()()()(),Ac(333,`h3`),vN(334,`Interfaces`),ug(),Ac(335,`h4`,29)(336,`code`,5),vN(337,`PoFilterChipSelectedChange`),ug()(),Ac(338,`div`,2)(339,`p`),vN(340,`Interface que define o objeto emitido pelo evento `),Ac(341,`code`),vN(342,`p-selected-change`),ug(),vN(343,`.`),ug()(),Ac(344,`h4`,12),vN(345,`Propriedades`),ug(),Ac(346,`table`,13)(347,`tr`,14)(348,`th`,15),vN(349,`Nome`),ug(),Ac(350,`th`,15),vN(351,`Tipo`),ug(),Ac(352,`th`,15),vN(353,`Descrição`),ug()(),Ac(354,`tr`,16)(355,`td`,17)(356,`div`,18)(357,`span`,19),vN(358,` label`),Kc(359,`br`),ug()()(),Ac(360,`td`,20)(361,`code`,24),vN(362,`string`),ug()(),Ac(363,`td`,23)(364,`p`),vN(365,`Rótulo de texto do `),Ac(366,`em`),vN(367,`chip`),ug(),vN(368,`.`),ug()()(),Ac(369,`tr`,16)(370,`td`,17)(371,`div`,18)(372,`span`,19),vN(373,` selected`),Kc(374,`br`),ug()()(),Ac(375,`td`,20)(376,`code`,21),vN(377,`boolean`),ug()(),Ac(378,`td`,23)(379,`p`),vN(380,`Estado de seleção do `),Ac(381,`em`),vN(382,`chip`),ug(),vN(383,` (`),Ac(384,`code`),vN(385,`true`),ug(),vN(386,` para selecionado, `),Ac(387,`code`),vN(388,`false`),ug(),vN(389,` para desmarcado).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var De=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Filter Chip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return l.changeTab(`doc`)}),Kc(3,`sample-po-filter-chip-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return l.changeTab(`web`)}),Kc(5,`sample-po-filter-chip-basic-view`)(6,`sample-po-filter-chip-labs-view`)(7,`sample-po-filter-chip-filter-list-view`),ug()()()),o&2&&(cE(`p-actions`,l.actions),Hp(2),cE(`p-active`,l.activeTab===`doc`),Hp(2),cE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[$ze,gae,bae,ae,pe,se,me],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[kL.forChild(De),kL]})}return n})();var et=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[Ta,he]})}return n})();export{et as DocPoFilterChipModule};