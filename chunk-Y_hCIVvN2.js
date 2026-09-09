import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ba as yw,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,nn as j4,on as mCe,pa as w,q as Mbe,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,vi as bx,yi as cN}from"./main-3EWTGE7T.js";var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Filter`]],template:function(o,l){o&1&&Gl(0,`po-filter-chip`,0)},dependencies:[Mbe],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Filter Chip Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-filter-chip-basic`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+l.sampleCodeButtonIcon),jp(),hg(` `,l.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,fe,l.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,oe],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore()}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event=`p-selected-change`}restore(){this.label=`Filter`,this.selected=!1,this.disabled=!1,this.event=``,this.model=``}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-labs`]],standalone:!1,decls:16,vars:8,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`selected`,`p-label`,`Selected`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,l){if(o&1){let h=Ax();Tl(0,`div`,1)(1,`po-filter-chip`,2),ht(`p-selected-change`,function(c){return l.onSelectedChange(c)}),ag()(),Gl(2,`po-divider`),Tl(3,`div`,1),Gl(4,`po-info`,3)(5,`po-info`,4),ag(),Gl(6,`po-divider`),Tl(7,`form`,null,0)(9,`div`,1)(10,`po-input`,5),ww(`ngModelChange`,function(c){return Ky(h),uN(l.label,c)||(l.label=c),Xy(c)}),ag(),a0(),ag(),Tl(11,`div`,1)(12,`po-switch`,6),ww(`ngModelChange`,function(c){return Ky(h),uN(l.selected,c)||(l.selected=c),Xy(c)}),ag(),a0(),Tl(13,`po-switch`,7),ww(`ngModelChange`,function(c){return Ky(h),uN(l.disabled,c)||(l.disabled=c),Xy(c)}),ag(),a0(),ag(),Tl(14,`div`,1)(15,`po-button`,8),ht(`p-click`,function(){return l.restore()}),ag()()()}o&2&&(jp(),nw(`p-label`,l.label)(`p-selected`,l.selected)(`p-disabled`,l.disabled),jp(3),nw(`p-value`,l.model),jp(),nw(`p-value`,l.event),jp(5),Ew(`ngModel`,l.label),l0(),jp(2),Ew(`ngModel`,l.selected),l0(),jp(),Ew(`ngModel`,l.disabled),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,j4,Mbe,ybe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Filter Chip Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-filter-chip-labs`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+l.sampleCodeButtonIcon),jp(),hg(` `,l.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Se,l.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,re],encapsulation:2,changeDetection:1})}return n})();var Ee=(n,b)=>b.label;var ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=Ax();Tl(0,`po-filter-chip`,7),ht(`p-selected-change`,function(l){Ky(a);return Xy(Fx().onFilterChange(l))}),ag()}if(n&2){let a=b.$implicit;nw(`p-label`,a.label)(`p-selected`,a.selected)}}function Fe(n,b){if(n&1&&(Tl(0,`div`,5)(1,`span`,8),cN(2),ag(),Tl(3,`span`,9),cN(4),ag()()),n&2){let a=b.$implicit;jp(2),yw(a.name),jp(2),hg(`(`,a.category,`)`)}}function ye(n,b){n&1&&(Tl(0,`div`,6)(1,`span`,10),cN(2,`No products found.`),ag()())}var de=(()=>{class n{filters=[{label:`Electronics`,selected:!1},{label:`Clothing`,selected:!1},{label:`Books`,selected:!1},{label:`Sports`,selected:!1}];products=[{name:`Laptop`,category:`Electronics`},{name:`Smartphone`,category:`Electronics`},{name:`T-Shirt`,category:`Clothing`},{name:`Sneakers`,category:`Clothing`},{name:`Novel`,category:`Books`},{name:`Cookbook`,category:`Books`},{name:`Basketball`,category:`Sports`},{name:`Tennis Racket`,category:`Sports`}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-filter-list`]],standalone:!1,decls:16,vars:2,consts:[[1,`po-row`],[1,`po-md-12`],[1,`po-font-subtitle`],[1,`po-mt-1`],[1,`po-mr-1`,3,`p-label`,`p-selected`],[1,`po-row`,`po-p-1`],[1,`po-row`,`po-p-2`],[1,`po-mr-1`,3,`p-selected-change`,`p-label`,`p-selected`],[1,`po-font-text-bold`,`po-mr-1`],[1,`po-font-text-small`],[1,`po-font-text`]],template:function(o,l){o&1&&(Tl(0,`div`,0)(1,`div`,1)(2,`p`,2),cN(3,`Filter by category:`),ag(),Tl(4,`div`,3),Cx(5,xe,1,2,`po-filter-chip`,4,Ee),ag()()(),Gl(7,`po-divider`),Tl(8,`div`,0)(9,`div`,1)(10,`p`,2),cN(11),ag(),Tl(12,`po-container`),Cx(13,Fe,5,2,`div`,5,ve,!1,ye,3,0,`div`,6),ag()()()),o&2&&(jp(5),bx(l.filters),jp(6),hg(`Products (`,l.filteredProducts.length,`):`),jp(2),bx(l.filteredProducts))},dependencies:[xp,Xy$1,Mbe],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-filter-list-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Filter Chip - Filter List`),ag(),Tl(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-filter-chip-filter-list`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+l.sampleCodeButtonIcon),jp(),hg(` `,l.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,we,l.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-filter-chip-doc`]],standalone:!1,decls:390,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#listbox`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(o,l){o&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFilterChipModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-filter-chip`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoFilterChipComponent`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`O `),Tl(18,`code`),cN(19,`po-filter-chip`),ag(),cN(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),ag(),Tl(21,`h4`),cN(22,`Boas práticas`),ag(),Tl(23,`ul`)(24,`li`),cN(25,`Utilize `),Tl(26,`code`),cN(27,`labels`),ag(),cN(28,` curtos e descritivos para os filtros.`),ag(),Tl(29,`li`),cN(30,`Agrupe múltiplos `),Tl(31,`code`),cN(32,`po-filter-chip`),ag(),cN(33,` para representar opções de filtragem relacionadas.`),ag(),Tl(34,`li`),cN(35,`Utilize a propriedade `),Tl(36,`code`),cN(37,`p-disabled`),ag(),cN(38,` para filtros temporariamente indisponíveis.`),ag()(),Tl(39,`h4`),cN(40,`Acessibilidade tratada no componente`),ag(),Tl(41,`p`),cN(42,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ag(),Tl(43,`ul`)(44,`li`),cN(45,`O componente possui `),Tl(46,`code`),cN(47,`role="option"`),ag(),cN(48,` e `),Tl(49,`code`),cN(50,`aria-selected`),ag(),cN(51,` refletindo o estado de seleção. `),Tl(52,`a`,6),cN(53,`W3C WAI-ARIA 3.14 Listbox`),ag()(),Tl(54,`li`),cN(55,`Quando em foco, o chip é ativado usando as teclas de Espaço e Enter do teclado. `),Tl(56,`a`,7),cN(57,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),ag()()(),Tl(58,`h4`),cN(59,`Tokens customizáveis`),ag(),Tl(60,`p`),cN(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(62,`blockquote`)(63,`p`),cN(64,`Para maiores informações, acesse o guia `),Tl(65,`a`,8),cN(66,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(67,`.`),ag()(),Tl(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),cN(72,`Propriedade`),ag(),Tl(73,`th`),cN(74,`Descrição`),ag(),Tl(75,`th`),cN(76,`Valor Padrão`),ag()()(),Tl(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),cN(81,`--border-radius`),ag()(),Tl(82,`td`),cN(83,`Raio dos cantos do elemento`),ag(),Tl(84,`td`)(85,`code`),cN(86,`var(--border-radius-lg)`),ag()()(),Tl(87,`tr`)(88,`td`)(89,`code`),cN(90,`--border-width`),ag()(),Tl(91,`td`),cN(92,`Largura da borda`),ag(),Tl(93,`td`)(94,`code`),cN(95,`var(--border-width-sm)`),ag()()(),Tl(96,`tr`)(97,`td`)(98,`code`),cN(99,`--font-family`),ag()(),Tl(100,`td`),cN(101,`Família tipográfica`),ag(),Tl(102,`td`)(103,`code`),cN(104,`var(--font-family-theme)`),ag()()(),Tl(105,`tr`)(106,`td`)(107,`code`),cN(108,`--font-size`),ag()(),Tl(109,`td`),cN(110,`Tamanho da fonte`),ag(),Tl(111,`td`)(112,`code`),cN(113,`var(--font-size-default)`),ag()()(),Tl(114,`tr`)(115,`td`)(116,`code`),cN(117,`--font-weight`),ag()(),Tl(118,`td`),cN(119,`Peso da fonte`),ag(),Tl(120,`td`)(121,`code`),cN(122,`var(--font-weight-normal)`),ag()()(),Tl(123,`tr`)(124,`td`)(125,`strong`),cN(126,`Default`),ag()(),Gl(127,`td`)(128,`td`),ag(),Tl(129,`tr`)(130,`td`)(131,`code`),cN(132,`--border-color`),ag()(),Tl(133,`td`),cN(134,`Cor da borda no estado padrão`),ag(),Tl(135,`td`)(136,`code`),cN(137,`var(--color-neutral-light-20)`),ag()()(),Tl(138,`tr`)(139,`td`)(140,`code`),cN(141,`--text-color`),ag()(),Tl(142,`td`),cN(143,`Cor do texto no estado padrão`),ag(),Tl(144,`td`)(145,`code`),cN(146,`var(--color-neutral-dark-80)`),ag()()(),Tl(147,`tr`)(148,`td`)(149,`code`),cN(150,`--background-color`),ag()(),Tl(151,`td`),cN(152,`Cor de fundo no estado padrão`),ag(),Tl(153,`td`)(154,`code`),cN(155,`transparent`),ag()()(),Tl(156,`tr`)(157,`td`)(158,`strong`),cN(159,`Hover`),ag()(),Gl(160,`td`)(161,`td`),ag(),Tl(162,`tr`)(163,`td`)(164,`code`),cN(165,`--background-color-hover`),ag()(),Tl(166,`td`),cN(167,`Cor de fundo no estado hover`),ag(),Tl(168,`td`)(169,`code`),cN(170,`var(--color-brand-01-lightest)`),ag()()(),Tl(171,`tr`)(172,`td`)(173,`code`),cN(174,`--text-color-hover`),ag()(),Tl(175,`td`),cN(176,`Cor do texto no estado hover`),ag(),Tl(177,`td`)(178,`code`),cN(179,`var(--color-action-default)`),ag()()(),Tl(180,`tr`)(181,`td`)(182,`strong`),cN(183,`Selected`),ag()(),Gl(184,`td`)(185,`td`),ag(),Tl(186,`tr`)(187,`td`)(188,`code`),cN(189,`--background-color-selected`),ag()(),Tl(190,`td`),cN(191,`Cor de fundo no estado selecionado`),ag(),Tl(192,`td`)(193,`code`),cN(194,`var(--color-brand-01-lightest)`),ag()()(),Tl(195,`tr`)(196,`td`)(197,`code`),cN(198,`--border-color-selected`),ag()(),Tl(199,`td`),cN(200,`Cor da borda no estado selecionado`),ag(),Tl(201,`td`)(202,`code`),cN(203,`var(--color-brand-01-lighter)`),ag()()(),Tl(204,`tr`)(205,`td`)(206,`code`),cN(207,`--text-color-selected`),ag()(),Tl(208,`td`),cN(209,`Cor do texto no estado selecionado`),ag(),Tl(210,`td`)(211,`code`),cN(212,`var(--color-action-default)`),ag()()(),Tl(213,`tr`)(214,`td`)(215,`code`),cN(216,`--icon-color-selected`),ag()(),Tl(217,`td`),cN(218,`Cor do ícone no estado selecionado`),ag(),Tl(219,`td`)(220,`code`),cN(221,`var(--color-action-default)`),ag()()(),Tl(222,`tr`)(223,`td`)(224,`strong`),cN(225,`Disabled`),ag()(),Gl(226,`td`)(227,`td`),ag(),Tl(228,`tr`)(229,`td`)(230,`code`),cN(231,`--opacity-disabled`),ag()(),Tl(232,`td`),cN(233,`Opacidade no estado desabilitado`),ag(),Tl(234,`td`)(235,`code`),cN(236,`0.5`),ag()()()()()(),Tl(237,`div`,9)(238,`h4`,10),cN(239,`Seletor`),ag(),Tl(240,`pre`,11),cN(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),ag()(),Tl(242,`h4`,12),cN(243,`Propriedades`),ag(),Tl(244,`table`,13)(245,`tr`,14)(246,`th`,15),cN(247,`Nome`),ag(),Tl(248,`th`,15),cN(249,`Tipo`),ag(),Tl(250,`th`,15),cN(251,`Padrão`),ag(),Tl(252,`th`,15),cN(253,`Descrição`),ag()(),Tl(254,`tr`,16)(255,`td`,17)(256,`div`,18)(257,`span`,19),cN(258,` p-disabled`),Gl(259,`br`),ag()()(),Tl(260,`td`,20)(261,`code`,21),cN(262,`boolean`),ag()(),Tl(263,`td`,22)(264,`p`)(265,`code`),cN(266,`false`),ag()()(),Tl(267,`td`,23)(268,`em`)(269,`strong`),cN(270,`(opcional)`),ag()(),Tl(271,`p`),cN(272,`Define se o chip está desabilitado, impedindo qualquer interação do usuário.`),ag(),Tl(273,`p`),cN(274,`Quando habilitado, o chip não responde a cliques nem a eventos de teclado (Enter/Space).`),ag()()(),Tl(275,`tr`,16)(276,`td`,17)(277,`div`,18)(278,`span`,19),cN(279,` p-label`),Gl(280,`br`),ag()()(),Tl(281,`td`,20)(282,`code`,24),cN(283,`string `),ag(),Tl(284,`code`,25),cN(285,` undefined`),ag()(),Tl(286,`td`,22),cN(287,`-`),ag(),Tl(288,`td`,23)(289,`em`)(290,`strong`),cN(291,`(opcional)`),ag()(),Tl(292,`p`),cN(293,`Define o rótulo de texto exibido no chip.`),ag()()(),Tl(294,`tr`,16)(295,`td`,17)(296,`div`,18)(297,`span`,19),cN(298,` p-selected`),Gl(299,`br`),ag()()(),Tl(300,`td`,20)(301,`code`,21),cN(302,`boolean`),ag()(),Tl(303,`td`,22)(304,`p`)(305,`code`),cN(306,`false`),ag()()(),Tl(307,`td`,23)(308,`em`)(309,`strong`),cN(310,`(opcional)`),ag()(),Tl(311,`p`),cN(312,`Define o estado de seleção do chip.`),ag()()(),Tl(313,`tr`,16)(314,`td`,17)(315,`div`,26)(316,`span`,27),cN(317,` (p-selected-change)`),Gl(318,`br`),ag()()(),Tl(319,`td`,20)(320,`code`,28),cN(321,`EventEmitter`),ag()(),Tl(322,`td`,22),cN(323,`-`),ag(),Tl(324,`td`,23)(325,`em`)(326,`strong`),cN(327,`(opcional)`),ag()(),Tl(328,`p`),cN(329,`Evento disparado após a alteração do estado de seleção do `),Tl(330,`em`),cN(331,`chip`),ag(),cN(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),ag()()()(),Tl(333,`h3`),cN(334,`Interfaces`),ag(),Tl(335,`h4`,29)(336,`code`,5),cN(337,`PoFilterChipSelectedChange`),ag()(),Tl(338,`div`,2)(339,`p`),cN(340,`Interface que define o objeto emitido pelo evento `),Tl(341,`code`),cN(342,`p-selected-change`),ag(),cN(343,`.`),ag()(),Tl(344,`h4`,12),cN(345,`Propriedades`),ag(),Tl(346,`table`,13)(347,`tr`,14)(348,`th`,15),cN(349,`Nome`),ag(),Tl(350,`th`,15),cN(351,`Tipo`),ag(),Tl(352,`th`,15),cN(353,`Descrição`),ag()(),Tl(354,`tr`,16)(355,`td`,17)(356,`div`,18)(357,`span`,19),cN(358,` label`),Gl(359,`br`),ag()()(),Tl(360,`td`,20)(361,`code`,24),cN(362,`string`),ag()(),Tl(363,`td`,23)(364,`p`),cN(365,`Rótulo de texto do `),Tl(366,`em`),cN(367,`chip`),ag(),cN(368,`.`),ag()()(),Tl(369,`tr`,16)(370,`td`,17)(371,`div`,18)(372,`span`,19),cN(373,` selected`),Gl(374,`br`),ag()()(),Tl(375,`td`,20)(376,`code`,21),cN(377,`boolean`),ag()(),Tl(378,`td`,23)(379,`p`),cN(380,`Estado de seleção do `),Tl(381,`em`),cN(382,`chip`),ag(),cN(383,` (`),Tl(384,`code`),cN(385,`true`),ag(),cN(386,` para selecionado, `),Tl(387,`code`),cN(388,`false`),ag(),cN(389,` para desmarcado).`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var De=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Filter Chip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),Gl(3,`sample-po-filter-chip-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),Gl(5,`sample-po-filter-chip-basic-view`)(6,`sample-po-filter-chip-labs-view`)(7,`sample-po-filter-chip-filter-list-view`),ag()()()),o&2&&(nw(`p-actions`,l.actions),jp(2),nw(`p-active`,l.activeTab===`doc`),jp(2),nw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ae,pe,se,me],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[bL.forChild(De),bL]})}return n})();var et=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he$1({type:n});static ɵinj=ue({imports:[ar,he]})}return n})();export{et as DocPoFilterChipModule};