import {f as fe$1,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,da as rme,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,b4 as O3,bH as M3,c9 as Yhe,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,aI as dc,aQ as _x,aS as Dx,a3 as lNe,J as yw,aD as Ky,aT as sN,aE as Xy,aA as Nx}from'./main-56B5DD5U.js';var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Filter"]],template:function(o,l){o&1&&Gl(0,"po-filter-chip",0);},dependencies:[rme],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Filter Chip Basic"),sg(),Tl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-filter-chip-basic"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,fe,l.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,oe],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore();}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event="p-selected-change";}restore(){this.label="Filter",this.selected=false,this.disabled=false,this.event="",this.model="";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs"]],standalone:false,decls:16,vars:8,consts:[["f","ngForm"],[1,"po-row"],[3,"p-selected-change","p-label","p-selected","p-disabled"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selected","p-label","Selected",1,"po-md-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,l){if(o&1){let h=Sx();Tl(0,"div",1)(1,"po-filter-chip",2),ht("p-selected-change",function(c){return l.onSelectedChange(c)}),sg()(),Gl(2,"po-divider"),Tl(3,"div",1),Gl(4,"po-info",3)(5,"po-info",4),sg(),Gl(6,"po-divider"),Tl(7,"form",null,0)(9,"div",1)(10,"po-input",5),ww("ngModelChange",function(c){return Ky(h),sN(l.label,c)||(l.label=c),Xy(c)}),sg(),r0(),sg(),Tl(11,"div",1)(12,"po-switch",6),ww("ngModelChange",function(c){return Ky(h),sN(l.selected,c)||(l.selected=c),Xy(c)}),sg(),r0(),Tl(13,"po-switch",7),ww("ngModelChange",function(c){return Ky(h),sN(l.disabled,c)||(l.disabled=c),Xy(c)}),sg(),r0(),sg(),Tl(14,"div",1)(15,"po-button",8),ht("p-click",function(){return l.restore()}),sg()()();}o&2&&(Vp(),nw("p-label",l.label)("p-selected",l.selected)("p-disabled",l.disabled),Vp(3),nw("p-value",l.model),Vp(),nw("p-value",l.event),Vp(5),Ew("ngModel",l.label),o0(),Vp(2),Ew("ngModel",l.selected),o0(),Vp(),Ew("ngModel",l.disabled),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,O3,M3,rme,Yhe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Filter Chip Labs"),sg(),Tl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-filter-chip-labs"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Se,l.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,re],encapsulation:2,changeDetection:1})}return n})();var Ee=(n,b)=>b.label,ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=Sx();Tl(0,"po-filter-chip",7),ht("p-selected-change",function(l){Ky(a);let h=Nx();return Xy(h.onFilterChange(l))}),sg();}if(n&2){let a=b.$implicit;nw("p-label",a.label)("p-selected",a.selected);}}function Fe(n,b){if(n&1&&(Tl(0,"div",5)(1,"span",8),iN(2),sg(),Tl(3,"span",9),iN(4),sg()()),n&2){let a=b.$implicit;Vp(2),yw(a.name),Vp(2),fg("(",a.category,")");}}function ye(n,b){n&1&&(Tl(0,"div",6)(1,"span",10),iN(2,"No products found."),sg()());}var de=(()=>{class n{filters=[{label:"Electronics",selected:false},{label:"Clothing",selected:false},{label:"Books",selected:false},{label:"Sports",selected:false}];products=[{name:"Laptop",category:"Electronics"},{name:"Smartphone",category:"Electronics"},{name:"T-Shirt",category:"Clothing"},{name:"Sneakers",category:"Clothing"},{name:"Novel",category:"Books"},{name:"Cookbook",category:"Books"},{name:"Basketball",category:"Sports"},{name:"Tennis Racket",category:"Sports"}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected);}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list"]],standalone:false,decls:16,vars:2,consts:[[1,"po-row"],[1,"po-md-12"],[1,"po-font-subtitle"],[1,"po-mt-1"],[1,"po-mr-1",3,"p-label","p-selected"],[1,"po-row","po-p-1"],[1,"po-row","po-p-2"],[1,"po-mr-1",3,"p-selected-change","p-label","p-selected"],[1,"po-font-text-bold","po-mr-1"],[1,"po-font-text-small"],[1,"po-font-text"]],template:function(o,l){o&1&&(Tl(0,"div",0)(1,"div",1)(2,"p",2),iN(3,"Filter by category:"),sg(),Tl(4,"div",3),_x(5,xe,1,2,"po-filter-chip",4,Ee),sg()()(),Gl(7,"po-divider"),Tl(8,"div",0)(9,"div",1)(10,"p",2),iN(11),sg(),Tl(12,"po-container"),_x(13,Fe,5,2,"div",5,ve,false,ye,3,0,"div",6),sg()()()),o&2&&(Vp(5),Dx(l.filters),Vp(6),fg("Products (",l.filteredProducts.length,"):"),Vp(2),Dx(l.filteredProducts));},dependencies:[dc,mv,rme],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Filter Chip - Filter List"),sg(),Tl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-filter-chip-filter-list"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,we,l.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,de],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-doc"]],standalone:false,decls:390,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#listbox"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","undefined"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"]],template:function(o,l){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFilterChipModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente "),Tl(7,"code"),iN(8,"po-filter-chip"),sg(),iN(9,"."),sg()(),Tl(10,"h3",3),iN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),iN(14,"PoFilterChipComponent"),sg()(),Tl(15,"div",2)(16,"p"),iN(17,"O "),Tl(18,"code"),iN(19,"po-filter-chip"),sg(),iN(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),sg(),Tl(21,"h4"),iN(22,"Boas pr\xE1ticas"),sg(),Tl(23,"ul")(24,"li"),iN(25,"Utilize "),Tl(26,"code"),iN(27,"labels"),sg(),iN(28," curtos e descritivos para os filtros."),sg(),Tl(29,"li"),iN(30,"Agrupe m\xFAltiplos "),Tl(31,"code"),iN(32,"po-filter-chip"),sg(),iN(33," para representar op\xE7\xF5es de filtragem relacionadas."),sg(),Tl(34,"li"),iN(35,"Utilize a propriedade "),Tl(36,"code"),iN(37,"p-disabled"),sg(),iN(38," para filtros temporariamente indispon\xEDveis."),sg()(),Tl(39,"h4"),iN(40,"Acessibilidade tratada no componente"),sg(),Tl(41,"p"),iN(42,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Tl(43,"ul")(44,"li"),iN(45,"O componente possui "),Tl(46,"code"),iN(47,'role="option"'),sg(),iN(48," e "),Tl(49,"code"),iN(50,"aria-selected"),sg(),iN(51," refletindo o estado de sele\xE7\xE3o. "),Tl(52,"a",6),iN(53,"W3C WAI-ARIA 3.14 Listbox"),sg()(),Tl(54,"li"),iN(55,"Quando em foco, o chip \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Tl(56,"a",7),iN(57,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),sg()()(),Tl(58,"h4"),iN(59,"Tokens customiz\xE1veis"),sg(),Tl(60,"p"),iN(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(62,"blockquote")(63,"p"),iN(64,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(65,"a",8),iN(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(67,"."),sg()(),Tl(68,"table")(69,"thead")(70,"tr")(71,"th"),iN(72,"Propriedade"),sg(),Tl(73,"th"),iN(74,"Descri\xE7\xE3o"),sg(),Tl(75,"th"),iN(76,"Valor Padr\xE3o"),sg()()(),Tl(77,"tbody")(78,"tr")(79,"td")(80,"code"),iN(81,"--border-radius"),sg()(),Tl(82,"td"),iN(83,"Raio dos cantos do elemento"),sg(),Tl(84,"td")(85,"code"),iN(86,"var(--border-radius-lg)"),sg()()(),Tl(87,"tr")(88,"td")(89,"code"),iN(90,"--border-width"),sg()(),Tl(91,"td"),iN(92,"Largura da borda"),sg(),Tl(93,"td")(94,"code"),iN(95,"var(--border-width-sm)"),sg()()(),Tl(96,"tr")(97,"td")(98,"code"),iN(99,"--font-family"),sg()(),Tl(100,"td"),iN(101,"Fam\xEDlia tipogr\xE1fica"),sg(),Tl(102,"td")(103,"code"),iN(104,"var(--font-family-theme)"),sg()()(),Tl(105,"tr")(106,"td")(107,"code"),iN(108,"--font-size"),sg()(),Tl(109,"td"),iN(110,"Tamanho da fonte"),sg(),Tl(111,"td")(112,"code"),iN(113,"var(--font-size-default)"),sg()()(),Tl(114,"tr")(115,"td")(116,"code"),iN(117,"--font-weight"),sg()(),Tl(118,"td"),iN(119,"Peso da fonte"),sg(),Tl(120,"td")(121,"code"),iN(122,"var(--font-weight-normal)"),sg()()(),Tl(123,"tr")(124,"td")(125,"strong"),iN(126,"Default"),sg()(),Gl(127,"td")(128,"td"),sg(),Tl(129,"tr")(130,"td")(131,"code"),iN(132,"--border-color"),sg()(),Tl(133,"td"),iN(134,"Cor da borda no estado padr\xE3o"),sg(),Tl(135,"td")(136,"code"),iN(137,"var(--color-neutral-light-20)"),sg()()(),Tl(138,"tr")(139,"td")(140,"code"),iN(141,"--text-color"),sg()(),Tl(142,"td"),iN(143,"Cor do texto no estado padr\xE3o"),sg(),Tl(144,"td")(145,"code"),iN(146,"var(--color-neutral-dark-80)"),sg()()(),Tl(147,"tr")(148,"td")(149,"code"),iN(150,"--background-color"),sg()(),Tl(151,"td"),iN(152,"Cor de fundo no estado padr\xE3o"),sg(),Tl(153,"td")(154,"code"),iN(155,"transparent"),sg()()(),Tl(156,"tr")(157,"td")(158,"strong"),iN(159,"Hover"),sg()(),Gl(160,"td")(161,"td"),sg(),Tl(162,"tr")(163,"td")(164,"code"),iN(165,"--background-color-hover"),sg()(),Tl(166,"td"),iN(167,"Cor de fundo no estado hover"),sg(),Tl(168,"td")(169,"code"),iN(170,"var(--color-brand-01-lightest)"),sg()()(),Tl(171,"tr")(172,"td")(173,"code"),iN(174,"--text-color-hover"),sg()(),Tl(175,"td"),iN(176,"Cor do texto no estado hover"),sg(),Tl(177,"td")(178,"code"),iN(179,"var(--color-action-default)"),sg()()(),Tl(180,"tr")(181,"td")(182,"strong"),iN(183,"Selected"),sg()(),Gl(184,"td")(185,"td"),sg(),Tl(186,"tr")(187,"td")(188,"code"),iN(189,"--background-color-selected"),sg()(),Tl(190,"td"),iN(191,"Cor de fundo no estado selecionado"),sg(),Tl(192,"td")(193,"code"),iN(194,"var(--color-brand-01-lightest)"),sg()()(),Tl(195,"tr")(196,"td")(197,"code"),iN(198,"--border-color-selected"),sg()(),Tl(199,"td"),iN(200,"Cor da borda no estado selecionado"),sg(),Tl(201,"td")(202,"code"),iN(203,"var(--color-brand-01-lighter)"),sg()()(),Tl(204,"tr")(205,"td")(206,"code"),iN(207,"--text-color-selected"),sg()(),Tl(208,"td"),iN(209,"Cor do texto no estado selecionado"),sg(),Tl(210,"td")(211,"code"),iN(212,"var(--color-action-default)"),sg()()(),Tl(213,"tr")(214,"td")(215,"code"),iN(216,"--icon-color-selected"),sg()(),Tl(217,"td"),iN(218,"Cor do \xEDcone no estado selecionado"),sg(),Tl(219,"td")(220,"code"),iN(221,"var(--color-action-default)"),sg()()(),Tl(222,"tr")(223,"td")(224,"strong"),iN(225,"Disabled"),sg()(),Gl(226,"td")(227,"td"),sg(),Tl(228,"tr")(229,"td")(230,"code"),iN(231,"--opacity-disabled"),sg()(),Tl(232,"td"),iN(233,"Opacidade no estado desabilitado"),sg(),Tl(234,"td")(235,"code"),iN(236,"0.5"),sg()()()()()(),Tl(237,"div",9)(238,"h4",10),iN(239,"Seletor"),sg(),Tl(240,"pre",11),iN(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),sg()(),Tl(242,"h4",12),iN(243,"Propriedades"),sg(),Tl(244,"table",13)(245,"tr",14)(246,"th",15),iN(247,"Nome"),sg(),Tl(248,"th",15),iN(249,"Tipo"),sg(),Tl(250,"th",15),iN(251,"Padr\xE3o"),sg(),Tl(252,"th",15),iN(253,"Descri\xE7\xE3o"),sg()(),Tl(254,"tr",16)(255,"td",17)(256,"div",18)(257,"span",19),iN(258," p-disabled"),Gl(259,"br"),sg()()(),Tl(260,"td",20)(261,"code",21),iN(262,"boolean"),sg()(),Tl(263,"td",22)(264,"p")(265,"code"),iN(266,"false"),sg()()(),Tl(267,"td",23)(268,"em")(269,"strong"),iN(270,"(opcional)"),sg()(),Tl(271,"p"),iN(272,"Define se o chip est\xE1 desabilitado, impedindo qualquer intera\xE7\xE3o do usu\xE1rio."),sg(),Tl(273,"p"),iN(274,"Quando habilitado, o chip n\xE3o responde a cliques nem a eventos de teclado (Enter/Space)."),sg()()(),Tl(275,"tr",16)(276,"td",17)(277,"div",18)(278,"span",19),iN(279," p-label"),Gl(280,"br"),sg()()(),Tl(281,"td",20)(282,"code",24),iN(283,"string "),sg(),Tl(284,"code",25),iN(285," undefined"),sg()(),Tl(286,"td",22),iN(287,"-"),sg(),Tl(288,"td",23)(289,"em")(290,"strong"),iN(291,"(opcional)"),sg()(),Tl(292,"p"),iN(293,"Define o r\xF3tulo de texto exibido no chip."),sg()()(),Tl(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),iN(298," p-selected"),Gl(299,"br"),sg()()(),Tl(300,"td",20)(301,"code",21),iN(302,"boolean"),sg()(),Tl(303,"td",22)(304,"p")(305,"code"),iN(306,"false"),sg()()(),Tl(307,"td",23)(308,"em")(309,"strong"),iN(310,"(opcional)"),sg()(),Tl(311,"p"),iN(312,"Define o estado de sele\xE7\xE3o do chip."),sg()()(),Tl(313,"tr",16)(314,"td",17)(315,"div",26)(316,"span",27),iN(317," (p-selected-change)"),Gl(318,"br"),sg()()(),Tl(319,"td",20)(320,"code",28),iN(321,"EventEmitter"),sg()(),Tl(322,"td",22),iN(323,"-"),sg(),Tl(324,"td",23)(325,"em")(326,"strong"),iN(327,"(opcional)"),sg()(),Tl(328,"p"),iN(329,"Evento disparado ap\xF3s a altera\xE7\xE3o do estado de sele\xE7\xE3o do "),Tl(330,"em"),iN(331,"chip"),sg(),iN(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),sg()()()(),Tl(333,"h3"),iN(334,"Interfaces"),sg(),Tl(335,"h4",29)(336,"code",5),iN(337,"PoFilterChipSelectedChange"),sg()(),Tl(338,"div",2)(339,"p"),iN(340,"Interface que define o objeto emitido pelo evento "),Tl(341,"code"),iN(342,"p-selected-change"),sg(),iN(343,"."),sg()(),Tl(344,"h4",12),iN(345,"Propriedades"),sg(),Tl(346,"table",13)(347,"tr",14)(348,"th",15),iN(349,"Nome"),sg(),Tl(350,"th",15),iN(351,"Tipo"),sg(),Tl(352,"th",15),iN(353,"Descri\xE7\xE3o"),sg()(),Tl(354,"tr",16)(355,"td",17)(356,"div",18)(357,"span",19),iN(358," label"),Gl(359,"br"),sg()()(),Tl(360,"td",20)(361,"code",24),iN(362,"string"),sg()(),Tl(363,"td",23)(364,"p"),iN(365,"R\xF3tulo de texto do "),Tl(366,"em"),iN(367,"chip"),sg(),iN(368,"."),sg()()(),Tl(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),iN(373," selected"),Gl(374,"br"),sg()()(),Tl(375,"td",20)(376,"code",21),iN(377,"boolean"),sg()(),Tl(378,"td",23)(379,"p"),iN(380,"Estado de sele\xE7\xE3o do "),Tl(381,"em"),iN(382,"chip"),sg(),iN(383," ("),Tl(384,"code"),iN(385,"true"),sg(),iN(386," para selecionado, "),Tl(387,"code"),iN(388,"false"),sg(),iN(389," para desmarcado)."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Filter Chip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Gl(3,"sample-po-filter-chip-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),Gl(5,"sample-po-filter-chip-basic-view")(6,"sample-po-filter-chip-labs-view")(7,"sample-po-filter-chip-filter-list-view"),sg()()()),o&2&&(nw("p-actions",l.actions),Vp(2),nw("p-active",l.activeTab==="doc"),Vp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[lNe,Wme,jme,ae,pe,se,me],encapsulation:2,changeDetection:1})}return n})();var De=[{path:"",component:ce}],he=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[DL.forChild(De),DL]})}return n})();var et=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[ar,he]})}return n})();export{et as DocPoFilterChipModule};