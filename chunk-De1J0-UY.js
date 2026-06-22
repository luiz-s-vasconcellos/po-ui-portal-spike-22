import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,da as nme,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,b4 as O3,bH as k3,c9 as $he,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,aI as dc,aQ as mx,aS as vx,a3 as aNe,H as vw,aD as Ky,aT as rN,aE as Xy,aA as Rx}from'./main-LUSFEIN7.js';var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Filter"]],template:function(o,l){o&1&&Gl(0,"po-filter-chip",0);},dependencies:[nme],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Filter Chip Basic"),sg(),Tl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-filter-chip-basic"),sg(),Gl(23,"hr")),o&2&&(Vp(5),zx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,fe,l.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,oe],encapsulation:2})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore();}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event="p-selected-change";}restore(){this.label="Filter",this.selected=false,this.disabled=false,this.event="",this.model="";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs"]],standalone:false,decls:16,vars:8,consts:[["f","ngForm"],[1,"po-row"],[3,"p-selected-change","p-label","p-selected","p-disabled"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selected","p-label","Selected",1,"po-md-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,l){if(o&1){let h=Cx();Tl(0,"div",1)(1,"po-filter-chip",2),ht("p-selected-change",function(c){return l.onSelectedChange(c)}),sg()(),Gl(2,"po-divider"),Tl(3,"div",1),Gl(4,"po-info",3)(5,"po-info",4),sg(),Gl(6,"po-divider"),Tl(7,"form",null,0)(9,"div",1)(10,"po-input",5),Ew("ngModelChange",function(c){return Ky(h),rN(l.label,c)||(l.label=c),Xy(c)}),sg(),t0(),sg(),Tl(11,"div",1)(12,"po-switch",6),Ew("ngModelChange",function(c){return Ky(h),rN(l.selected,c)||(l.selected=c),Xy(c)}),sg(),t0(),Tl(13,"po-switch",7),Ew("ngModelChange",function(c){return Ky(h),rN(l.disabled,c)||(l.disabled=c),Xy(c)}),sg(),t0(),sg(),Tl(14,"div",1)(15,"po-button",8),ht("p-click",function(){return l.restore()}),sg()()();}o&2&&(Vp(),tw("p-label",l.label)("p-selected",l.selected)("p-disabled",l.disabled),Vp(3),tw("p-value",l.model),Vp(),tw("p-value",l.event),Vp(5),Dw("ngModel",l.label),r0(),Vp(2),Dw("ngModel",l.selected),r0(),Vp(),Dw("ngModel",l.disabled),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,O3,k3,nme,$he],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Filter Chip Labs"),sg(),Tl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-filter-chip-labs"),sg(),Gl(23,"hr")),o&2&&(Vp(5),zx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Se,l.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,re],encapsulation:2})}return n})();var Ee=(n,b)=>b.label,ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=Cx();Tl(0,"po-filter-chip",7),ht("p-selected-change",function(l){Ky(a);let h=Rx();return Xy(h.onFilterChange(l))}),sg();}if(n&2){let a=b.$implicit;tw("p-label",a.label)("p-selected",a.selected);}}function Fe(n,b){if(n&1&&(Tl(0,"div",5)(1,"span",8),tN(2),sg(),Tl(3,"span",9),tN(4),sg()()),n&2){let a=b.$implicit;Vp(2),vw(a.name),Vp(2),fg("(",a.category,")");}}function ye(n,b){n&1&&(Tl(0,"div",6)(1,"span",10),tN(2,"No products found."),sg()());}var de=(()=>{class n{filters=[{label:"Electronics",selected:false},{label:"Clothing",selected:false},{label:"Books",selected:false},{label:"Sports",selected:false}];products=[{name:"Laptop",category:"Electronics"},{name:"Smartphone",category:"Electronics"},{name:"T-Shirt",category:"Clothing"},{name:"Sneakers",category:"Clothing"},{name:"Novel",category:"Books"},{name:"Cookbook",category:"Books"},{name:"Basketball",category:"Sports"},{name:"Tennis Racket",category:"Sports"}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected);}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list"]],standalone:false,decls:16,vars:2,consts:[[1,"po-row"],[1,"po-md-12"],[1,"po-font-subtitle"],[1,"po-mt-1"],[1,"po-mr-1",3,"p-label","p-selected"],[1,"po-row","po-p-1"],[1,"po-row","po-p-2"],[1,"po-mr-1",3,"p-selected-change","p-label","p-selected"],[1,"po-font-text-bold","po-mr-1"],[1,"po-font-text-small"],[1,"po-font-text"]],template:function(o,l){o&1&&(Tl(0,"div",0)(1,"div",1)(2,"p",2),tN(3,"Filter by category:"),sg(),Tl(4,"div",3),mx(5,xe,1,2,"po-filter-chip",4,Ee),sg()()(),Gl(7,"po-divider"),Tl(8,"div",0)(9,"div",1)(10,"p",2),tN(11),sg(),Tl(12,"po-container"),mx(13,Fe,5,2,"div",5,ve,false,ye,3,0,"div",6),sg()()()),o&2&&(Vp(5),vx(l.filters),Vp(6),fg("Products (",l.filteredProducts.length,"):"),Vp(2),vx(l.filteredProducts));},dependencies:[dc,mv,nme],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Filter Chip - Filter List"),sg(),Tl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-filter-chip-filter-list"),sg(),Gl(23,"hr")),o&2&&(Vp(5),zx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,we,l.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,de],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-doc"]],standalone:false,decls:390,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#listbox"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","undefined"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"]],template:function(o,l){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFilterChipModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente "),Tl(7,"code"),tN(8,"po-filter-chip"),sg(),tN(9,"."),sg()(),Tl(10,"h3",3),tN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),tN(14,"PoFilterChipComponent"),sg()(),Tl(15,"div",2)(16,"p"),tN(17,"O "),Tl(18,"code"),tN(19,"po-filter-chip"),sg(),tN(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),sg(),Tl(21,"h4"),tN(22,"Boas pr\xE1ticas"),sg(),Tl(23,"ul")(24,"li"),tN(25,"Utilize "),Tl(26,"code"),tN(27,"labels"),sg(),tN(28," curtos e descritivos para os filtros."),sg(),Tl(29,"li"),tN(30,"Agrupe m\xFAltiplos "),Tl(31,"code"),tN(32,"po-filter-chip"),sg(),tN(33," para representar op\xE7\xF5es de filtragem relacionadas."),sg(),Tl(34,"li"),tN(35,"Utilize a propriedade "),Tl(36,"code"),tN(37,"p-disabled"),sg(),tN(38," para filtros temporariamente indispon\xEDveis."),sg()(),Tl(39,"h4"),tN(40,"Acessibilidade tratada no componente"),sg(),Tl(41,"p"),tN(42,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Tl(43,"ul")(44,"li"),tN(45,"O componente possui "),Tl(46,"code"),tN(47,'role="option"'),sg(),tN(48," e "),Tl(49,"code"),tN(50,"aria-selected"),sg(),tN(51," refletindo o estado de sele\xE7\xE3o. "),Tl(52,"a",6),tN(53,"W3C WAI-ARIA 3.14 Listbox"),sg()(),Tl(54,"li"),tN(55,"Quando em foco, o chip \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Tl(56,"a",7),tN(57,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),sg()()(),Tl(58,"h4"),tN(59,"Tokens customiz\xE1veis"),sg(),Tl(60,"p"),tN(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(62,"blockquote")(63,"p"),tN(64,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(65,"a",8),tN(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(67,"."),sg()(),Tl(68,"table")(69,"thead")(70,"tr")(71,"th"),tN(72,"Propriedade"),sg(),Tl(73,"th"),tN(74,"Descri\xE7\xE3o"),sg(),Tl(75,"th"),tN(76,"Valor Padr\xE3o"),sg()()(),Tl(77,"tbody")(78,"tr")(79,"td")(80,"code"),tN(81,"--border-radius"),sg()(),Tl(82,"td"),tN(83,"Raio dos cantos do elemento"),sg(),Tl(84,"td")(85,"code"),tN(86,"var(--border-radius-lg)"),sg()()(),Tl(87,"tr")(88,"td")(89,"code"),tN(90,"--border-width"),sg()(),Tl(91,"td"),tN(92,"Largura da borda"),sg(),Tl(93,"td")(94,"code"),tN(95,"var(--border-width-sm)"),sg()()(),Tl(96,"tr")(97,"td")(98,"code"),tN(99,"--font-family"),sg()(),Tl(100,"td"),tN(101,"Fam\xEDlia tipogr\xE1fica"),sg(),Tl(102,"td")(103,"code"),tN(104,"var(--font-family-theme)"),sg()()(),Tl(105,"tr")(106,"td")(107,"code"),tN(108,"--font-size"),sg()(),Tl(109,"td"),tN(110,"Tamanho da fonte"),sg(),Tl(111,"td")(112,"code"),tN(113,"var(--font-size-default)"),sg()()(),Tl(114,"tr")(115,"td")(116,"code"),tN(117,"--font-weight"),sg()(),Tl(118,"td"),tN(119,"Peso da fonte"),sg(),Tl(120,"td")(121,"code"),tN(122,"var(--font-weight-normal)"),sg()()(),Tl(123,"tr")(124,"td")(125,"strong"),tN(126,"Default"),sg()(),Gl(127,"td")(128,"td"),sg(),Tl(129,"tr")(130,"td")(131,"code"),tN(132,"--border-color"),sg()(),Tl(133,"td"),tN(134,"Cor da borda no estado padr\xE3o"),sg(),Tl(135,"td")(136,"code"),tN(137,"var(--color-neutral-light-20)"),sg()()(),Tl(138,"tr")(139,"td")(140,"code"),tN(141,"--text-color"),sg()(),Tl(142,"td"),tN(143,"Cor do texto no estado padr\xE3o"),sg(),Tl(144,"td")(145,"code"),tN(146,"var(--color-neutral-dark-80)"),sg()()(),Tl(147,"tr")(148,"td")(149,"code"),tN(150,"--background-color"),sg()(),Tl(151,"td"),tN(152,"Cor de fundo no estado padr\xE3o"),sg(),Tl(153,"td")(154,"code"),tN(155,"transparent"),sg()()(),Tl(156,"tr")(157,"td")(158,"strong"),tN(159,"Hover"),sg()(),Gl(160,"td")(161,"td"),sg(),Tl(162,"tr")(163,"td")(164,"code"),tN(165,"--background-color-hover"),sg()(),Tl(166,"td"),tN(167,"Cor de fundo no estado hover"),sg(),Tl(168,"td")(169,"code"),tN(170,"var(--color-brand-01-lightest)"),sg()()(),Tl(171,"tr")(172,"td")(173,"code"),tN(174,"--text-color-hover"),sg()(),Tl(175,"td"),tN(176,"Cor do texto no estado hover"),sg(),Tl(177,"td")(178,"code"),tN(179,"var(--color-action-default)"),sg()()(),Tl(180,"tr")(181,"td")(182,"strong"),tN(183,"Selected"),sg()(),Gl(184,"td")(185,"td"),sg(),Tl(186,"tr")(187,"td")(188,"code"),tN(189,"--background-color-selected"),sg()(),Tl(190,"td"),tN(191,"Cor de fundo no estado selecionado"),sg(),Tl(192,"td")(193,"code"),tN(194,"var(--color-brand-01-lightest)"),sg()()(),Tl(195,"tr")(196,"td")(197,"code"),tN(198,"--border-color-selected"),sg()(),Tl(199,"td"),tN(200,"Cor da borda no estado selecionado"),sg(),Tl(201,"td")(202,"code"),tN(203,"var(--color-brand-01-lighter)"),sg()()(),Tl(204,"tr")(205,"td")(206,"code"),tN(207,"--text-color-selected"),sg()(),Tl(208,"td"),tN(209,"Cor do texto no estado selecionado"),sg(),Tl(210,"td")(211,"code"),tN(212,"var(--color-action-default)"),sg()()(),Tl(213,"tr")(214,"td")(215,"code"),tN(216,"--icon-color-selected"),sg()(),Tl(217,"td"),tN(218,"Cor do \xEDcone no estado selecionado"),sg(),Tl(219,"td")(220,"code"),tN(221,"var(--color-action-default)"),sg()()(),Tl(222,"tr")(223,"td")(224,"strong"),tN(225,"Disabled"),sg()(),Gl(226,"td")(227,"td"),sg(),Tl(228,"tr")(229,"td")(230,"code"),tN(231,"--opacity-disabled"),sg()(),Tl(232,"td"),tN(233,"Opacidade no estado desabilitado"),sg(),Tl(234,"td")(235,"code"),tN(236,"0.5"),sg()()()()()(),Tl(237,"div",9)(238,"h4",10),tN(239,"Seletor"),sg(),Tl(240,"pre",11),tN(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),sg()(),Tl(242,"h4",12),tN(243,"Propriedades"),sg(),Tl(244,"table",13)(245,"tr",14)(246,"th",15),tN(247,"Nome"),sg(),Tl(248,"th",15),tN(249,"Tipo"),sg(),Tl(250,"th",15),tN(251,"Padr\xE3o"),sg(),Tl(252,"th",15),tN(253,"Descri\xE7\xE3o"),sg()(),Tl(254,"tr",16)(255,"td",17)(256,"div",18)(257,"span",19),tN(258," p-disabled"),Gl(259,"br"),sg()()(),Tl(260,"td",20)(261,"code",21),tN(262,"boolean"),sg()(),Tl(263,"td",22)(264,"p")(265,"code"),tN(266,"false"),sg()()(),Tl(267,"td",23)(268,"em")(269,"strong"),tN(270,"(opcional)"),sg()(),Tl(271,"p"),tN(272,"Define se o chip est\xE1 desabilitado, impedindo qualquer intera\xE7\xE3o do usu\xE1rio."),sg(),Tl(273,"p"),tN(274,"Quando habilitado, o chip n\xE3o responde a cliques nem a eventos de teclado (Enter/Space)."),sg()()(),Tl(275,"tr",16)(276,"td",17)(277,"div",18)(278,"span",19),tN(279," p-label"),Gl(280,"br"),sg()()(),Tl(281,"td",20)(282,"code",24),tN(283,"string "),sg(),Tl(284,"code",25),tN(285," undefined"),sg()(),Tl(286,"td",22),tN(287,"-"),sg(),Tl(288,"td",23)(289,"em")(290,"strong"),tN(291,"(opcional)"),sg()(),Tl(292,"p"),tN(293,"Define o r\xF3tulo de texto exibido no chip."),sg()()(),Tl(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),tN(298," p-selected"),Gl(299,"br"),sg()()(),Tl(300,"td",20)(301,"code",21),tN(302,"boolean"),sg()(),Tl(303,"td",22)(304,"p")(305,"code"),tN(306,"false"),sg()()(),Tl(307,"td",23)(308,"em")(309,"strong"),tN(310,"(opcional)"),sg()(),Tl(311,"p"),tN(312,"Define o estado de sele\xE7\xE3o do chip."),sg()()(),Tl(313,"tr",16)(314,"td",17)(315,"div",26)(316,"span",27),tN(317," (p-selected-change)"),Gl(318,"br"),sg()()(),Tl(319,"td",20)(320,"code",28),tN(321,"EventEmitter"),sg()(),Tl(322,"td",22),tN(323,"-"),sg(),Tl(324,"td",23)(325,"em")(326,"strong"),tN(327,"(opcional)"),sg()(),Tl(328,"p"),tN(329,"Evento disparado ap\xF3s a altera\xE7\xE3o do estado de sele\xE7\xE3o do "),Tl(330,"em"),tN(331,"chip"),sg(),tN(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),sg()()()(),Tl(333,"h3"),tN(334,"Interfaces"),sg(),Tl(335,"h4",29)(336,"code",5),tN(337,"PoFilterChipSelectedChange"),sg()(),Tl(338,"div",2)(339,"p"),tN(340,"Interface que define o objeto emitido pelo evento "),Tl(341,"code"),tN(342,"p-selected-change"),sg(),tN(343,"."),sg()(),Tl(344,"h4",12),tN(345,"Propriedades"),sg(),Tl(346,"table",13)(347,"tr",14)(348,"th",15),tN(349,"Nome"),sg(),Tl(350,"th",15),tN(351,"Tipo"),sg(),Tl(352,"th",15),tN(353,"Descri\xE7\xE3o"),sg()(),Tl(354,"tr",16)(355,"td",17)(356,"div",18)(357,"span",19),tN(358," label"),Gl(359,"br"),sg()()(),Tl(360,"td",20)(361,"code",24),tN(362,"string"),sg()(),Tl(363,"td",23)(364,"p"),tN(365,"R\xF3tulo de texto do "),Tl(366,"em"),tN(367,"chip"),sg(),tN(368,"."),sg()()(),Tl(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),tN(373," selected"),Gl(374,"br"),sg()()(),Tl(375,"td",20)(376,"code",21),tN(377,"boolean"),sg()(),Tl(378,"td",23)(379,"p"),tN(380,"Estado de sele\xE7\xE3o do "),Tl(381,"em"),tN(382,"chip"),sg(),tN(383," ("),Tl(384,"code"),tN(385,"true"),sg(),tN(386," para selecionado, "),Tl(387,"code"),tN(388,"false"),sg(),tN(389," para desmarcado)."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Filter Chip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Gl(3,"sample-po-filter-chip-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),Gl(5,"sample-po-filter-chip-basic-view")(6,"sample-po-filter-chip-labs-view")(7,"sample-po-filter-chip-filter-list-view"),sg()()()),o&2&&(tw("p-actions",l.actions),Vp(2),tw("p-active",l.activeTab==="doc"),Vp(2),tw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ae,pe,se,me],encapsulation:2})}return n})();var De=[{path:"",component:ce}],he=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[vL.forChild(De),vL]})}return n})();var et=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[ar,he]})}return n})();export{et as DocPoFilterChipModule};