import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,df as _me,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,bL as H3,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,aI as gc,aQ as cx,aS as lx,a3 as SNe,I as dw,aD as Jy,aT as Zx,aE as e_,aA as Ex}from'./main-OS7VVRJY.js';var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Filter"]],template:function(o,l){o&1&&Hl(0,"po-filter-chip",0);},dependencies:[_me],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Filter Chip Basic"),og(),Cl(4,"a",2),dt("click",function(){return l.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-filter-chip-basic"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,fe,l.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,oe],encapsulation:2})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore();}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event="p-selected-change";}restore(){this.label="Filter",this.selected=false,this.disabled=false,this.event="",this.model="";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs"]],standalone:false,decls:16,vars:8,consts:[["f","ngForm"],[1,"po-row"],[3,"p-selected-change","p-label","p-selected","p-disabled"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selected","p-label","Selected",1,"po-md-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,l){if(o&1){let h=gx();Cl(0,"div",1)(1,"po-filter-chip",2),dt("p-selected-change",function(c){return l.onSelectedChange(c)}),og()(),Hl(2,"po-divider"),Cl(3,"div",1),Hl(4,"po-info",3)(5,"po-info",4),og(),Hl(6,"po-divider"),Cl(7,"form",null,0)(9,"div",1)(10,"po-input",5),gw("ngModelChange",function(c){return Jy(h),Zx(l.label,c)||(l.label=c),e_(c)}),og(),Z0(),og(),Cl(11,"div",1)(12,"po-switch",6),gw("ngModelChange",function(c){return Jy(h),Zx(l.selected,c)||(l.selected=c),e_(c)}),og(),Z0(),Cl(13,"po-switch",7),gw("ngModelChange",function(c){return Jy(h),Zx(l.disabled,c)||(l.disabled=c),e_(c)}),og(),Z0(),og(),Cl(14,"div",1)(15,"po-button",8),dt("p-click",function(){return l.restore()}),og()()();}o&2&&(Lp(),ZE("p-label",l.label)("p-selected",l.selected)("p-disabled",l.disabled),Lp(3),ZE("p-value",l.model),Lp(),ZE("p-value",l.event),Lp(5),pw("ngModel",l.label),X0(),Lp(2),pw("ngModel",l.selected),X0(),Lp(),pw("ngModel",l.disabled),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,H3,_me,sme],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Filter Chip Labs"),og(),Cl(4,"a",2),dt("click",function(){return l.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-filter-chip-labs"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Se,l.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return n})();var Ee=(n,b)=>b.label,ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=gx();Cl(0,"po-filter-chip",7),dt("p-selected-change",function(l){Jy(a);let h=Ex();return e_(h.onFilterChange(l))}),og();}if(n&2){let a=b.$implicit;ZE("p-label",a.label)("p-selected",a.selected);}}function Fe(n,b){if(n&1&&(Cl(0,"div",5)(1,"span",8),qx(2),og(),Cl(3,"span",9),qx(4),og()()),n&2){let a=b.$implicit;Lp(2),dw(a.name),Lp(2),dg("(",a.category,")");}}function ye(n,b){n&1&&(Cl(0,"div",6)(1,"span",10),qx(2,"No products found."),og()());}var de=(()=>{class n{filters=[{label:"Electronics",selected:false},{label:"Clothing",selected:false},{label:"Books",selected:false},{label:"Sports",selected:false}];products=[{name:"Laptop",category:"Electronics"},{name:"Smartphone",category:"Electronics"},{name:"T-Shirt",category:"Clothing"},{name:"Sneakers",category:"Clothing"},{name:"Novel",category:"Books"},{name:"Cookbook",category:"Books"},{name:"Basketball",category:"Sports"},{name:"Tennis Racket",category:"Sports"}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected);}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list"]],standalone:false,decls:16,vars:2,consts:[[1,"po-row"],[1,"po-md-12"],[1,"po-font-subtitle"],[1,"po-mt-1"],[1,"po-mr-1",3,"p-label","p-selected"],[1,"po-row","po-p-1"],[1,"po-row","po-p-2"],[1,"po-mr-1",3,"p-selected-change","p-label","p-selected"],[1,"po-font-text-bold","po-mr-1"],[1,"po-font-text-small"],[1,"po-font-text"]],template:function(o,l){o&1&&(Cl(0,"div",0)(1,"div",1)(2,"p",2),qx(3,"Filter by category:"),og(),Cl(4,"div",3),cx(5,xe,1,2,"po-filter-chip",4,Ee),og()()(),Hl(7,"po-divider"),Cl(8,"div",0)(9,"div",1)(10,"p",2),qx(11),og(),Cl(12,"po-container"),cx(13,Fe,5,2,"div",5,ve,false,ye,3,0,"div",6),og()()()),o&2&&(Lp(5),lx(l.filters),Lp(6),dg("Products (",l.filteredProducts.length,"):"),Lp(2),lx(l.filteredProducts));},dependencies:[gc,_v,_me],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Filter Chip - Filter List"),og(),Cl(4,"a",2),dt("click",function(){return l.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-filter-chip-filter-list"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,l.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-doc"]],standalone:false,decls:390,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#listbox"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","undefined"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"]],template:function(o,l){o&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFilterChipModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-filter-chip"),og(),qx(9,"."),og()(),Cl(10,"h3",3),qx(11,"Componente"),og(),Cl(12,"h4",4)(13,"code",5),qx(14,"PoFilterChipComponent"),og()(),Cl(15,"div",2)(16,"p"),qx(17,"O "),Cl(18,"code"),qx(19,"po-filter-chip"),og(),qx(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),og(),Cl(21,"h4"),qx(22,"Boas pr\xE1ticas"),og(),Cl(23,"ul")(24,"li"),qx(25,"Utilize "),Cl(26,"code"),qx(27,"labels"),og(),qx(28," curtos e descritivos para os filtros."),og(),Cl(29,"li"),qx(30,"Agrupe m\xFAltiplos "),Cl(31,"code"),qx(32,"po-filter-chip"),og(),qx(33," para representar op\xE7\xF5es de filtragem relacionadas."),og(),Cl(34,"li"),qx(35,"Utilize a propriedade "),Cl(36,"code"),qx(37,"p-disabled"),og(),qx(38," para filtros temporariamente indispon\xEDveis."),og()(),Cl(39,"h4"),qx(40,"Acessibilidade tratada no componente"),og(),Cl(41,"p"),qx(42,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Cl(43,"ul")(44,"li"),qx(45,"O componente possui "),Cl(46,"code"),qx(47,'role="option"'),og(),qx(48," e "),Cl(49,"code"),qx(50,"aria-selected"),og(),qx(51," refletindo o estado de sele\xE7\xE3o. "),Cl(52,"a",6),qx(53,"W3C WAI-ARIA 3.14 Listbox"),og()(),Cl(54,"li"),qx(55,"Quando em foco, o chip \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Cl(56,"a",7),qx(57,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()()(),Cl(58,"h4"),qx(59,"Tokens customiz\xE1veis"),og(),Cl(60,"p"),qx(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(62,"blockquote")(63,"p"),qx(64,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(65,"a",8),qx(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(67,"."),og()(),Cl(68,"table")(69,"thead")(70,"tr")(71,"th"),qx(72,"Propriedade"),og(),Cl(73,"th"),qx(74,"Descri\xE7\xE3o"),og(),Cl(75,"th"),qx(76,"Valor Padr\xE3o"),og()()(),Cl(77,"tbody")(78,"tr")(79,"td")(80,"code"),qx(81,"--border-radius"),og()(),Cl(82,"td"),qx(83,"Raio dos cantos do elemento"),og(),Cl(84,"td")(85,"code"),qx(86,"var(--border-radius-lg)"),og()()(),Cl(87,"tr")(88,"td")(89,"code"),qx(90,"--border-width"),og()(),Cl(91,"td"),qx(92,"Largura da borda"),og(),Cl(93,"td")(94,"code"),qx(95,"var(--border-width-sm)"),og()()(),Cl(96,"tr")(97,"td")(98,"code"),qx(99,"--font-family"),og()(),Cl(100,"td"),qx(101,"Fam\xEDlia tipogr\xE1fica"),og(),Cl(102,"td")(103,"code"),qx(104,"var(--font-family-theme)"),og()()(),Cl(105,"tr")(106,"td")(107,"code"),qx(108,"--font-size"),og()(),Cl(109,"td"),qx(110,"Tamanho da fonte"),og(),Cl(111,"td")(112,"code"),qx(113,"var(--font-size-default)"),og()()(),Cl(114,"tr")(115,"td")(116,"code"),qx(117,"--font-weight"),og()(),Cl(118,"td"),qx(119,"Peso da fonte"),og(),Cl(120,"td")(121,"code"),qx(122,"var(--font-weight-normal)"),og()()(),Cl(123,"tr")(124,"td")(125,"strong"),qx(126,"Default"),og()(),Hl(127,"td")(128,"td"),og(),Cl(129,"tr")(130,"td")(131,"code"),qx(132,"--border-color"),og()(),Cl(133,"td"),qx(134,"Cor da borda no estado padr\xE3o"),og(),Cl(135,"td")(136,"code"),qx(137,"var(--color-neutral-light-20)"),og()()(),Cl(138,"tr")(139,"td")(140,"code"),qx(141,"--text-color"),og()(),Cl(142,"td"),qx(143,"Cor do texto no estado padr\xE3o"),og(),Cl(144,"td")(145,"code"),qx(146,"var(--color-neutral-dark-80)"),og()()(),Cl(147,"tr")(148,"td")(149,"code"),qx(150,"--background-color"),og()(),Cl(151,"td"),qx(152,"Cor de fundo no estado padr\xE3o"),og(),Cl(153,"td")(154,"code"),qx(155,"transparent"),og()()(),Cl(156,"tr")(157,"td")(158,"strong"),qx(159,"Hover"),og()(),Hl(160,"td")(161,"td"),og(),Cl(162,"tr")(163,"td")(164,"code"),qx(165,"--background-color-hover"),og()(),Cl(166,"td"),qx(167,"Cor de fundo no estado hover"),og(),Cl(168,"td")(169,"code"),qx(170,"var(--color-brand-01-lightest)"),og()()(),Cl(171,"tr")(172,"td")(173,"code"),qx(174,"--text-color-hover"),og()(),Cl(175,"td"),qx(176,"Cor do texto no estado hover"),og(),Cl(177,"td")(178,"code"),qx(179,"var(--color-action-default)"),og()()(),Cl(180,"tr")(181,"td")(182,"strong"),qx(183,"Selected"),og()(),Hl(184,"td")(185,"td"),og(),Cl(186,"tr")(187,"td")(188,"code"),qx(189,"--background-color-selected"),og()(),Cl(190,"td"),qx(191,"Cor de fundo no estado selecionado"),og(),Cl(192,"td")(193,"code"),qx(194,"var(--color-brand-01-lightest)"),og()()(),Cl(195,"tr")(196,"td")(197,"code"),qx(198,"--border-color-selected"),og()(),Cl(199,"td"),qx(200,"Cor da borda no estado selecionado"),og(),Cl(201,"td")(202,"code"),qx(203,"var(--color-brand-01-lighter)"),og()()(),Cl(204,"tr")(205,"td")(206,"code"),qx(207,"--text-color-selected"),og()(),Cl(208,"td"),qx(209,"Cor do texto no estado selecionado"),og(),Cl(210,"td")(211,"code"),qx(212,"var(--color-action-default)"),og()()(),Cl(213,"tr")(214,"td")(215,"code"),qx(216,"--icon-color-selected"),og()(),Cl(217,"td"),qx(218,"Cor do \xEDcone no estado selecionado"),og(),Cl(219,"td")(220,"code"),qx(221,"var(--color-action-default)"),og()()(),Cl(222,"tr")(223,"td")(224,"strong"),qx(225,"Disabled"),og()(),Hl(226,"td")(227,"td"),og(),Cl(228,"tr")(229,"td")(230,"code"),qx(231,"--opacity-disabled"),og()(),Cl(232,"td"),qx(233,"Opacidade no estado desabilitado"),og(),Cl(234,"td")(235,"code"),qx(236,"0.5"),og()()()()()(),Cl(237,"div",9)(238,"h4",10),qx(239,"Seletor"),og(),Cl(240,"pre",11),qx(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),og()(),Cl(242,"h4",12),qx(243,"Propriedades"),og(),Cl(244,"table",13)(245,"tr",14)(246,"th",15),qx(247,"Nome"),og(),Cl(248,"th",15),qx(249,"Tipo"),og(),Cl(250,"th",15),qx(251,"Padr\xE3o"),og(),Cl(252,"th",15),qx(253,"Descri\xE7\xE3o"),og()(),Cl(254,"tr",16)(255,"td",17)(256,"div",18)(257,"span",19),qx(258," p-disabled"),Hl(259,"br"),og()()(),Cl(260,"td",20)(261,"code",21),qx(262,"boolean"),og()(),Cl(263,"td",22)(264,"p")(265,"code"),qx(266,"false"),og()()(),Cl(267,"td",23)(268,"em")(269,"strong"),qx(270,"(opcional)"),og()(),Cl(271,"p"),qx(272,"Define se o chip est\xE1 desabilitado, impedindo qualquer intera\xE7\xE3o do usu\xE1rio."),og(),Cl(273,"p"),qx(274,"Quando habilitado, o chip n\xE3o responde a cliques nem a eventos de teclado (Enter/Space)."),og()()(),Cl(275,"tr",16)(276,"td",17)(277,"div",18)(278,"span",19),qx(279," p-label"),Hl(280,"br"),og()()(),Cl(281,"td",20)(282,"code",24),qx(283,"string "),og(),Cl(284,"code",25),qx(285," undefined"),og()(),Cl(286,"td",22),qx(287,"-"),og(),Cl(288,"td",23)(289,"em")(290,"strong"),qx(291,"(opcional)"),og()(),Cl(292,"p"),qx(293,"Define o r\xF3tulo de texto exibido no chip."),og()()(),Cl(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),qx(298," p-selected"),Hl(299,"br"),og()()(),Cl(300,"td",20)(301,"code",21),qx(302,"boolean"),og()(),Cl(303,"td",22)(304,"p")(305,"code"),qx(306,"false"),og()()(),Cl(307,"td",23)(308,"em")(309,"strong"),qx(310,"(opcional)"),og()(),Cl(311,"p"),qx(312,"Define o estado de sele\xE7\xE3o do chip."),og()()(),Cl(313,"tr",16)(314,"td",17)(315,"div",26)(316,"span",27),qx(317," (p-selected-change)"),Hl(318,"br"),og()()(),Cl(319,"td",20)(320,"code",28),qx(321,"EventEmitter"),og()(),Cl(322,"td",22),qx(323,"-"),og(),Cl(324,"td",23)(325,"em")(326,"strong"),qx(327,"(opcional)"),og()(),Cl(328,"p"),qx(329,"Evento disparado ap\xF3s a altera\xE7\xE3o do estado de sele\xE7\xE3o do "),Cl(330,"em"),qx(331,"chip"),og(),qx(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),og()()()(),Cl(333,"h3"),qx(334,"Interfaces"),og(),Cl(335,"h4",29)(336,"code",5),qx(337,"PoFilterChipSelectedChange"),og()(),Cl(338,"div",2)(339,"p"),qx(340,"Interface que define o objeto emitido pelo evento "),Cl(341,"code"),qx(342,"p-selected-change"),og(),qx(343,"."),og()(),Cl(344,"h4",12),qx(345,"Propriedades"),og(),Cl(346,"table",13)(347,"tr",14)(348,"th",15),qx(349,"Nome"),og(),Cl(350,"th",15),qx(351,"Tipo"),og(),Cl(352,"th",15),qx(353,"Descri\xE7\xE3o"),og()(),Cl(354,"tr",16)(355,"td",17)(356,"div",18)(357,"span",19),qx(358," label"),Hl(359,"br"),og()()(),Cl(360,"td",20)(361,"code",24),qx(362,"string"),og()(),Cl(363,"td",23)(364,"p"),qx(365,"R\xF3tulo de texto do "),Cl(366,"em"),qx(367,"chip"),og(),qx(368,"."),og()()(),Cl(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),qx(373," selected"),Hl(374,"br"),og()()(),Cl(375,"td",20)(376,"code",21),qx(377,"boolean"),og()(),Cl(378,"td",23)(379,"p"),qx(380,"Estado de sele\xE7\xE3o do "),Cl(381,"em"),qx(382,"chip"),og(),qx(383," ("),Cl(384,"code"),qx(385,"true"),og(),qx(386," para selecionado, "),Cl(387,"code"),qx(388,"false"),og(),qx(389," para desmarcado)."),og()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Filter Chip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return l.changeTab("doc")}),Hl(3,"sample-po-filter-chip-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return l.changeTab("web")}),Hl(5,"sample-po-filter-chip-basic-view")(6,"sample-po-filter-chip-labs-view")(7,"sample-po-filter-chip-filter-list-view"),og()()()),o&2&&(ZE("p-actions",l.actions),Lp(2),ZE("p-active",l.activeTab==="doc"),Lp(2),ZE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ae,pe,se,me],encapsulation:2})}return n})();var De=[{path:"",component:ce}],he=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[bL.forChild(De),bL]})}return n})();var et=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[ca,he]})}return n})();export{et as DocPoFilterChipModule};