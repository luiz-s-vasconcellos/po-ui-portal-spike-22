import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,da as ame,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,bH as E3,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,aI as dc,aQ as px,aS as gx,a3 as pNe,A as vw,aD as Xy,aT as tN,aE as Qy,aA as Tx}from'./main-UTR4MKMU.js';var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Filter"]],template:function(o,l){o&1&&Wl(0,"po-filter-chip",0);},dependencies:[ame],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Filter Chip Basic"),sg(),Sl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-filter-chip-basic"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,fe,l.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,oe],encapsulation:2})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore();}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event="p-selected-change";}restore(){this.label="Filter",this.selected=false,this.disabled=false,this.event="",this.model="";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs"]],standalone:false,decls:16,vars:8,consts:[["f","ngForm"],[1,"po-row"],[3,"p-selected-change","p-label","p-selected","p-disabled"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selected","p-label","Selected",1,"po-md-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,l){if(o&1){let h=Ex();Sl(0,"div",1)(1,"po-filter-chip",2),ht("p-selected-change",function(c){return l.onSelectedChange(c)}),sg()(),Wl(2,"po-divider"),Sl(3,"div",1),Wl(4,"po-info",3)(5,"po-info",4),sg(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"div",1)(10,"po-input",5),Ew("ngModelChange",function(c){return Xy(h),tN(l.label,c)||(l.label=c),Qy(c)}),sg(),JA(),sg(),Sl(11,"div",1)(12,"po-switch",6),Ew("ngModelChange",function(c){return Xy(h),tN(l.selected,c)||(l.selected=c),Qy(c)}),sg(),JA(),Sl(13,"po-switch",7),Ew("ngModelChange",function(c){return Xy(h),tN(l.disabled,c)||(l.disabled=c),Qy(c)}),sg(),JA(),sg(),Sl(14,"div",1)(15,"po-button",8),ht("p-click",function(){return l.restore()}),sg()()();}o&2&&(Vp(),tw("p-label",l.label)("p-selected",l.selected)("p-disabled",l.disabled),Vp(3),tw("p-value",l.model),Vp(),tw("p-value",l.event),Vp(5),Dw("ngModel",l.label),t0(),Vp(2),Dw("ngModel",l.selected),t0(),Vp(),Dw("ngModel",l.disabled),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,E3,ame,Qhe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Filter Chip Labs"),sg(),Sl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-filter-chip-labs"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Se,l.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return n})();var Ee=(n,b)=>b.label,ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=Ex();Sl(0,"po-filter-chip",7),ht("p-selected-change",function(l){Xy(a);let h=Tx();return Qy(h.onFilterChange(l))}),sg();}if(n&2){let a=b.$implicit;tw("p-label",a.label)("p-selected",a.selected);}}function Fe(n,b){if(n&1&&(Sl(0,"div",5)(1,"span",8),Jx(2),sg(),Sl(3,"span",9),Jx(4),sg()()),n&2){let a=b.$implicit;Vp(2),vw(a.name),Vp(2),fg("(",a.category,")");}}function ye(n,b){n&1&&(Sl(0,"div",6)(1,"span",10),Jx(2,"No products found."),sg()());}var de=(()=>{class n{filters=[{label:"Electronics",selected:false},{label:"Clothing",selected:false},{label:"Books",selected:false},{label:"Sports",selected:false}];products=[{name:"Laptop",category:"Electronics"},{name:"Smartphone",category:"Electronics"},{name:"T-Shirt",category:"Clothing"},{name:"Sneakers",category:"Clothing"},{name:"Novel",category:"Books"},{name:"Cookbook",category:"Books"},{name:"Basketball",category:"Sports"},{name:"Tennis Racket",category:"Sports"}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected);}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list"]],standalone:false,decls:16,vars:2,consts:[[1,"po-row"],[1,"po-md-12"],[1,"po-font-subtitle"],[1,"po-mt-1"],[1,"po-mr-1",3,"p-label","p-selected"],[1,"po-row","po-p-1"],[1,"po-row","po-p-2"],[1,"po-mr-1",3,"p-selected-change","p-label","p-selected"],[1,"po-font-text-bold","po-mr-1"],[1,"po-font-text-small"],[1,"po-font-text"]],template:function(o,l){o&1&&(Sl(0,"div",0)(1,"div",1)(2,"p",2),Jx(3,"Filter by category:"),sg(),Sl(4,"div",3),px(5,xe,1,2,"po-filter-chip",4,Ee),sg()()(),Wl(7,"po-divider"),Sl(8,"div",0)(9,"div",1)(10,"p",2),Jx(11),sg(),Sl(12,"po-container"),px(13,Fe,5,2,"div",5,ve,false,ye,3,0,"div",6),sg()()()),o&2&&(Vp(5),gx(l.filters),Vp(6),fg("Products (",l.filteredProducts.length,"):"),Vp(2),gx(l.filteredProducts));},dependencies:[dc,mv,ame],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Filter Chip - Filter List"),sg(),Sl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-filter-chip-filter-list"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,we,l.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-doc"]],standalone:false,decls:390,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#listbox"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","undefined"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"]],template:function(o,l){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFilterChipModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-filter-chip"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoFilterChipComponent"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,"O "),Sl(18,"code"),Jx(19,"po-filter-chip"),sg(),Jx(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),sg(),Sl(21,"h4"),Jx(22,"Boas pr\xE1ticas"),sg(),Sl(23,"ul")(24,"li"),Jx(25,"Utilize "),Sl(26,"code"),Jx(27,"labels"),sg(),Jx(28," curtos e descritivos para os filtros."),sg(),Sl(29,"li"),Jx(30,"Agrupe m\xFAltiplos "),Sl(31,"code"),Jx(32,"po-filter-chip"),sg(),Jx(33," para representar op\xE7\xF5es de filtragem relacionadas."),sg(),Sl(34,"li"),Jx(35,"Utilize a propriedade "),Sl(36,"code"),Jx(37,"p-disabled"),sg(),Jx(38," para filtros temporariamente indispon\xEDveis."),sg()(),Sl(39,"h4"),Jx(40,"Acessibilidade tratada no componente"),sg(),Sl(41,"p"),Jx(42,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Sl(43,"ul")(44,"li"),Jx(45,"O componente possui "),Sl(46,"code"),Jx(47,'role="option"'),sg(),Jx(48," e "),Sl(49,"code"),Jx(50,"aria-selected"),sg(),Jx(51," refletindo o estado de sele\xE7\xE3o. "),Sl(52,"a",6),Jx(53,"W3C WAI-ARIA 3.14 Listbox"),sg()(),Sl(54,"li"),Jx(55,"Quando em foco, o chip \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Sl(56,"a",7),Jx(57,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),sg()()(),Sl(58,"h4"),Jx(59,"Tokens customiz\xE1veis"),sg(),Sl(60,"p"),Jx(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(62,"blockquote")(63,"p"),Jx(64,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(65,"a",8),Jx(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(67,"."),sg()(),Sl(68,"table")(69,"thead")(70,"tr")(71,"th"),Jx(72,"Propriedade"),sg(),Sl(73,"th"),Jx(74,"Descri\xE7\xE3o"),sg(),Sl(75,"th"),Jx(76,"Valor Padr\xE3o"),sg()()(),Sl(77,"tbody")(78,"tr")(79,"td")(80,"code"),Jx(81,"--border-radius"),sg()(),Sl(82,"td"),Jx(83,"Raio dos cantos do elemento"),sg(),Sl(84,"td")(85,"code"),Jx(86,"var(--border-radius-lg)"),sg()()(),Sl(87,"tr")(88,"td")(89,"code"),Jx(90,"--border-width"),sg()(),Sl(91,"td"),Jx(92,"Largura da borda"),sg(),Sl(93,"td")(94,"code"),Jx(95,"var(--border-width-sm)"),sg()()(),Sl(96,"tr")(97,"td")(98,"code"),Jx(99,"--font-family"),sg()(),Sl(100,"td"),Jx(101,"Fam\xEDlia tipogr\xE1fica"),sg(),Sl(102,"td")(103,"code"),Jx(104,"var(--font-family-theme)"),sg()()(),Sl(105,"tr")(106,"td")(107,"code"),Jx(108,"--font-size"),sg()(),Sl(109,"td"),Jx(110,"Tamanho da fonte"),sg(),Sl(111,"td")(112,"code"),Jx(113,"var(--font-size-default)"),sg()()(),Sl(114,"tr")(115,"td")(116,"code"),Jx(117,"--font-weight"),sg()(),Sl(118,"td"),Jx(119,"Peso da fonte"),sg(),Sl(120,"td")(121,"code"),Jx(122,"var(--font-weight-normal)"),sg()()(),Sl(123,"tr")(124,"td")(125,"strong"),Jx(126,"Default"),sg()(),Wl(127,"td")(128,"td"),sg(),Sl(129,"tr")(130,"td")(131,"code"),Jx(132,"--border-color"),sg()(),Sl(133,"td"),Jx(134,"Cor da borda no estado padr\xE3o"),sg(),Sl(135,"td")(136,"code"),Jx(137,"var(--color-neutral-light-20)"),sg()()(),Sl(138,"tr")(139,"td")(140,"code"),Jx(141,"--text-color"),sg()(),Sl(142,"td"),Jx(143,"Cor do texto no estado padr\xE3o"),sg(),Sl(144,"td")(145,"code"),Jx(146,"var(--color-neutral-dark-80)"),sg()()(),Sl(147,"tr")(148,"td")(149,"code"),Jx(150,"--background-color"),sg()(),Sl(151,"td"),Jx(152,"Cor de fundo no estado padr\xE3o"),sg(),Sl(153,"td")(154,"code"),Jx(155,"transparent"),sg()()(),Sl(156,"tr")(157,"td")(158,"strong"),Jx(159,"Hover"),sg()(),Wl(160,"td")(161,"td"),sg(),Sl(162,"tr")(163,"td")(164,"code"),Jx(165,"--background-color-hover"),sg()(),Sl(166,"td"),Jx(167,"Cor de fundo no estado hover"),sg(),Sl(168,"td")(169,"code"),Jx(170,"var(--color-brand-01-lightest)"),sg()()(),Sl(171,"tr")(172,"td")(173,"code"),Jx(174,"--text-color-hover"),sg()(),Sl(175,"td"),Jx(176,"Cor do texto no estado hover"),sg(),Sl(177,"td")(178,"code"),Jx(179,"var(--color-action-default)"),sg()()(),Sl(180,"tr")(181,"td")(182,"strong"),Jx(183,"Selected"),sg()(),Wl(184,"td")(185,"td"),sg(),Sl(186,"tr")(187,"td")(188,"code"),Jx(189,"--background-color-selected"),sg()(),Sl(190,"td"),Jx(191,"Cor de fundo no estado selecionado"),sg(),Sl(192,"td")(193,"code"),Jx(194,"var(--color-brand-01-lightest)"),sg()()(),Sl(195,"tr")(196,"td")(197,"code"),Jx(198,"--border-color-selected"),sg()(),Sl(199,"td"),Jx(200,"Cor da borda no estado selecionado"),sg(),Sl(201,"td")(202,"code"),Jx(203,"var(--color-brand-01-lighter)"),sg()()(),Sl(204,"tr")(205,"td")(206,"code"),Jx(207,"--text-color-selected"),sg()(),Sl(208,"td"),Jx(209,"Cor do texto no estado selecionado"),sg(),Sl(210,"td")(211,"code"),Jx(212,"var(--color-action-default)"),sg()()(),Sl(213,"tr")(214,"td")(215,"code"),Jx(216,"--icon-color-selected"),sg()(),Sl(217,"td"),Jx(218,"Cor do \xEDcone no estado selecionado"),sg(),Sl(219,"td")(220,"code"),Jx(221,"var(--color-action-default)"),sg()()(),Sl(222,"tr")(223,"td")(224,"strong"),Jx(225,"Disabled"),sg()(),Wl(226,"td")(227,"td"),sg(),Sl(228,"tr")(229,"td")(230,"code"),Jx(231,"--opacity-disabled"),sg()(),Sl(232,"td"),Jx(233,"Opacidade no estado desabilitado"),sg(),Sl(234,"td")(235,"code"),Jx(236,"0.5"),sg()()()()()(),Sl(237,"div",9)(238,"h4",10),Jx(239,"Seletor"),sg(),Sl(240,"pre",11),Jx(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),sg()(),Sl(242,"h4",12),Jx(243,"Propriedades"),sg(),Sl(244,"table",13)(245,"tr",14)(246,"th",15),Jx(247,"Nome"),sg(),Sl(248,"th",15),Jx(249,"Tipo"),sg(),Sl(250,"th",15),Jx(251,"Padr\xE3o"),sg(),Sl(252,"th",15),Jx(253,"Descri\xE7\xE3o"),sg()(),Sl(254,"tr",16)(255,"td",17)(256,"div",18)(257,"span",19),Jx(258," p-disabled"),Wl(259,"br"),sg()()(),Sl(260,"td",20)(261,"code",21),Jx(262,"boolean"),sg()(),Sl(263,"td",22)(264,"p")(265,"code"),Jx(266,"false"),sg()()(),Sl(267,"td",23)(268,"em")(269,"strong"),Jx(270,"(opcional)"),sg()(),Sl(271,"p"),Jx(272,"Define se o chip est\xE1 desabilitado, impedindo qualquer intera\xE7\xE3o do usu\xE1rio."),sg(),Sl(273,"p"),Jx(274,"Quando habilitado, o chip n\xE3o responde a cliques nem a eventos de teclado (Enter/Space)."),sg()()(),Sl(275,"tr",16)(276,"td",17)(277,"div",18)(278,"span",19),Jx(279," p-label"),Wl(280,"br"),sg()()(),Sl(281,"td",20)(282,"code",24),Jx(283,"string "),sg(),Sl(284,"code",25),Jx(285," undefined"),sg()(),Sl(286,"td",22),Jx(287,"-"),sg(),Sl(288,"td",23)(289,"em")(290,"strong"),Jx(291,"(opcional)"),sg()(),Sl(292,"p"),Jx(293,"Define o r\xF3tulo de texto exibido no chip."),sg()()(),Sl(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),Jx(298," p-selected"),Wl(299,"br"),sg()()(),Sl(300,"td",20)(301,"code",21),Jx(302,"boolean"),sg()(),Sl(303,"td",22)(304,"p")(305,"code"),Jx(306,"false"),sg()()(),Sl(307,"td",23)(308,"em")(309,"strong"),Jx(310,"(opcional)"),sg()(),Sl(311,"p"),Jx(312,"Define o estado de sele\xE7\xE3o do chip."),sg()()(),Sl(313,"tr",16)(314,"td",17)(315,"div",26)(316,"span",27),Jx(317," (p-selected-change)"),Wl(318,"br"),sg()()(),Sl(319,"td",20)(320,"code",28),Jx(321,"EventEmitter"),sg()(),Sl(322,"td",22),Jx(323,"-"),sg(),Sl(324,"td",23)(325,"em")(326,"strong"),Jx(327,"(opcional)"),sg()(),Sl(328,"p"),Jx(329,"Evento disparado ap\xF3s a altera\xE7\xE3o do estado de sele\xE7\xE3o do "),Sl(330,"em"),Jx(331,"chip"),sg(),Jx(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),sg()()()(),Sl(333,"h3"),Jx(334,"Interfaces"),sg(),Sl(335,"h4",29)(336,"code",5),Jx(337,"PoFilterChipSelectedChange"),sg()(),Sl(338,"div",2)(339,"p"),Jx(340,"Interface que define o objeto emitido pelo evento "),Sl(341,"code"),Jx(342,"p-selected-change"),sg(),Jx(343,"."),sg()(),Sl(344,"h4",12),Jx(345,"Propriedades"),sg(),Sl(346,"table",13)(347,"tr",14)(348,"th",15),Jx(349,"Nome"),sg(),Sl(350,"th",15),Jx(351,"Tipo"),sg(),Sl(352,"th",15),Jx(353,"Descri\xE7\xE3o"),sg()(),Sl(354,"tr",16)(355,"td",17)(356,"div",18)(357,"span",19),Jx(358," label"),Wl(359,"br"),sg()()(),Sl(360,"td",20)(361,"code",24),Jx(362,"string"),sg()(),Sl(363,"td",23)(364,"p"),Jx(365,"R\xF3tulo de texto do "),Sl(366,"em"),Jx(367,"chip"),sg(),Jx(368,"."),sg()()(),Sl(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),Jx(373," selected"),Wl(374,"br"),sg()()(),Sl(375,"td",20)(376,"code",21),Jx(377,"boolean"),sg()(),Sl(378,"td",23)(379,"p"),Jx(380,"Estado de sele\xE7\xE3o do "),Sl(381,"em"),Jx(382,"chip"),sg(),Jx(383," ("),Sl(384,"code"),Jx(385,"true"),sg(),Jx(386," para selecionado, "),Sl(387,"code"),Jx(388,"false"),sg(),Jx(389," para desmarcado)."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Filter Chip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-filter-chip-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),Wl(5,"sample-po-filter-chip-basic-view")(6,"sample-po-filter-chip-labs-view")(7,"sample-po-filter-chip-filter-list-view"),sg()()()),o&2&&(tw("p-actions",l.actions),Vp(2),tw("p-active",l.activeTab==="doc"),Vp(2),tw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ae,pe,se,me],encapsulation:2})}return n})();var De=[{path:"",component:ce}],he=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[pL.forChild(De),pL]})}return n})();var et=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[ar,he]})}return n})();export{et as DocPoFilterChipModule};