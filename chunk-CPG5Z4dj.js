import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,cG as Wp,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,aO as Yo,bd as na,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,ah as uo,av as nx,ay as rx,a3 as D3,F as uw,az as Qy,aB as $x,aA as Jy,ax as gx}from'./main-6SPFG3VI.js';var ae=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Filter"]],template:function(o,l){o&1&&Ul(0,"po-filter-chip",0);},dependencies:[Wp],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Filter Chip Basic"),ng(),wl(4,"a",2),ut("click",function(){return l.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-filter-chip-basic"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+l.sampleCodeButtonIcon),Pp(),cg(" ",l.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ce,l.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ae],encapsulation:2})}return n})();var de=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore();}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event="p-selected-change";}restore(){this.label="Filter",this.selected=false,this.disabled=false,this.event="",this.model="";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs"]],standalone:false,decls:16,vars:8,consts:[["f","ngForm"],[1,"po-row"],[3,"p-selected-change","p-label","p-selected","p-disabled"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selected","p-label","Selected",1,"po-md-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,l){if(o&1){let h=lx();wl(0,"div",1)(1,"po-filter-chip",2),ut("p-selected-change",function(c){return l.onSelectedChange(c)}),ng()(),Ul(2,"po-divider"),wl(3,"div",1),Ul(4,"po-info",3)(5,"po-info",4),ng(),Ul(6,"po-divider"),wl(7,"form",null,0)(9,"div",1)(10,"po-input",5),pw("ngModelChange",function(c){return Qy(h),$x(l.label,c)||(l.label=c),Jy(c)}),ng(),$0(),ng(),wl(11,"div",1)(12,"po-switch",6),pw("ngModelChange",function(c){return Qy(h),$x(l.selected,c)||(l.selected=c),Jy(c)}),ng(),$0(),wl(13,"po-switch",7),pw("ngModelChange",function(c){return Qy(h),$x(l.disabled,c)||(l.disabled=c),Jy(c)}),ng(),$0(),ng(),wl(14,"div",1)(15,"po-button",8),ut("p-click",function(){return l.restore()}),ng()()();}o&2&&(Pp(),YE("p-label",l.label)("p-selected",l.selected)("p-disabled",l.disabled),Pp(3),YE("p-value",l.model),Pp(),YE("p-value",l.event),Pp(5),hw("ngModel",l.label),G0(),Pp(2),hw("ngModel",l.selected),G0(),Pp(),hw("ngModel",l.disabled),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,Yo,na,Wp,Vp],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Filter Chip Labs"),ng(),wl(4,"a",2),ut("click",function(){return l.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-filter-chip-labs"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+l.sampleCodeButtonIcon),Pp(),cg(" ",l.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ve,l.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,de],encapsulation:2})}return n})();var Fe=(n,b)=>b.label,ye=(n,b)=>b.name;function Pe(n,b){if(n&1){let a=lx();wl(0,"po-filter-chip",7),ut("p-selected-change",function(l){Qy(a);let h=gx();return Jy(h.onFilterChange(l))}),ng();}if(n&2){let a=b.$implicit;YE("p-label",a.label)("p-selected",a.selected);}}function we(n,b){if(n&1&&(wl(0,"div",5)(1,"span",8),Ux(2),ng(),wl(3,"span",9),Ux(4),ng()()),n&2){let a=b.$implicit;Pp(2),uw(a.name),Pp(2),cg("(",a.category,")");}}function _e(n,b){n&1&&(wl(0,"div",6)(1,"span",10),Ux(2,"No products found."),ng()());}var me=(()=>{class n{filters=[{label:"Electronics",selected:false},{label:"Clothing",selected:false},{label:"Books",selected:false},{label:"Sports",selected:false}];products=[{name:"Laptop",category:"Electronics"},{name:"Smartphone",category:"Electronics"},{name:"T-Shirt",category:"Clothing"},{name:"Sneakers",category:"Clothing"},{name:"Novel",category:"Books"},{name:"Cookbook",category:"Books"},{name:"Basketball",category:"Sports"},{name:"Tennis Racket",category:"Sports"}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected);}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list"]],standalone:false,decls:16,vars:2,consts:[[1,"po-row"],[1,"po-md-12"],[1,"po-font-subtitle"],[1,"po-mt-1"],[1,"po-mr-1",3,"p-label","p-selected"],[1,"po-row","po-p-1"],[1,"po-row","po-p-2"],[1,"po-mr-1",3,"p-selected-change","p-label","p-selected"],[1,"po-font-text-bold","po-mr-1"],[1,"po-font-text-small"],[1,"po-font-text"]],template:function(o,l){o&1&&(wl(0,"div",0)(1,"div",1)(2,"p",2),Ux(3,"Filter by category:"),ng(),wl(4,"div",3),nx(5,Pe,1,2,"po-filter-chip",4,Fe),ng()()(),Ul(7,"po-divider"),wl(8,"div",0)(9,"div",1)(10,"p",2),Ux(11),ng(),wl(12,"po-container"),nx(13,we,5,2,"div",5,ye,false,_e,3,0,"div",6),ng()()()),o&2&&(Pp(5),rx(l.filters),Pp(6),cg("Products (",l.filteredProducts.length,"):"),Pp(2),rx(l.filteredProducts));},dependencies:[uo,di,Wp],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Filter Chip - Filter List"),ng(),wl(4,"a",2),ut("click",function(){return l.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-filter-chip-filter-list"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+l.sampleCodeButtonIcon),Pp(),cg(" ",l.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,De,l.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,me],encapsulation:2})}return n})();var he=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-doc"]],standalone:false,decls:390,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#listbox"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","undefined"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"]],template:function(o,l){o&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFilterChipModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-filter-chip"),ng(),Ux(9,"."),ng()(),wl(10,"h3",3),Ux(11,"Componente"),ng(),wl(12,"h4",4)(13,"code",5),Ux(14,"PoFilterChipComponent"),ng()(),wl(15,"div",2)(16,"p"),Ux(17,"O "),wl(18,"code"),Ux(19,"po-filter-chip"),ng(),Ux(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),ng(),wl(21,"h4"),Ux(22,"Boas pr\xE1ticas"),ng(),wl(23,"ul")(24,"li"),Ux(25,"Utilize "),wl(26,"code"),Ux(27,"labels"),ng(),Ux(28," curtos e descritivos para os filtros."),ng(),wl(29,"li"),Ux(30,"Agrupe m\xFAltiplos "),wl(31,"code"),Ux(32,"po-filter-chip"),ng(),Ux(33," para representar op\xE7\xF5es de filtragem relacionadas."),ng(),wl(34,"li"),Ux(35,"Utilize a propriedade "),wl(36,"code"),Ux(37,"p-disabled"),ng(),Ux(38," para filtros temporariamente indispon\xEDveis."),ng()(),wl(39,"h4"),Ux(40,"Acessibilidade tratada no componente"),ng(),wl(41,"p"),Ux(42,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),ng(),wl(43,"ul")(44,"li"),Ux(45,"O componente possui "),wl(46,"code"),Ux(47,'role="option"'),ng(),Ux(48," e "),wl(49,"code"),Ux(50,"aria-selected"),ng(),Ux(51," refletindo o estado de sele\xE7\xE3o. "),wl(52,"a",6),Ux(53,"W3C WAI-ARIA 3.14 Listbox"),ng()(),wl(54,"li"),Ux(55,"Quando em foco, o chip \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),wl(56,"a",7),Ux(57,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),ng()()(),wl(58,"h4"),Ux(59,"Tokens customiz\xE1veis"),ng(),wl(60,"p"),Ux(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(62,"blockquote")(63,"p"),Ux(64,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(65,"a",8),Ux(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(67,"."),ng()(),wl(68,"table")(69,"thead")(70,"tr")(71,"th"),Ux(72,"Propriedade"),ng(),wl(73,"th"),Ux(74,"Descri\xE7\xE3o"),ng(),wl(75,"th"),Ux(76,"Valor Padr\xE3o"),ng()()(),wl(77,"tbody")(78,"tr")(79,"td")(80,"code"),Ux(81,"--border-radius"),ng()(),wl(82,"td"),Ux(83,"Raio dos cantos do elemento"),ng(),wl(84,"td")(85,"code"),Ux(86,"var(--border-radius-lg)"),ng()()(),wl(87,"tr")(88,"td")(89,"code"),Ux(90,"--border-width"),ng()(),wl(91,"td"),Ux(92,"Largura da borda"),ng(),wl(93,"td")(94,"code"),Ux(95,"var(--border-width-sm)"),ng()()(),wl(96,"tr")(97,"td")(98,"code"),Ux(99,"--font-family"),ng()(),wl(100,"td"),Ux(101,"Fam\xEDlia tipogr\xE1fica"),ng(),wl(102,"td")(103,"code"),Ux(104,"var(--font-family-theme)"),ng()()(),wl(105,"tr")(106,"td")(107,"code"),Ux(108,"--font-size"),ng()(),wl(109,"td"),Ux(110,"Tamanho da fonte"),ng(),wl(111,"td")(112,"code"),Ux(113,"var(--font-size-default)"),ng()()(),wl(114,"tr")(115,"td")(116,"code"),Ux(117,"--font-weight"),ng()(),wl(118,"td"),Ux(119,"Peso da fonte"),ng(),wl(120,"td")(121,"code"),Ux(122,"var(--font-weight-normal)"),ng()()(),wl(123,"tr")(124,"td")(125,"strong"),Ux(126,"Default"),ng()(),Ul(127,"td")(128,"td"),ng(),wl(129,"tr")(130,"td")(131,"code"),Ux(132,"--border-color"),ng()(),wl(133,"td"),Ux(134,"Cor da borda no estado padr\xE3o"),ng(),wl(135,"td")(136,"code"),Ux(137,"var(--color-neutral-light-20)"),ng()()(),wl(138,"tr")(139,"td")(140,"code"),Ux(141,"--text-color"),ng()(),wl(142,"td"),Ux(143,"Cor do texto no estado padr\xE3o"),ng(),wl(144,"td")(145,"code"),Ux(146,"var(--color-neutral-dark-80)"),ng()()(),wl(147,"tr")(148,"td")(149,"code"),Ux(150,"--background-color"),ng()(),wl(151,"td"),Ux(152,"Cor de fundo no estado padr\xE3o"),ng(),wl(153,"td")(154,"code"),Ux(155,"transparent"),ng()()(),wl(156,"tr")(157,"td")(158,"strong"),Ux(159,"Hover"),ng()(),Ul(160,"td")(161,"td"),ng(),wl(162,"tr")(163,"td")(164,"code"),Ux(165,"--background-color-hover"),ng()(),wl(166,"td"),Ux(167,"Cor de fundo no estado hover"),ng(),wl(168,"td")(169,"code"),Ux(170,"var(--color-brand-01-lightest)"),ng()()(),wl(171,"tr")(172,"td")(173,"code"),Ux(174,"--text-color-hover"),ng()(),wl(175,"td"),Ux(176,"Cor do texto no estado hover"),ng(),wl(177,"td")(178,"code"),Ux(179,"var(--color-action-default)"),ng()()(),wl(180,"tr")(181,"td")(182,"strong"),Ux(183,"Selected"),ng()(),Ul(184,"td")(185,"td"),ng(),wl(186,"tr")(187,"td")(188,"code"),Ux(189,"--background-color-selected"),ng()(),wl(190,"td"),Ux(191,"Cor de fundo no estado selecionado"),ng(),wl(192,"td")(193,"code"),Ux(194,"var(--color-brand-01-lightest)"),ng()()(),wl(195,"tr")(196,"td")(197,"code"),Ux(198,"--border-color-selected"),ng()(),wl(199,"td"),Ux(200,"Cor da borda no estado selecionado"),ng(),wl(201,"td")(202,"code"),Ux(203,"var(--color-brand-01-lighter)"),ng()()(),wl(204,"tr")(205,"td")(206,"code"),Ux(207,"--text-color-selected"),ng()(),wl(208,"td"),Ux(209,"Cor do texto no estado selecionado"),ng(),wl(210,"td")(211,"code"),Ux(212,"var(--color-action-default)"),ng()()(),wl(213,"tr")(214,"td")(215,"code"),Ux(216,"--icon-color-selected"),ng()(),wl(217,"td"),Ux(218,"Cor do \xEDcone no estado selecionado"),ng(),wl(219,"td")(220,"code"),Ux(221,"var(--color-action-default)"),ng()()(),wl(222,"tr")(223,"td")(224,"strong"),Ux(225,"Disabled"),ng()(),Ul(226,"td")(227,"td"),ng(),wl(228,"tr")(229,"td")(230,"code"),Ux(231,"--opacity-disabled"),ng()(),wl(232,"td"),Ux(233,"Opacidade no estado desabilitado"),ng(),wl(234,"td")(235,"code"),Ux(236,"0.5"),ng()()()()()(),wl(237,"div",9)(238,"h4",10),Ux(239,"Seletor"),ng(),wl(240,"pre",11),Ux(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),ng()(),wl(242,"h4",12),Ux(243,"Propriedades"),ng(),wl(244,"table",13)(245,"tr",14)(246,"th",15),Ux(247,"Nome"),ng(),wl(248,"th",15),Ux(249,"Tipo"),ng(),wl(250,"th",15),Ux(251,"Padr\xE3o"),ng(),wl(252,"th",15),Ux(253,"Descri\xE7\xE3o"),ng()(),wl(254,"tr",16)(255,"td",17)(256,"div",18)(257,"span",19),Ux(258," p-disabled"),Ul(259,"br"),ng()()(),wl(260,"td",20)(261,"code",21),Ux(262,"boolean"),ng()(),wl(263,"td",22)(264,"p")(265,"code"),Ux(266,"false"),ng()()(),wl(267,"td",23)(268,"em")(269,"strong"),Ux(270,"(opcional)"),ng()(),wl(271,"p"),Ux(272,"Define se o chip est\xE1 desabilitado, impedindo qualquer intera\xE7\xE3o do usu\xE1rio."),ng(),wl(273,"p"),Ux(274,"Quando habilitado, o chip n\xE3o responde a cliques nem a eventos de teclado (Enter/Space)."),ng()()(),wl(275,"tr",16)(276,"td",17)(277,"div",18)(278,"span",19),Ux(279," p-label"),Ul(280,"br"),ng()()(),wl(281,"td",20)(282,"code",24),Ux(283,"string "),ng(),wl(284,"code",25),Ux(285," undefined"),ng()(),wl(286,"td",22),Ux(287,"-"),ng(),wl(288,"td",23)(289,"em")(290,"strong"),Ux(291,"(opcional)"),ng()(),wl(292,"p"),Ux(293,"Define o r\xF3tulo de texto exibido no chip."),ng()()(),wl(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),Ux(298," p-selected"),Ul(299,"br"),ng()()(),wl(300,"td",20)(301,"code",21),Ux(302,"boolean"),ng()(),wl(303,"td",22)(304,"p")(305,"code"),Ux(306,"false"),ng()()(),wl(307,"td",23)(308,"em")(309,"strong"),Ux(310,"(opcional)"),ng()(),wl(311,"p"),Ux(312,"Define o estado de sele\xE7\xE3o do chip."),ng()()(),wl(313,"tr",16)(314,"td",17)(315,"div",26)(316,"span",27),Ux(317," (p-selected-change)"),Ul(318,"br"),ng()()(),wl(319,"td",20)(320,"code",28),Ux(321,"EventEmitter"),ng()(),wl(322,"td",22),Ux(323,"-"),ng(),wl(324,"td",23)(325,"em")(326,"strong"),Ux(327,"(opcional)"),ng()(),wl(328,"p"),Ux(329,"Evento disparado ap\xF3s a altera\xE7\xE3o do estado de sele\xE7\xE3o do "),wl(330,"em"),Ux(331,"chip"),ng(),Ux(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),ng()()()(),wl(333,"h3"),Ux(334,"Interfaces"),ng(),wl(335,"h4",29)(336,"code",5),Ux(337,"PoFilterChipSelectedChange"),ng()(),wl(338,"div",2)(339,"p"),Ux(340,"Interface que define o objeto emitido pelo evento "),wl(341,"code"),Ux(342,"p-selected-change"),ng(),Ux(343,"."),ng()(),wl(344,"h4",12),Ux(345,"Propriedades"),ng(),wl(346,"table",13)(347,"tr",14)(348,"th",15),Ux(349,"Nome"),ng(),wl(350,"th",15),Ux(351,"Tipo"),ng(),wl(352,"th",15),Ux(353,"Descri\xE7\xE3o"),ng()(),wl(354,"tr",16)(355,"td",17)(356,"div",18)(357,"span",19),Ux(358," label"),Ul(359,"br"),ng()()(),wl(360,"td",20)(361,"code",24),Ux(362,"string"),ng()(),wl(363,"td",23)(364,"p"),Ux(365,"R\xF3tulo de texto do "),wl(366,"em"),Ux(367,"chip"),ng(),Ux(368,"."),ng()()(),wl(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),Ux(373," selected"),Ul(374,"br"),ng()()(),wl(375,"td",20)(376,"code",21),Ux(377,"boolean"),ng()(),wl(378,"td",23)(379,"p"),Ux(380,"Estado de sele\xE7\xE3o do "),wl(381,"em"),Ux(382,"chip"),ng(),Ux(383," ("),wl(384,"code"),Ux(385,"true"),ng(),Ux(386," para selecionado, "),wl(387,"code"),Ux(388,"false"),ng(),Ux(389," para desmarcado)."),ng()()()()());},dependencies:[fP],encapsulation:2})}return n})();var fe=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Filter Chip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return l.changeTab("doc")}),Ul(3,"sample-po-filter-chip-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return l.changeTab("web")}),Ul(5,"sample-po-filter-chip-basic-view")(6,"sample-po-filter-chip-labs-view")(7,"sample-po-filter-chip-filter-list-view"),ng()()()),o&2&&(YE("p-actions",l.actions),Pp(2),YE("p-active",l.activeTab==="doc"),Pp(2),YE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[D3,Vd,Rd,pe,se,ce,he],encapsulation:2})}return n})();var Me=[{path:"",component:fe}],ue=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[vL.forChild(Me),vL]})}return n})();var dt=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[u5,ue]})}return n})();export{dt as DocPoFilterChipModule};